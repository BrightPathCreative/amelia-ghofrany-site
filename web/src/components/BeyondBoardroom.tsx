import Image from "next/image";

const gallery = [
  { src: "/images/travel-01.jpg", alt: "Travel landscape", className: "md:col-span-2 aspect-[16/9]" },
  { src: "/images/travel-02.jpg", alt: "Travel portrait", className: "aspect-[3/4]" },
  { src: "/images/travel-03.jpg", alt: "Culture and food", className: "aspect-square" },
  { src: "/images/travel-04.jpg", alt: "Adventure", className: "md:col-span-2 aspect-[16/9]" },
];

export function BeyondBoardroom() {
  return (
    <section className="bg-cream py-20 md:py-[8rem]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Beyond the Boardroom
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-light text-charcoal">
            A curious traveller &amp; global citizen.
          </h2>
          <p className="mt-6 text-text-secondary">
            Each place I&apos;ve visited has shaped how I see the world and how
            I lead, build, and connect — with empathy, openness, and a sense of
            adventure.
          </p>
        </div>

        <div className="reveal-scale mx-auto mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
          <TravelStat n={26} label="Countries" />
          <TravelStat n={6} label="Continents" />
          <TravelStat n={3} label="Continents Called Home" />
          <TravelStat n={1} label="Bucket List (Antarctica)" />
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
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
        className="stat-num font-[family-name:var(--font-cormorant)] text-4xl text-plum md:text-5xl"
        data-target={String(n)}
        data-suffix=""
      >
        0
      </p>
      <p className="mt-1 max-w-[10rem] text-xs uppercase tracking-widest text-taupe">
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
      className={`group relative w-full overflow-hidden rounded shadow-md ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}
