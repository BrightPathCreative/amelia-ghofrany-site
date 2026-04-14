export function About() {
  return (
    <section
      id="about"
      className="relative bg-warm-white py-20 md:py-[8rem]"
    >
      <div className="mx-auto grid max-w-[1100px] gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-8">
        <div className="reveal-left space-y-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            About Amelia
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-charcoal">
            Enterprise rigour.
            <br />
            Founder energy.
            <br />
            <em className="italic text-plum">Human-first</em> leadership.
          </h2>

          <blockquote className="border-l-2 border-gold bg-cream/80 px-6 py-5 text-lg leading-relaxed text-charcoal-light">
            &ldquo;Diverse perspectives don&apos;t just matter — they&apos;re the
            spark for creativity, smarter decisions, and long-term success.&rdquo;
          </blockquote>

          <div className="grid grid-cols-2 gap-6">
            <StatBlock value={20} suffix="+" label="Years Experience" />
            <StatBlock value={26} label="Countries Explored" />
            <StatBlock value={3} label="Continents Lived On" />
            <StatBlock value={6} label="Continents Visited" />
          </div>
        </div>

        <div className="reveal-right space-y-6 text-[1.02rem] leading-[1.75] text-text-secondary">
          <p>
            I&apos;ve spent over 20 years helping organisations lead through
            complex change — bringing people, processes and technology together
            to deliver sustainable growth, exceptional customer and employee
            experiences, and meaningful impact.
          </p>
          <p>
            Today, I partner with businesses of all sizes — from ambitious
            startups to large enterprises — to help them transform and scale with
            purpose. Through{" "}
            <a
              href="https://compasspoint.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-plum underline decoration-gold/60 underline-offset-4 transition-colors hover:decoration-gold"
            >
              CompassPoint Advisory
            </a>
            , I offer practical, forward-thinking strategies grounded in
            real-world experience.
          </p>
          <p>
            Whether I&apos;m consulting, investing, coaching or mentoring — I
            bring curiosity, courage and a strong belief in inclusive leadership.
            I&apos;ve built businesses from scratch, advised executive teams, and
            led major digital transformation programs across industries.
          </p>
          <p>
            Outside of work, I&apos;m a curious traveller and global citizen.
            I&apos;ve lived on three continents and travelled to 26 countries
            across six — just Antarctica to go.
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
        className="stat-num font-[family-name:var(--font-cormorant)] text-4xl text-plum md:text-[2.75rem]"
        data-target={String(value)}
        data-suffix={suffix}
      >
        0{suffix}
      </p>
      <p className="mt-1 text-sm text-taupe">{label}</p>
    </div>
  );
}
