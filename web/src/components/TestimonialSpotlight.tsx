/** Single featured testimonial on the brand-navy background. */
export function TestimonialSpotlight() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 md:py-[7rem]">
      <div className="pointer-events-none absolute -right-36 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.14),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.12),transparent_70%)]" />

      <div className="reveal relative z-[1] mx-auto max-w-[52rem] px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Kind Words
        </p>
        <blockquote className="mt-8">
          <span
            aria-hidden
            className="block font-display text-4xl leading-none text-brand-taupe/70 md:text-5xl"
          >
            &ldquo;
          </span>
          <p className="mt-3 font-display text-[clamp(1.1rem,1.9vw,1.4rem)] font-normal leading-relaxed text-white">
            Amelia brings a rare combination of strategic clarity, commercial
            discipline and genuine warmth. She has a strong ability to
            understand what is really happening inside a business and translate
            that into practical, considered advice that owners can actually act
            on.
          </p>
          <footer className="mt-8 text-sm tracking-wide text-brand-grey/75">
            <span className="font-medium text-brand-grey">Nandita Rad</span>
            {" · "}Director, Harven Rad Partners
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
