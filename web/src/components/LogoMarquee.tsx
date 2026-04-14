const logos = [
  "IBM",
  "Fujitsu",
  "DXC",
  "Bupa",
  "NAB",
  "Telstra",
  "Deloitte",
  "Accenture",
];

export function LogoMarquee() {
  const track = [...logos, ...logos];
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-[7rem]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-24 bg-gradient-to-l from-cream to-transparent" />

      <div className="reveal mx-auto max-w-[1100px] px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Trusted Experience
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-charcoal">
          Companies I Have Worked With
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-taupe">
          Replace placeholders with transparent PNG or SVG logos (max height 42px).
        </p>
      </div>

      <div className="relative mt-12">
        <div className="marquee-track flex w-max gap-16 pr-16">
          {track.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-[42px] min-w-[120px] items-center justify-center rounded border border-gold/15 bg-warm-white/60 px-6 text-sm font-medium text-charcoal/45 grayscale transition-all duration-300 hover:scale-105 hover:text-charcoal/85 hover:grayscale-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
