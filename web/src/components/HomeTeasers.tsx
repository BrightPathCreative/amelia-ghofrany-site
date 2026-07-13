import Link from "next/link";

const teasers = [
  {
    href: "/about",
    eyebrow: "About",
    title: "Enterprise rigour. Founder energy. Human-first leadership.",
    body: "Peruvian-born, Persian heritage, Australian life, with over 20 years helping organisations lead through complex change.",
  },
  {
    href: "/beyond",
    eyebrow: "Beyond the Boardroom",
    title: "A curious traveller & global citizen.",
    body: "The same curiosity I bring to consulting shows up when I travel, sharpening how I see the world, how I lead, and how I connect.",
  },
];

export function HomeTeasers() {
  return (
    <section className="surface-linen relative border-t border-brand-taupe/15 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        {teasers.map((t) => (
          <article key={t.href} className="reveal flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,2.8vw,2rem)] font-normal leading-snug text-brand-black">
              {t.title}
            </h2>
            <p className="mt-4 flex-1 text-[1.02rem] font-light leading-relaxed text-text-secondary">
              {t.body}
            </p>
            <Link
              href={t.href}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-navy transition-colors hover:text-brand-black"
            >
              Read more <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
