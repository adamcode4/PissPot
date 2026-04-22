import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PissPot — Gamify your nights out",
    template: "%s · PissPot",
  },
  description:
    "Track drinks, map your crawl, climb leaderboards, and share the night with friends. The social app for nights out — join the waitlist.",
  keywords: [
    "PissPot",
    "nights out",
    "pub crawl",
    "social",
    "waitlist",
  ],
  openGraph: {
    title: "PissPot — Gamify your nights out",
    description:
      "Track drinks, map your crawl, and share the night with friends.",
    type: "website",
    locale: "en_GB",
    siteName: "PissPot",
  },
  twitter: {
    card: "summary_large_image",
    title: "PissPot — Gamify your nights out",
    description:
      "Track drinks, map your crawl, and share the night with friends.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
