import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Speaker | Amelia Ghofrany",
  description:
    "Amelia Ghofrany is available for keynotes, panels, workshops and podcasts on women in leadership, business growth, and meaningful change.",
};

export default function SpeakerPage() {
  return (
    <ServicePageLayout
      eyebrow="Speaker"
      title="Keynotes, panels, and conversations that move people"
      ctas={[
        {
          href: "/contact",
          label: "Get in touch",
          primary: true,
        },
      ]}
    >
      <p>
        I&apos;m available for keynotes, panel discussions, workshops and
        podcasts, sharing insights on women in leadership, business growth, and
        driving meaningful change. I speak from experience, not theory:
        twenty years advising executive teams, building a business from scratch,
        and backing founders has taught me a lot about what moves people and
        organisations forward.
      </p>

      <figure className="my-2 overflow-hidden rounded-sm border border-brand-taupe/30 shadow-md">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/speaker_keynote.jpg"
            alt="Amelia Ghofrany speaking to an audience at a leadership event"
            fill
            className="object-cover object-[center_20%]"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      </figure>

      <p>
        If you&apos;re looking for someone who&apos;ll bring a genuine point of
        view rather than a rehearsed talk, I&apos;d love to hear about your
        event.
      </p>
      <p>
        Get in touch to check availability and talk through what would work
        best for your audience.
      </p>
    </ServicePageLayout>
  );
}
