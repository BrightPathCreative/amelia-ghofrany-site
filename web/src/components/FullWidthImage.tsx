import Image from "next/image";

export function FullWidthImage() {
  return (
    <section className="relative h-[50vh] min-h-[280px] w-full overflow-hidden">
      <Image
        src="/images/amelia_persia_bazaar.jpg"
        alt="A Persian bazaar — travel and perspective"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-grey/95 via-brand-grey/45 to-transparent" />
      <blockquote className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="max-w-3xl font-display text-[clamp(1.35rem,3vw,2rem)] font-normal italic leading-snug text-brand-black drop-shadow-[0_1px_12px_rgba(227,227,227,0.95)]">
          &ldquo;I always go around the corner — so I can only look forward.&rdquo;
        </p>
      </blockquote>
    </section>
  );
}
