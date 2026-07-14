import Image from "next/image";
import Link from "next/link";

/** Beyond the Boardroom teaser: text left, globe right (staggered opposite AboutTeaser). */
export function BeyondTeaser() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 md:py-[7.5rem]">
      <div className="pointer-events-none absolute -right-36 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.14),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.12),transparent_70%)]" />
      <div className="relative z-[1] mx-auto grid max-w-[1100px] items-center gap-12 px-6 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-16 md:px-8 lg:gap-20">
        <div className="reveal-left order-2 md:order-1">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Beyond the Boardroom
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-normal leading-tight text-brand-grey">
            A curious traveller &amp;{" "}
            <em className="italic text-white">global citizen</em>.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-brand-grey/85">
            The same curiosity I bring to consulting shows up when I travel.
            Twenty-six countries and six continents have sharpened how I see
            the world, how I lead, and how I connect.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <BeyondStat n="26" label="Countries" />
            <BeyondStat n="6" label="Continents" />
            <BeyondStat n="3" label="Called Home" />
          </div>
          <Link
            href="/beyond"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-grey/90 transition-colors hover:text-brand-grey"
          >
            Follow my journey
            <span
              aria-hidden
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="reveal-right order-1 md:order-2 relative mx-auto w-full max-w-[min(100%,26rem)]">
          <div className="relative aspect-square">
            <Image
              src="/images/globe_brand.png"
              alt="Illustrated globe in brand colours with dotted travel routes across continents"
              fill
              className="object-contain drop-shadow-[0_18px_28px_rgba(17,31,57,0.18)]"
              sizes="(max-width: 768px) 416px, 416px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BeyondStat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-white md:text-4xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-brand-taupe">
        {label}
      </p>
    </div>
  );
}
