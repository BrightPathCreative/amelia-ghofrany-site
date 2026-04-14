"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const logoLightBg = "/images/logos/AG%20Logo.png";
const logoTransparent = "/images/logos/amelia-ghofrany-logo-transparent.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#beyond", label: "Beyond" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDarkHero = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-brand-taupe/15 bg-brand-grey/85 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5 md:px-8">
          <Link
            href="#"
            className="relative flex h-10 w-[min(220px,54vw)] shrink-0 items-center md:h-11 md:w-[240px]"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-8 w-full md:h-9">
              <Image
                key={onDarkHero ? "navy" : "light"}
                src={onDarkHero ? logoTransparent : logoLightBg}
                alt="Amelia Ghofrany"
                fill
                className="object-contain object-left"
                sizes="240px"
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium uppercase tracking-[0.18em] ${
                  onDarkHero ? "text-brand-grey/90" : "text-brand-black/80"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                onDarkHero
                  ? "border border-brand-taupe/70 text-brand-grey hover:bg-brand-taupe/15"
                  : "btn-sweep border border-brand-taupe/50 bg-brand-taupe text-brand-grey shadow-sm hover:shadow-md"
              }`}
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
              className={`block h-0.5 w-6 transition-transform ${
                onDarkHero ? "bg-brand-grey" : "bg-brand-black"
              } ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${
                onDarkHero ? "bg-brand-grey" : "bg-brand-black"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${
                onDarkHero ? "bg-brand-grey" : "bg-brand-black"
              } ${open ? "-translate-y-2 -rotate-45" : ""}`}
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
