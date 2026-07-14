import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, Compass, Mic } from "lucide-react";

const hats: {
  title: string;
  body: string;
  href: string;
  cta: string;
  Icon: LucideIcon;
}[] = [
  {
    Icon: BriefcaseBusiness,
    title: "Investor",
    body: "Actively acquiring $5–20M turnover Australian businesses, industry-agnostic, with creative deal structures and no ego about who gets the credit.",
    href: "/investor",
    cta: "See how I invest",
  },
  {
    Icon: Compass,
    title: "Strategic Advisor",
    body: "Founder and Managing Director of Compasspoint Advisory, built from scratch to serve SMEs and family enterprises. 20-plus years turning strategy into decisions that actually get made.",
    href: "/strategic-advisory",
    cta: "Explore my advisory work",
  },
  {
    Icon: Mic,
    title: "Speaker",
    body: "Keynotes and panels on purpose-led leadership, women in business, and what diverse perspectives really change.",
    href: "/speaker",
    cta: "Book me to speak",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="surface-linen relative py-20 md:py-[8rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(161,177,194,0.18),transparent_55%)]" />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            How I Work
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,3rem)] font-normal leading-tight text-brand-black">
            Three hats. One clear through-line:
            <br />
            purpose, pragmatism, and sharper calls.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {hats.map((s) => (
            <article
              key={s.title}
              className="service-card service-card-anim group relative overflow-hidden rounded-sm border border-brand-taupe/20 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/[0.08] via-transparent to-brand-navy/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="icon-badge relative" aria-hidden>
                <s.Icon
                  className="relative z-[1] h-6 w-6 text-brand-navy/75 transition-colors duration-500 group-hover:text-brand-navy"
                  strokeWidth={1.25}
                />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-semibold text-brand-black">
                {s.title}
              </h3>
              <p className="relative mt-4 text-sm font-light leading-relaxed text-text-secondary">
                {s.body}
              </p>
              <a
                href={s.href}
                className="group/cta relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy transition-colors hover:text-brand-black"
              >
                {s.cta}{" "}
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover/cta:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
