import Image from "next/image";

const items = [
  {
    src: "/images/amelia_consulting_standing.jpg",
    alt: "Amelia Ghofrany standing with a laptop, ready for strategy work",
    caption: "Clarity in the room.",
    position: "object-[center_22%]",
  },
  {
    src: "/images/amelia_consulting_desk.jpg",
    alt: "Amelia Ghofrany at her desk during a consulting conversation",
    caption: "Thoughtful guidance, practical next steps.",
    position: "object-[center_28%]",
  },
];

export function ImageStrip() {
  return (
    <section className="surface-linen relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-brand-taupe">
          How I show up
        </p>
        <p className="mx-auto mb-10 max-w-xl text-center font-display text-xl font-normal text-brand-navy md:text-2xl">
          Strategic presence with genuine warmth.
        </p>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {items.map((item, i) => (
            <figure
              key={item.src}
              className={`reveal-scale group ${i === 1 ? "md:mt-12" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-brand-taupe/30 shadow-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${item.position}`}
                  sizes="(max-width: 768px) 100vw, 45vw"
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
