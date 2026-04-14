import Image from "next/image";

export function Testimonials() {
  return (
    <section className="bg-warm-white py-20 md:py-[7rem]">
      <div className="reveal mx-auto max-w-[1100px] px-6 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Kind Words
        </p>
        <div className="mt-10 flex flex-col items-center gap-8 rounded-sm border border-gold/15 bg-cream/50 p-10 text-center md:flex-row md:text-left">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-gold/30">
            <Image
              src="/images/amelia_cafe_melbourne.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <blockquote>
            <p className="font-[family-name:var(--font-cormorant)] text-xl font-light leading-relaxed text-charcoal md:text-2xl">
              &ldquo;Amelia always has such great insight, ideas and tools to help
              think about approaching situations and life events in different
              ways.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-taupe">
              — Client name, title{" "}
              <span className="text-text-light">(placeholder)</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
