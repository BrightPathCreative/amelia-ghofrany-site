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
  const track = [...logos, ...logos];
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-[7rem]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-24 bg-gradient-to-l from-cream to-transparent" />

      <div className="reveal mx-auto max-w-[1100px] px-6 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Trusted Experience
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-charcoal">
          Companies I Have Worked With
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-taupe">
          Organisations across finance, technology, government, retail, and professional
          services.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="marquee-track flex w-max items-center gap-12 pr-12 md:gap-16 md:pr-16">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="group relative h-[44px] w-[min(152px,36vw)] shrink-0 opacity-80 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:h-[48px] md:w-[168px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain object-center"
                sizes="168px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
