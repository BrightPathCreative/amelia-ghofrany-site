import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Cpu,
  Mic,
  RefreshCw,
  Sprout,
  UserRound,
} from "lucide-react";

const services: {
  title: string;
  body: string;
  href: string;
  external: boolean;
  Icon: LucideIcon;
}[] = [
  {
    Icon: Compass,
    title: "Strategic Consulting",
    body: "I advise SMEs and business leaders on strategy, business transformation, scaling for growth, and operational improvement through CompassPoint Advisory.",
    href: "https://compasspoint.vercel.app/services",
    external: true,
  },
  {
    Icon: UserRound,
    title: "Executive Coaching",
    body: "I coach ambitious leaders and professionals who are successful but ready for more clarity, direction, and alignment in their career and life.",
    href: "#contact",
    external: false,
  },
  {
    Icon: Mic,
    title: "Speaking & Workshops",
    body: "Available for keynotes, panel discussions, workshops and podcasts, sharing insights on women in leadership, business growth, and driving meaningful change.",
    href: "#contact",
    external: false,
  },
  {
    Icon: Cpu,
    title: "AI & Digital Transformation",
    body: "Practical, high-impact AI opportunities and a digital transformation roadmap tailored to your business, not a bloated enterprise playbook.",
    href: "https://compasspoint.vercel.app",
    external: true,
  },
  {
    Icon: RefreshCw,
    title: "Change Leadership",
    body: "Human-centred change management for restructures, technology rollouts, and culture shifts, because transformation is ultimately about people.",
    href: "https://compasspoint.vercel.app",
    external: true,
  },
  {
    Icon: Sprout,
    title: "Investing & Mentoring",
    body: "I invest in and mentor early-stage founders building purpose-driven businesses, bringing strategic guidance, connections, and real operational experience.",
    href: "#contact",
    external: false,
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
            What I Offer
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.8vw,3rem)] font-normal leading-tight text-brand-black">
            Strategic expertise, delivered
            <br />
            with purpose and pragmatism.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card service-card-anim group relative overflow-hidden rounded-sm border border-brand-taupe/20 bg-white/80 p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/[0.08] via-transparent to-brand-navy/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <s.Icon
                className="relative h-9 w-9 text-brand-taupe/45 transition-colors duration-500 group-hover:text-brand-navy/70"
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="relative mt-4 font-display text-2xl font-semibold text-brand-black">
                {s.title}
              </h3>
              <p className="relative mt-4 text-sm font-light leading-relaxed text-text-secondary">
                {s.body}
              </p>
              <a
                href={s.href}
                {...(s.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-navy transition-colors hover:text-brand-black"
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
