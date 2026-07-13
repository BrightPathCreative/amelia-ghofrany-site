import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export type ServiceCta = {
  href: string;
  label: string;
  external?: boolean;
  primary?: boolean;
};

type ServicePageLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  ctas: ServiceCta[];
};

export function ServicePageLayout({
  eyebrow,
  title,
  children,
  ctas,
}: ServicePageLayoutProps) {
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

        <div className="relative z-[1] mx-auto w-full max-w-[720px]">
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

        <div className="relative z-[1] mx-auto w-full max-w-[720px]">
          <div className="space-y-6 text-[1.05rem] font-light leading-[1.8] text-text-secondary md:text-[1.08rem]">
            {children}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            {ctas.map((cta) => (
              <ServiceCtaLink key={cta.href + cta.label} cta={cta} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceCtaLink({ cta }: { cta: ServiceCta }) {
  const primaryClass =
    "btn-sweep inline-flex justify-center rounded-full bg-brand-taupe px-8 py-3.5 text-sm font-medium text-brand-grey shadow-md transition hover:shadow-lg";
  const secondaryClass =
    "inline-flex justify-center rounded-full border border-brand-taupe/45 px-8 py-3.5 text-sm font-medium text-brand-navy transition hover:border-brand-taupe hover:bg-white/50";
  const className = cta.primary ? primaryClass : secondaryClass;

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {cta.primary ? <span>{cta.label}</span> : cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.primary ? <span>{cta.label}</span> : cta.label}
    </Link>
  );
}
