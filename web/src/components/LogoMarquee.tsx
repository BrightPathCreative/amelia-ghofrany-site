import Image from "next/image";

const logos: { src: string; alt: string }[] = [
  { src: "/images/logos/ato.png", alt: "Australian Taxation Office" },
  { src: "/images/logos/australia-post.jpeg", alt: "Australia Post" },
  { src: "/images/logos/defence-force.png", alt: "Australian Defence Force" },
  { src: "/images/logos/bupa.png", alt: "Bupa" },
  { src: "/images/logos/commonwealth-bank.png", alt: "Commonwealth Bank" },
  { src: "/images/logos/department-veterans-affairs.png", alt: "Department of Veterans' Affairs" },
  { src: "/images/logos/fujitsu.png", alt: "Fujitsu" },
  { src: "/images/logos/ge.jpeg", alt: "GE" },
  { src: "/images/logos/ibm.jpg", alt: "IBM" },
  { src: "/images/logos/jurlique.jpg", alt: "Jurlique" },
  { src: "/images/logos/kiwi-bank.png", alt: "Kiwibank" },
  { src: "/images/logos/myer.png", alt: "Myer" },
  { src: "/images/logos/nab.png", alt: "NAB" },
  { src: "/images/logos/ncver.png", alt: "NCVER" },
  { src: "/images/logos/qantas.png", alt: "Qantas" },
  { src: "/images/logos/tas-networks.png", alt: "TasNetworks" },
  { src: "/images/logos/telstra.png", alt: "Telstra" },
  { src: "/images/logos/txc-tech.jpg", alt: "TXC Technology" },
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
            className="group relative h-[44px] w-full max-w-[168px] opacity-85 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-[48px]"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 45vw, 168px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
