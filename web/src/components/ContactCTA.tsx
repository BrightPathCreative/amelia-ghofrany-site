export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-brand-taupe/20 bg-brand-navy py-24 md:py-[8rem]"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.1),transparent_70%)]" />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6 text-center md:px-8">
        <p className="reveal text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Ready to Begin?
        </p>
        <h2 className="reveal mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-tight text-brand-grey">
          Let&apos;s create something
          <br />
          meaningful together.
        </h2>
        <p className="reveal mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-brand-grey/85">
          Whether you&apos;re navigating a growth inflection point, ready for a
          career shift, or looking to sharpen your strategy, I&apos;d love to
          hear from you.
        </p>
        <div className="reveal mt-12">
          <a
            href="https://calendly.com/ameliaghofrany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-brand-taupe px-10 py-4 text-sm font-medium text-brand-grey shadow-lg transition hover:-translate-y-0.5 hover:bg-[#6e5f4f] hover:shadow-xl"
          >
            Book Your Free Discovery Call
          </a>
        </div>
        <p className="reveal mt-8 text-sm font-light text-brand-grey/70">
          Confidential · No sales pressure · Just straight-talking strategic
          advice.
        </p>
      </div>
    </section>
  );
}
