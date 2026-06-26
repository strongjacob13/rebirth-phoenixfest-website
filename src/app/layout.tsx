import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rebirth Phoenixfest 2027 | Spring Equinox Festival",
  description: "Rebirth Phoenixfest is March 20–22, 2027 at Sunrise Valley Ranch, TX with music, art, workshops, community, and Pyramid Events.",
  metadataBase: new URL("https://rebirth-phoenixfest.org"),
  openGraph: {
    title: "Rebirth Phoenixfest 2027",
    description: "Over the spring equinox: March 20–22, 2027 at Sunrise Valley Ranch, TX.",
    type: "website",
    url: "https://rebirth-phoenixfest.org",
    images: ["/rebirth-phoenixfest-flyer-2027.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
