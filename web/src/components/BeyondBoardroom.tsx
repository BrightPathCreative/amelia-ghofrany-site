import Image from "next/image";
import { AnimatedStatNumber } from "@/components/AnimatedStatNumber";

/** Full Beyond the Boardroom body; used on `/beyond`. */
export function BeyondBoardroom() {
  return (
    <div>
      <p className="mx-auto max-w-3xl text-center text-[1.05rem] font-light leading-relaxed text-text-secondary md:text-[1.08rem]">
        The same curiosity I bring to consulting and mentoring shows up
        when I travel. New places sharpen how I see the world, how I lead,
        and how I connect.
      </p>

      <div className="mx-auto mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
        <TravelStat n={26} label="Countries" />
        <TravelStat n={6} label="Continents" />
        <TravelStat n={3} label="Continents Called Home" />
        <TravelStat n={1} label="Bucket List (Antarctica)" />
      </div>

      <div className="mx-auto mt-12 max-w-[min(42rem,92vw)] overflow-hidden rounded-sm border border-brand-navy/45 shadow-[0_10px_26px_-6px_rgba(17,31,57,0.2)]">
        <div className="group relative aspect-[4/3] overflow-hidden bg-brand-navy/10">
          <Image
            src="/images/amelia_machu_picchu_travel.png"
              alt="Travel scenery at Machu Picchu: misty mountain peaks and Inca terraces in Peru"
            fill
            className="object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 92vw, 672px"
          />
        </div>
      </div>
    </div>
  );
}

function TravelStat({ n, label }: { n: number; label: string }) {
  return (
    <div className="text-center">
      <AnimatedStatNumber
        value={n}
        className="font-display text-4xl text-brand-navy md:text-5xl"
      />
      <p className="mt-1 max-w-[10rem] text-xs uppercase tracking-widest text-brand-taupe">
        {label}
      </p>
    </div>
  );
}
