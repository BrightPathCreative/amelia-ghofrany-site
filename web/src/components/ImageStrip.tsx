import Image from "next/image";

const items = [
  {
    src: "/images/amelia_cafe_melbourne.jpg",
    alt: "Amelia at a Melbourne café, conversation and connection",
    caption: "Melbourne: ideas over coffee.",
  },
  {
    src: "/images/amelia_melbourne_laneway.jpg",
    alt: "Amelia in a Melbourne laneway",
    caption: "At home in the city.",
  },
  {
    src: "/images/amelia_journaling_rooftop.jpg",
    alt: "Amelia journaling on a rooftop",
    caption: "Reflection, study & intention.",
  },
];

export function ImageStrip() {
  return (
    <section className="surface-linen relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Where the work happens
        </p>
        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {items.map((item, i) => (
            <figure
              key={item.src}
              className={`reveal-scale group ${i === 1 ? "md:mt-10" : i === 2 ? "md:mt-5" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-brand-taupe/30 shadow-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-3 font-display text-sm italic text-brand-taupe">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
