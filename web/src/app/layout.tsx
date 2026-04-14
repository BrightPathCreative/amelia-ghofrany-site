import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { CursorGlow } from "@/components/CursorGlow";
import { SiteInit } from "@/components/SiteInit";
import { Navigation } from "@/components/Navigation";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amelia Ghofrany — Investor, Entrepreneur, Coach",
  description:
    "Strategic consultant and coach partnering with ambitious leaders to navigate complexity, unlock growth, and create lasting impact.",
  openGraph: {
    title: "Amelia Ghofrany",
    description:
      "Clarity, courage & the confidence to lead with purpose. Strategic consulting, coaching, and investing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-cream text-charcoal">
        <NoiseOverlay />
        <CursorGlow />
        <SiteInit />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
