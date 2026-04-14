export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-plum-dark py-24 text-cream md:py-[8rem]"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,162,101,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,253,249,0.06),transparent_70%)]" />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6 text-center md:px-8">
        <p className="reveal text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
          Ready to Begin?
        </p>
        <h2 className="reveal mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-tight">
          Let&apos;s create something
          <br />
          meaningful together.
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/85">
          Whether you&apos;re navigating a growth inflection point, ready for a
          career shift, or looking to sharpen your strategy — I&apos;d love to
          hear from you.
        </p>
        <div className="reveal mt-12">
          <a
            href="https://calendly.com/ameliaghofrany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gold px-10 py-4 text-sm font-semibold text-plum-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book Your Free Discovery Call
          </a>
        </div>
        <p className="reveal mt-8 text-sm text-cream/55">
          Confidential · No sales pressure · Just straight-talking strategic
          advice.
        </p>
      </div>
    </section>
  );
}
