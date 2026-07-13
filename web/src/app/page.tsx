import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { FullWidthImage } from "@/components/FullWidthImage";
import { Hero } from "@/components/Hero";
import { HomeTeasers } from "@/components/HomeTeasers";
import { ImageStrip } from "@/components/ImageStrip";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative z-[2] flex flex-1 flex-col">
      <Hero />
      <ImageStrip />
      <LogoMarquee />
      <Services />
      <FullWidthImage />
      <HomeTeasers />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
