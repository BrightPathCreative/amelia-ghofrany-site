import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { CursorGlow } from "@/components/CursorGlow";
import { SiteInit } from "@/components/SiteInit";
import { Navigation } from "@/components/Navigation";
import {
  BackToTopButton,
  ScrollProvider,
  ScrollToTop,
} from "@/components/scroll";

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
  metadataBase: new URL("https://www.ameliaghofrany.com"),
  title: {
    default: "Amelia Ghofrany | Investor, Strategic Advisor, Speaker",
    template: "%s | Amelia Ghofrany",
  },
  description:
    "I buy and build Australian businesses, help their leaders make sharper calls, and speak on what it actually takes to lead with purpose.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.ameliaghofrany.com",
    siteName: "Amelia Ghofrany",
    title: "Amelia Ghofrany",
    description:
      "Investor. Strategic advisor. Speaker. Buying and building Australian businesses, advising leaders, and speaking on purpose-led leadership.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amelia Ghofrany — Investor, Strategic Advisor, Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amelia Ghofrany",
    description:
      "Investor. Strategic advisor. Speaker. Buying and building Australian businesses, advising leaders, and speaking on purpose-led leadership.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
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
        <ScrollProvider>
          <ScrollToTop />
          <BackToTopButton />
          <NoiseOverlay />
          <CursorGlow />
          <SiteInit />
          <Navigation />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
