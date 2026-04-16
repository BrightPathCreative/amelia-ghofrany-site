export function About() {
  return (
    <section
      id="about"
      className="surface-linen relative py-20 md:py-[8rem]"
    >
      <div className="mx-auto grid max-w-[1100px] gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
        <div className="reveal-left space-y-10">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            About Amelia
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-tight text-brand-black">
            Enterprise rigour.
            <br />
            Founder energy.
            <br />
            <em className="italic text-brand-navy">Human-first</em> leadership.
          </h2>

          <blockquote className="border-l-2 border-brand-taupe bg-white/60 px-6 py-5 text-lg font-light leading-relaxed text-brand-black/85 backdrop-blur-sm">
            &ldquo;Diverse perspectives don&apos;t just matter; they&apos;re the
            spark for creativity, smarter decisions, and long-term success.&rdquo;
          </blockquote>

          <div className="grid grid-cols-2 gap-6">
            <StatBlock value={20} suffix="+" label="Years Experience" />
            <StatBlock value={26} label="Countries Explored" />
            <StatBlock value={3} label="Continents Lived On" />
            <StatBlock value={6} label="Continents Visited" />
          </div>
        </div>

        <div className="reveal-right space-y-6 text-[1.02rem] font-light leading-[1.75] text-text-secondary">
          <p>
            I&apos;ve spent over 20 years helping organisations lead through
            complex change, bringing people, processes and technology together
            to deliver sustainable growth, exceptional customer and employee
            experiences, and meaningful impact.
          </p>
          <p>
            Today, I partner with businesses of all sizes, from ambitious
            startups to large enterprises, to help them transform and scale with
            purpose. Through{" "}
            <a
              href="https://compasspoint.vercel.app/"
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
            Whether I&apos;m consulting, investing, coaching or mentoring, I
            bring curiosity, courage and a strong belief in inclusive leadership.
            I&apos;ve built businesses from scratch, advised executive teams, and
            led major digital transformation programs across industries.
          </p>
          <p>
            Outside of work, I&apos;m a curious traveller and global citizen.
            I&apos;ve lived on three continents and travelled to 26 countries
            across six (just Antarctica to go).
          </p>
        </div>
      </div>
    </section>
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
      <p
        className="stat-num font-display text-4xl text-brand-navy md:text-[2.75rem]"
        data-target={String(value)}
        data-suffix={suffix}
      >
        0{suffix}
      </p>
      <p className="mt-1 text-sm text-brand-taupe">{label}</p>
    </div>
  );
}
