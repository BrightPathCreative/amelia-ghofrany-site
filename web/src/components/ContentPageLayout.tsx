import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";

type ContentPageLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  /** Wider content column for two-column / photo layouts */
  wide?: boolean;
};

export function ContentPageLayout({
  eyebrow,
  title,
  children,
  wide = false,
}: ContentPageLayoutProps) {
  return (
    <main className="relative z-[2] flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-brand-taupe/20 bg-brand-navy px-6 pb-16 pt-36 md:px-8 md:pb-20 md:pt-40">
        <div
          className="pointer-events-none absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.14),transparent_65%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-28 bottom-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.12),transparent_70%)]"
          aria-hidden
        />

        <div
          className={`relative z-[1] mx-auto w-full ${wide ? "max-w-[1100px]" : "max-w-[720px]"}`}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-tight text-brand-grey">
            {title}
          </h1>
        </div>
      </section>

      <section className="surface-linen relative flex-1 px-6 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(161,177,194,0.16),transparent_55%)]" />
        <div
          className={`relative z-[1] mx-auto w-full ${wide ? "max-w-[1100px]" : "max-w-[720px]"}`}
        >
          {children}
        </div>
      </section>

      <Footer />
    </main>
  );
}
