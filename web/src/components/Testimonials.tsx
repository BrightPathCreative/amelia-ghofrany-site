const testimonials = [
  {
    id: "placeholder",
    initials: "AG",
    quote:
      "Amelia always has such great insight, ideas and tools to help think about approaching situations and life events in different ways.",
    name: "Client name, title",
    isPlaceholder: true,
  },
  {
    id: "nandita-rad",
    initials: "NR",
    quote:
      "Amelia brings a rare combination of strategic clarity, commercial discipline and genuine warmth. She has a strong ability to understand what is really happening inside a business and translate that into practical, considered advice that owners can actually act on. I would highly recommend Amelia and CompassPoint Advisory to any business owner seeking clear thinking, grounded strategy and thoughtful guidance.",
    name: "Nandita Rad, Director, Harven Rad Partners",
    isPlaceholder: false,
  },
];

export function Testimonials() {
  return (
    <section className="surface-linen relative py-20 md:py-[7rem]">
      <div className="reveal mx-auto max-w-[1100px] px-6 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Kind Words
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center gap-8 rounded-sm border border-brand-taupe/25 bg-white/50 p-8 text-center backdrop-blur-sm md:flex-row md:items-start md:gap-10 md:p-10 md:text-left"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-taupe/35 bg-brand-navy/5 font-display text-sm font-semibold tracking-wide text-brand-navy"
                aria-hidden
              >
                {testimonial.initials}
              </div>
              <blockquote className="min-w-0 flex-1">
                <p className="font-display text-xl font-normal leading-relaxed text-brand-black md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-brand-taupe">
                  {testimonial.name}
                  {testimonial.isPlaceholder ? (
                    <>
                      {" "}
                      <span className="text-text-light">(placeholder)</span>
                    </>
                  ) : null}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
