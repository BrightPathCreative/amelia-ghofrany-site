import Image from "next/image";

export function BeyondBoardroom() {
  return (
    <section id="beyond" className="surface-linen relative py-20 md:py-[8rem]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Beyond the Boardroom
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.5vw,2.75rem)] font-normal text-brand-black">
            A curious traveller &amp; global citizen.
          </h2>
          <p className="mt-6 font-light text-text-secondary">
            The same curiosity I bring to consulting and mentoring shows up
            when I travel — new places sharpen how I see the world, how I lead,
            and how I connect.
          </p>
        </div>

        <div className="reveal-scale mx-auto mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
          <TravelStat n={26} label="Countries" />
          <TravelStat n={6} label="Continents" />
          <TravelStat n={3} label="Continents Called Home" />
          <TravelStat n={1} label="Bucket List (Antarctica)" />
        </div>

        <div className="mx-auto mt-12 max-w-[min(22rem,92vw)] overflow-hidden rounded-sm border border-brand-navy/45 shadow-[0_10px_26px_-6px_rgba(17,31,57,0.2)] md:max-w-[24rem]">
          <div className="group relative aspect-[3/4] overflow-hidden bg-brand-navy/10">
            <Image
              src="/images/amelia_journaling_rooftop.jpg"
              alt="Amelia writing in her journal on a rooftop"
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 92vw, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TravelStat({ n, label }: { n: number; label: string }) {
  return (
    <div className="text-center">
      <p
        className="stat-num font-display text-4xl text-brand-navy md:text-5xl"
        data-target={String(n)}
        data-suffix=""
      >
        0
      </p>
      <p className="mt-1 max-w-[10rem] text-xs uppercase tracking-widest text-brand-taupe">
        {label}
      </p>
    </div>
  );
}

