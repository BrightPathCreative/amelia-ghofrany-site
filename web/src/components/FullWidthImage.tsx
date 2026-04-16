export function FullWidthImage() {
  return (
    <section
      className="relative h-[min(36vh,340px)] min-h-[200px] w-full overflow-hidden bg-[linear-gradient(180deg,var(--brand-navy)_0%,#1c2f4d_34%,#2d4566_56%,rgba(161,177,194,0.38)_76%,var(--brand-grey)_100%)] md:h-[min(38vh,380px)]"
    >
      <blockquote className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="max-w-3xl font-display text-[clamp(1.35rem,3vw,2rem)] font-normal italic leading-snug text-brand-navy [text-shadow:0_1px_2px_rgba(255,255,255,0.9),0_0_32px_rgba(227,227,227,0.85)]">
          &ldquo;Clarity names what matters; courage moves it forward, and together they
          turn strategy into lasting change.&rdquo;
        </p>
      </blockquote>
    </section>
  );
}
