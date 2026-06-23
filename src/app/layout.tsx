import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rebirth Phoenixfest | Rise Together",
  description: "A new festival of sound, art, movement, and collective renewal. Rebirth Phoenixfest is coming soon.",
  metadataBase: new URL("https://rebirth-phoenixfest.org"),
  openGraph: {
    title: "Rebirth Phoenixfest",
    description: "Out of the ordinary. Into the fire. Rise with us.",
    type: "website",
    url: "https://rebirth-phoenixfest.org",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
