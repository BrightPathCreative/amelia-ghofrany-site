import type { Metadata } from "next";
import { About } from "@/components/About";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "About | Amelia Ghofrany",
  description:
    "Enterprise rigour, founder energy and human-first leadership: Amelia Ghofrany's story across continents, cultures and 20+ years of transformation work.",
};

export default function AboutPage() {
  return (
    <ContentPageLayout
      wide
      eyebrow="About Amelia"
      title={
        <>
          Enterprise rigour.
          <br />
          Founder energy.
          <br />
          <em className="italic text-brand-taupe">Human-first</em> leadership.
        </>
      }
    >
      <About />
    </ContentPageLayout>
  );
}
