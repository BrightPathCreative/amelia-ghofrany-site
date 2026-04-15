import Image from "next/image";

const gallery = [
  {
    src: "/images/amelia_pink_mosque_persia.jpg",
    alt: "Pink mosque architecture in Persia",
    className: "md:col-span-2 aspect-[16/9]",
  },
  {
    src: "/images/amelia_journaling_rooftop.jpg",
    alt: "Amelia journaling on a rooftop",
    className: "aspect-[3/4]",
  },
  {
    src: "/images/amelia_cafe_melbourne.jpg",
    alt: "Amelia at a Melbourne café",
    className: "aspect-square",
  },
  {
    src: "/images/amelia_melbourne_laneway.jpg",
    alt: "Melbourne laneway — local texture and light",
    className: "md:col-span-2 aspect-[16/9]",
  },
];

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

        <div className="mx-auto mt-12 grid max-w-[920px] gap-3 md:grid-cols-3 md:gap-4">
          <div className="md:col-span-2">
            <GalleryImg {...gallery[0]} />
          </div>
          <div>
            <GalleryImg {...gallery[1]} />
          </div>
          <div>
            <GalleryImg {...gallery[2]} />
          </div>
          <div className="md:col-span-2">
            <GalleryImg {...gallery[3]} />
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

function GalleryImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded border border-brand-taupe/25 bg-brand-grey shadow-md ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1100px) 45vw, 400px"
      />
    </div>
  );
}
