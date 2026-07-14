import Image from "next/image";
import { AnimatedStatNumber } from "@/components/AnimatedStatNumber";

/** Full About body; used on `/about` (page chrome supplies the title). */
export function About() {
  return (
    <div className="grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
      <div className="space-y-10">
        <blockquote className="border-l-2 border-brand-taupe bg-white/60 px-6 py-5 text-lg font-light leading-relaxed text-brand-black/85 backdrop-blur-sm">
          &ldquo;Diverse perspectives don&apos;t just matter; they&apos;re the
          spark for creativity, smarter decisions, and long-term success.&rdquo;
        </blockquote>

        <div className="relative mx-auto w-full max-w-[min(100%,20rem)] md:mx-0">
          <div
            className="pointer-events-none absolute -right-3 -top-4 h-[90%] w-[78%] rounded-sm border border-brand-taupe/40"
            aria-hidden
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-brand-taupe/35 bg-brand-navy/5 shadow-[0_14px_36px_-12px_rgba(17,31,57,0.28)]">
            <Image
              src="/images/amelia_portrait_headshot.jpg"
              alt="Portrait of Amelia Ghofrany"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 320px, 320px"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <StatBlock value={20} suffix="+" label="Years Experience" />
          <StatBlock value={26} label="Countries Explored" />
          <StatBlock value={3} label="Continents Lived On" />
          <StatBlock value={6} label="Continents Visited" />
        </div>
      </div>

      <div className="space-y-6 text-[1.02rem] font-light leading-[1.75] text-text-secondary md:pt-2">
        <p>
          I was born in Peru, of Persian heritage, and have lived most of my
          life in Australia, with three and a half years in Israel during my
          twenties. Those cultures shaped who I am and how I lead.
        </p>
        <p>
          I speak English, Spanish and Farsi fluently, get by in French, and
          can follow Portuguese and Italian through their closeness to Spanish.
          I&apos;ve worked and lived across three continents, travelled to 26
          countries, and that comfort with difference is exactly why I believe,
          not just say, that diverse perspectives change outcomes.
        </p>
        <p>
          I&apos;ve spent over 20 years helping organisations lead through
          complex change, bringing people, processes and technology together to
          deliver sustainable growth, exceptional customer and employee
          experiences, and meaningful impact.
        </p>
        <p>
          Today, I partner with businesses of all sizes, from ambitious
          startups to large enterprises, to help them transform and scale with
          purpose. Through my company,{" "}
          <a
            href="https://www.compasspointadvisory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-navy underline decoration-brand-taupe/50 underline-offset-4 transition-colors hover:decoration-brand-taupe"
          >
            CompassPoint Advisory
          </a>
          , I offer practical, forward-thinking strategies grounded in
          real-world experience.
        </p>
        <p>
          Whether I&apos;m consulting, investing or speaking, I bring
          curiosity, courage and a strong belief in inclusive leadership.
          I&apos;ve built businesses from scratch, advised executive teams, and
          led major digital transformation programs across industries.
        </p>
        <p>
          Outside work, I&apos;m a curious traveller and, as a Bahá’í,
            get involved in community projects close to my heart, including
            advancing women in leadership and building ethical, purpose-led
            businesses.
        </p>
      </div>
    </div>
  );
}

function StatBlock({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <AnimatedStatNumber
        value={value}
        suffix={suffix}
        className="font-display text-4xl text-brand-navy md:text-[2.75rem]"
      />
      <p className="mt-1 text-sm text-brand-taupe">{label}</p>
    </div>
  );
}
