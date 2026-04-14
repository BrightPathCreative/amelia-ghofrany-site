import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cream pt-28 pb-16 md:pt-32">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(196,162,101,0.18),transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(107,45,91,0.12),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-[1100px] items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-20">
        <div>
          <p
            id="hero-eyebrow"
            className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-gold md:text-[0.85rem]"
          >
            Investor · Entrepreneur · Strategic Consultant · Coach
          </p>

          <h1
            id="hero-title"
            className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4.25rem)] font-light leading-[1.08] tracking-tight text-charcoal"
          >
            <span className="hero-line block">Clarity, courage</span>
            <span className="hero-line block">&amp; the confidence</span>
            <span className="hero-line block">
              to lead with{" "}
              <em className="italic text-plum">purpose.</em>
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-text-secondary md:text-[1.1rem]"
          >
            I partner with ambitious leaders and businesses to navigate
            complexity, unlock growth, and create lasting impact — grounded in
            20+ years of enterprise experience and a belief in the power of
            diverse perspectives.
          </p>

          <div
            id="hero-ctas"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://calendly.com/ameliaghofrany"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep inline-flex rounded-full bg-plum px-8 py-3.5 text-sm font-medium text-cream"
            >
              <span>Book a Discovery Call</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal"
            >
              Explore Services
              <span
                aria-hidden
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div id="hero-image-wrap" className="relative mx-auto w-full max-w-md md:max-w-none">
          <div
            className="pointer-events-none absolute -right-4 -top-6 h-[88%] w-[72%] rounded-sm border border-gold/30"
            aria-hidden
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-gold/30 shadow-xl">
            <Image
              src="/images/amelia_speaking_outdoor.jpg"
              alt="Amelia Ghofrany speaking at an outdoor event"
              fill
              className="object-cover transition-transform duration-[600ms] ease-out hover:scale-[1.02]"
              sizes="(max-width: 768px) 90vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
