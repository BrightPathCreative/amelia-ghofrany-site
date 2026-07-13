export function FullWidthImage() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy">
      <blockquote className="mx-auto flex max-w-[42rem] flex-col items-center px-6 py-16 text-center md:px-8 md:py-20">
        <span
          aria-hidden
          className="mb-6 font-display text-4xl leading-none text-brand-taupe/70 md:text-5xl"
        >
          &ldquo;
        </span>
        <p className="font-display text-[clamp(1.25rem,2.6vw,1.75rem)] font-normal italic leading-relaxed tracking-wide text-brand-grey">
          Clarity names what matters; courage moves it forward, and together they
          turn strategy into lasting change.
        </p>
      </blockquote>
    </section>
  );
}
