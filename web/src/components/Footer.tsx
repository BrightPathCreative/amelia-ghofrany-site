import Image from "next/image";
import Link from "next/link";

const logoTransparent = "/images/logos/amelia-ghofrany-logo-transparent.png";

export function Footer() {
  return (
    <footer className="border-t border-brand-taupe/20 bg-brand-navy py-8 text-brand-grey/80 md:py-9">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="flex justify-center pb-3 pt-0.5">
          <Link
            href="#"
            className="relative block h-11 w-[min(280px,72vw)] md:h-[52px] md:w-[min(320px,42vw)]"
          >
            <Image
              src={logoTransparent}
              alt="Amelia Ghofrany"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 72vw, 320px"
            />
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 px-6 pb-2 text-center text-sm md:flex-row md:text-left md:px-8">
        <p className="text-brand-grey/90">
          © {new Date().getFullYear()} Amelia Ghofrany. All rights reserved.
        </p>
        <p>
          Melbourne, Australia ·{" "}
          <a
            href="https://compasspoint.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-taupe underline-offset-4 transition-colors hover:text-brand-grey"
          >
            CompassPoint Advisory
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-taupe"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-taupe"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-[1100px] border-t border-brand-taupe/15 px-6 pt-5 text-center text-xs text-brand-grey/60 md:px-8">
        <p>
          Built and maintained by{" "}
          <a
            href="https://www.brightpathcreative.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-taupe underline-offset-4 transition-colors hover:text-brand-grey"
          >
            Bright Path Creative
          </a>
        </p>
      </div>
    </footer>
  );
}
