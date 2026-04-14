const services = [
  {
    n: "01",
    title: "Strategic Consulting",
    body: "I advise SMEs and business leaders on strategy, business transformation, scaling for growth, and operational improvement through CompassPoint Advisory.",
    href: "https://compasspoint.vercel.app/services",
    external: true,
  },
  {
    n: "02",
    title: "Executive Coaching",
    body: "I coach ambitious leaders and professionals who are successful — but ready for more clarity, direction, and alignment in their career and life.",
    href: "#contact",
    external: false,
  },
  {
    n: "03",
    title: "Speaking & Workshops",
    body: "Available for keynotes, panel discussions, workshops and podcasts — sharing insights on women in leadership, business growth, and driving meaningful change.",
    href: "#contact",
    external: false,
  },
  {
    n: "04",
    title: "AI & Digital Transformation",
    body: "Practical, high-impact AI opportunities and a digital transformation roadmap right-sized for your business — not a bloated enterprise playbook.",
    href: "https://compasspoint.vercel.app",
    external: true,
  },
  {
    n: "05",
    title: "Change Leadership",
    body: "Human-centred change management for restructures, technology rollouts, and culture shifts — because transformation is ultimately about people.",
    href: "https://compasspoint.vercel.app",
    external: true,
  },
  {
    n: "06",
    title: "Investing & Mentoring",
    body: "I invest in and mentor early-stage founders building purpose-driven businesses — bringing strategic guidance, connections, and real operational experience.",
    href: "#contact",
    external: false,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-warm-white py-20 md:py-[8rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(196,162,101,0.12),transparent_55%)]" />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            What I Offer
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(1.85rem,3.8vw,3rem)] font-light leading-tight text-charcoal">
            Strategic expertise, delivered
            <br />
            with purpose and pragmatism.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.n}
              className="service-card service-card-anim group relative overflow-hidden rounded-sm border border-gold/15 bg-cream/90 p-8 shadow-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-plum/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="relative text-5xl font-light text-gold/35">{s.n}</p>
              <h3 className="relative mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-medium text-charcoal">
                {s.title}
              </h3>
              <p className="relative mt-4 text-sm leading-relaxed text-text-secondary">
                {s.body}
              </p>
              <a
                href={s.href}
                {...(s.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-plum transition-colors hover:text-plum-light"
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
