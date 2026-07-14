import Image from "next/image";

const logos: { src: string; alt: string }[] = [
  { src: "/images/logos/ato-2.png", alt: "Australian Taxation Office" },
  { src: "/images/logos/australia-post-2.png", alt: "Australia Post" },
  { src: "/images/logos/defence-force-2.png", alt: "Australian Defence Force" },
  { src: "/images/logos/bupa.png", alt: "Bupa" },
  { src: "/images/logos/commonwealth-bank-2.png", alt: "Commonwealth Bank" },
  { src: "/images/logos/department-veterans-affairs-2.png", alt: "Department of Veterans' Affairs" },
  { src: "/images/logos/fujitsu-2.png", alt: "Fujitsu" },
  { src: "/images/logos/ge-2.png", alt: "GE" },
  { src: "/images/logos/ibm-2.png", alt: "IBM" },
  { src: "/images/logos/jurlique-2.png", alt: "Jurlique" },
  { src: "/images/logos/kiwi-bank-2.png", alt: "Kiwibank" },
  { src: "/images/logos/myer-2.png", alt: "Myer" },
  { src: "/images/logos/nab-2.png", alt: "NAB" },
  { src: "/images/logos/ncver.png", alt: "NCVER" },
  { src: "/images/logos/qantas-2.png", alt: "Qantas" },
  { src: "/images/logos/tas-networks-2.png", alt: "TasNetworks" },
  { src: "/images/logos/telstra-2.png", alt: "Telstra" },
  { src: "/images/logos/dxc-2.png", alt: "DXC Technology" },
];

export function LogoMarquee() {
  return (
    <section className="surface-linen relative py-20 md:py-[7rem]">
      <div className="reveal mx-auto max-w-[1100px] px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Trusted Experience
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-brand-black">
          Companies I Have Worked With
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm font-light text-brand-black/75">
          Organisations across finance, technology, government, retail, and professional
          services.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 px-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:px-8 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="group relative h-[44px] w-full max-w-[168px] md:h-[48px]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-center opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              sizes="(max-width: 640px) 45vw, 168px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
