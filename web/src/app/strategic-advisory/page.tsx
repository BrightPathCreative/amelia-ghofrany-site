import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const COMPASS_POINT_URL = "https://www.compasspointadvisory.com/";

export const metadata: Metadata = {
  title: "Strategic Advisory | Amelia Ghofrany",
  description:
    "Values-led strategic advisory for SMEs, founders and family enterprises through CompassPoint Advisory — plain advice that gets acted on.",
};

export default function StrategicAdvisoryPage() {
  return (
    <ServicePageLayout
      eyebrow="Strategic Advisory"
      title="Strategy that changes lives at the SME level."
      ctas={[
        {
          href: COMPASS_POINT_URL,
          label: "Visit CompassPoint Advisory",
          external: true,
          primary: true,
        },
        {
          href: "/contact",
          label: "Get in touch",
        },
      ]}
    >
      <p>
        Most of my strategic advisory work happens through CompassPoint
        Advisory, the practice I founded to help SMEs, founders and family
        enterprises grow and transform. I&apos;ve advised executive teams and
        led major transformation programs across organisations like the ATO,
        Qantas, Commonwealth Bank and NAB — but I set up CompassPoint Advisory
        because I believe strategy changes lives most at the SME level, not just
        in big corporates.
      </p>
      <p>
        My approach is values-led and practical: plain advice that gets acted
        on, not a deck full of options you&apos;ll shelve. Whether you&apos;re
        navigating growth, a transformation, or a decision you can&apos;t quite
        call, I bring curiosity, real operating experience, and the courage to
        tell you what I actually think.
      </p>
      <p>
        For the full range of services, or to see how I work with clients, visit{" "}
        <a
          href={COMPASS_POINT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-navy underline decoration-brand-taupe/50 underline-offset-4 transition-colors hover:decoration-brand-taupe"
        >
          CompassPoint Advisory
        </a>
        .
      </p>
    </ServicePageLayout>
  );
}
