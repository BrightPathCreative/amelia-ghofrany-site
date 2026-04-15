"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const logoSrc = "/images/logos/AG%20Logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#beyond", label: "Beyond" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-taupe/15 bg-brand-grey/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-2.5 md:px-8 md:py-3">
          <Link
            href="#"
            className="relative flex h-11 w-[min(280px,72vw)] shrink-0 items-center md:h-[52px] md:w-[min(320px,42vw)]"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-full w-full">
              <Image
                src={logoSrc}
                alt="Amelia Ghofrany"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 72vw, 320px"
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium uppercase tracking-[0.18em] text-brand-black/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-sweep inline-flex rounded-full border border-brand-taupe/50 bg-brand-taupe px-5 py-2.5 text-sm font-medium text-brand-grey shadow-sm transition-colors hover:shadow-md"
            >
              <span>Work With Me</span>
            </a>
          </nav>

          <button
            type="button"
            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-black transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-brand-grey/98 backdrop-blur-md transition-[visibility,opacity] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pt-24">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-3xl text-brand-black"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 rounded-full bg-brand-taupe px-8 py-4 text-sm font-medium uppercase tracking-widest text-brand-grey shadow-md transition hover:bg-[#6e5f4f]"
            onClick={() => setOpen(false)}
          >
            Work With Me
          </a>
        </nav>
      </div>
    </>
  );
}
