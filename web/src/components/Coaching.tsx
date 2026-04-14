export function Coaching() {
  return (
    <section
      id="coaching"
      className="bg-warm-white py-20 md:py-[8rem]"
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Coaching Programs
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-light text-charcoal">
            Structured support for your next chapter.
          </h2>
          <p className="mt-4 text-text-secondary">
            If you&apos;re thinking &ldquo;there&apos;s more than this&rdquo; —
            let&apos;s find it.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
          <article className="reveal-left rounded-sm border border-gold/20 bg-cream/40 p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-charcoal">
              Bronze
            </h3>
            <p className="mt-2 text-sm italic text-taupe">
              &ldquo;I know something needs to change — I just don&apos;t know
              what.&rdquo;
            </p>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
              <div>
                <p className="font-medium text-charcoal">Ideal For</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Corporate professionals feeling stuck or unfulfilled</li>
                  <li>Emerging leaders stepping into bigger roles</li>
                  <li>SME owners overwhelmed by decision-making</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-charcoal">What&apos;s Included</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>1:1 coaching sessions (virtual)</li>
                  <li>Values &amp; strengths alignment framework</li>
                  <li>Career &amp; life priorities mapping</li>
                  <li>Practical actions between sessions</li>
                </ul>
              </div>
            </div>
            <a
              href="https://calendly.com/ameliaghofrany"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep mt-10 inline-flex rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm font-medium text-plum"
            >
              <span>Book a Discovery Call</span>
            </a>
          </article>

          <article className="reveal-right relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-b from-gold/10 to-cream/60 p-8 pt-12 shadow-lg md:p-10">
            <span className="absolute right-6 top-6 rounded-full bg-gold/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal">
              Most Popular
            </span>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-charcoal">
              Gold
            </h3>
            <p className="mt-2 text-sm italic text-taupe">
              &ldquo;I&apos;m ready for change — but I want to move forward with
              intention.&rdquo;
            </p>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
              <div>
                <p className="font-medium text-charcoal">Ideal For</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Leaders stepping into executive roles</li>
                  <li>
                    SME owners juggling leadership, growth &amp; identity
                  </li>
                  <li>Corporate professionals planning an exit or pivot</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-charcoal">What&apos;s Included</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>1:1 coaching sessions (virtual)</li>
                  <li>Leadership &amp; transition framework</li>
                  <li>Executive presence &amp; confidence building</li>
                  <li>Career or business transition roadmap</li>
                  <li>Voice note / email support between sessions</li>
                </ul>
              </div>
            </div>
            <a
              href="https://calendly.com/ameliaghofrany"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep mt-10 inline-flex rounded-full bg-plum px-6 py-3 text-sm font-medium text-cream"
            >
              <span>Book a Discovery Call</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
