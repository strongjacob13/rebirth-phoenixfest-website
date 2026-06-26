import { put } from "@vercel/blob";
import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_EMAIL = "information@rebirth-phoenixfest.org";

type SubscribePayload = {
  email?: unknown;
  name?: unknown;
  website?: unknown;
};

function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function normalizeName(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 120) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readPayload(request: NextRequest): Promise<SubscribePayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  return {
    email: formData.get("email"),
    name: formData.get("name"),
    website: formData.get("website"),
  };
}

async function storeInVercelBlob(email: string, name: string, request: NextRequest) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return { configured: false };
  }

  const id = createHash("sha256").update(email).digest("hex");
  const subscribedAt = new Date().toISOString();
  const payload = {
    id,
    email,
    name,
    subscribedAt,
    source: "rebirth-phoenixfest.org",
    contactEmail: CONTACT_EMAIL,
    userAgent: request.headers.get("user-agent") ?? "",
  };

  const blob = await put(`subscriptions/${id}.json`, JSON.stringify(payload, null, 2), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });

  return { configured: true, url: blob.url };
}

async function addToResendAudience(email: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return { configured: false };
  }

  const response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      firstName: name || undefined,
      unsubscribed: false,
    }),
  });

  if (response.ok || response.status === 409) {
    return { configured: true };
  }

  const errorBody = await response.text();
  throw new Error(`Resend rejected the subscription request: ${errorBody}`);
}

export async function POST(request: NextRequest) {
  try {
    const payload = await readPayload(request);
    const email = normalizeEmail(payload.email);
    const name = normalizeName(payload.name);

    if (typeof payload.website === "string" && payload.website.trim()) {
      return NextResponse.json({ message: "Thanks. You are subscribed." });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const [storageResult, emailListResult] = await Promise.all([
      storeInVercelBlob(email, name, request),
      addToResendAudience(email, name),
    ]);

    if (!storageResult.configured && !emailListResult.configured) {
      return NextResponse.json(
        {
          error:
            "The subscription service is not configured yet. Please email information@rebirth-phoenixfest.org to be added manually.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "You are subscribed. Updates will come from information@rebirth-phoenixfest.org.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          "The subscription could not be saved right now. Please email information@rebirth-phoenixfest.org and we will add you manually.",
      },
      { status: 500 },
    );
  }
}
