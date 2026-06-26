"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, website }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Subscription failed. Please try again.");
      }

      setStatus("success");
      setMessage(result.message ?? "You are on the Rebirth Phoenixfest update list.");
      setEmail("");
      setName("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Subscription failed. Please try again.");
    }
  }

  return (
    <form className="subscribe-form" onSubmit={subscribe}>
      <span className="tiny">EMAIL LIST</span>
      <h3>Subscribe for updates.</h3>
      <p>Join the update list for announcements from information@rebirth-phoenixfest.org.</p>

      <label htmlFor="subscriber-name">Name <span>optional</span></label>
      <input
        id="subscriber-name"
        name="name"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="subscriber-email">Email address</label>
      <div>
        <input
          id="subscriber-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"} <span>↗</span>
        </button>
      </div>

      <label className="hidden-field" htmlFor="subscriber-website">Website</label>
      <input
        className="hidden-field"
        id="subscriber-website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />

      <p className={`form-status ${status === "error" ? "error" : ""}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
