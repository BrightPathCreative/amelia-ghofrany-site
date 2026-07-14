import Image from "next/image";
import Link from "next/link";

/** Short About section for the home page: image left, story right. */
export function AboutTeaser() {
  return (
    <section className="surface-linen relative py-20 md:py-[7.5rem]">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 md:px-8 lg:gap-20">
        <div className="reveal-left relative mx-auto w-full max-w-[min(100%,22rem)] md:mx-0">
          <div
            className="pointer-events-none absolute -left-4 -top-5 h-[88%] w-[74%] rounded-sm border border-brand-taupe/40"
            aria-hidden
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-brand-taupe/35 bg-brand-navy/5 shadow-[0_16px_40px_-14px_rgba(17,31,57,0.3)]">
            <Image
              src="/images/amelia_portrait_headshot.jpg"
              alt="Portrait of Amelia Ghofrany"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 352px, 352px"
            />
          </div>
        </div>

        <div className="reveal-right">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            About Amelia
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.6vw,2.75rem)] font-normal leading-tight text-brand-black">
            Enterprise rigour. Founder energy.
            <br />
            <em className="italic text-brand-navy">Human-first</em> leadership.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-text-secondary">
            Peruvian-born, Persian heritage, Australian life, with over 20
            years helping organisations lead through complex change. I&apos;ve
            built businesses from scratch, advised executive teams, and led
            major transformation programs, always with curiosity, courage and
            a strong belief in inclusive leadership.
          </p>
          <Link
            href="/about"
            className="btn-sweep mt-8 inline-flex rounded-full bg-brand-taupe px-8 py-3.5 text-sm font-medium text-brand-grey shadow-md transition hover:shadow-lg"
          >
            <span>Learn more about Amelia</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
