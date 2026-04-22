import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PissPot — gamify nights out",
    template: "%s · PissPot",
  },
  description:
    "Track drinks, map your crawl, climb leaderboards, and share the night with your crew. The social app for nights out — join the waitlist.",
  keywords: ["PissPot", "nights out", "pub crawl", "social", "waitlist", "crew"],
  openGraph: {
    title: "PissPot — gamify nights out",
    description:
      "Track drinks, map your crawl, and share the night with your crew.",
    type: "website",
    locale: "en_GB",
    siteName: "PissPot",
  },
  twitter: {
    card: "summary_large_image",
    title: "PissPot — gamify nights out",
    description:
      "Track drinks, map your crawl, and share the night with your crew.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
