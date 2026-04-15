import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { CursorGlow } from "@/components/CursorGlow";
import { SiteInit } from "@/components/SiteInit";
import { BackToTop } from "@/components/BackToTop";
import { Navigation } from "@/components/Navigation";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-brand-grey text-brand-black">
        <NoiseOverlay />
        <CursorGlow />
        <SiteInit />
        <Navigation />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
