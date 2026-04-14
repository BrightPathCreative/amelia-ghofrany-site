import Image from "next/image";

export function FullWidthImage() {
  return (
    <section className="relative h-[50vh] min-h-[280px] w-full overflow-hidden">
      <Image
        src="/images/lifestyle-wide.jpg"
        alt="Atmospheric lifestyle — replace with Amelia's photography"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />
      <blockquote className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="max-w-3xl font-[family-name:var(--font-cormorant)] text-[clamp(1.35rem,3vw,2rem)] font-light italic leading-snug text-cream drop-shadow-sm">
          &ldquo;I always go around the corner — so I can only look forward.&rdquo;
        </p>
      </blockquote>
    </section>
  );
}
