"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-warm-white/80 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5 md:px-8">
          <Link
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-xl font-medium tracking-tight text-charcoal md:text-2xl"
            onClick={() => setOpen(false)}
          >
            Amelia Ghofrany
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium uppercase tracking-[0.18em] text-taupe"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-sweep rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-medium text-plum"
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
              className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-warm-white/98 backdrop-blur-md transition-[visibility,opacity] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-10 px-8 pt-24">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-cormorant)] text-3xl text-charcoal"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 rounded-full bg-plum px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream"
            onClick={() => setOpen(false)}
          >
            Work With Me
          </a>
        </nav>
      </div>
    </>
  );
}
