import Image from "next/image";

const items = [
  {
    src: "/images/lifestyle-consulting.jpg",
    alt: "Collaboration and consulting",
    caption: "Building what matters.",
  },
  {
    src: "/images/speaking-event.jpg",
    alt: "Speaking at an event",
    caption: "Sharing the stage.",
  },
  {
    src: "/images/travel-lifestyle.jpg",
    alt: "Travel and exploration",
    caption: "Exploring, always.",
  },
];

export function ImageStrip() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {items.map((item, i) => (
            <figure
              key={item.src}
              className={`reveal-scale group ${i === 1 ? "md:mt-10" : i === 2 ? "md:mt-5" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/30 shadow-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 font-[family-name:var(--font-cormorant)] text-sm italic text-taupe">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
