import { AboutTeaser } from "@/components/AboutTeaser";
import { BeyondTeaser } from "@/components/BeyondTeaser";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Services } from "@/components/Services";
import { TestimonialSpotlight } from "@/components/TestimonialSpotlight";

export default function Home() {
  return (
    <main className="relative z-[2] flex flex-1 flex-col">
      <Hero />
      <Services />
      <TestimonialSpotlight />
      <AboutTeaser />
      <BeyondTeaser />
      <LogoMarquee />
      <ContactCTA />
      <Footer />
    </main>
  );
}
