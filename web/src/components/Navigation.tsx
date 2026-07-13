"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useScroll } from "@/components/scroll";

const logoSrc = "/images/logos/amelia-ghofrany-logo-nav.png";

const serviceLinks = [
  { href: "/investor", label: "Investor" },
  { href: "/strategic-advisory", label: "Strategic Advisory" },
  { href: "/speaker", label: "Speaker" },
];

export function Navigation() {
  const pathname = usePathname();
  const { scrollToTopSmooth } = useScroll();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesMenuId = useId();
  const mobileServicesId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    function onPointerDown(e: MouseEvent | PointerEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen]);

  const servicesActive = serviceLinks.some((l) => pathname === l.href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-taupe/20 bg-brand-navy shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-2.5 md:px-8 md:py-3">
          <Link
            href="/"
            className="relative flex h-11 w-[min(280px,72vw)] shrink-0 items-center md:h-[52px] md:w-[min(320px,42vw)]"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToTopSmooth();
              }
              setOpen(false);
            }}
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

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            <Link
              href="/about"
              className={`nav-link text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                pathname === "/about"
                  ? "text-brand-grey"
                  : "text-brand-grey/90 hover:text-brand-grey"
              }`}
            >
              About
            </Link>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (
                  !servicesRef.current?.contains(e.relatedTarget as Node)
                ) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                className={`nav-link inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                  servicesActive || servicesOpen
                    ? "text-brand-grey"
                    : "text-brand-grey/90 hover:text-brand-grey"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls={servicesMenuId}
                onClick={() => setServicesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setServicesOpen(true);
                    const first = servicesRef.current?.querySelector<HTMLAnchorElement>(
                      "a[data-service-link]",
                    );
                    first?.focus();
                  }
                }}
              >
                Services
                <svg
                  className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2.5 4.5L6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id={servicesMenuId}
                role="menu"
                className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-[visibility,opacity] duration-150 ${
                  servicesOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none"
                }`}
              >
                <ul className="min-w-[220px] border border-brand-taupe/30 bg-brand-navy py-2 shadow-lg shadow-black/25">
                  {serviceLinks.map((l) => (
                    <li key={l.href} role="none">
                      <Link
                        href={l.href}
                        role="menuitem"
                        data-service-link
                        className={`block px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                          pathname === l.href
                            ? "bg-brand-taupe/20 text-brand-grey"
                            : "text-brand-grey/90 hover:bg-brand-taupe/15 hover:text-brand-grey"
                        }`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/beyond"
              className={`nav-link text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                pathname === "/beyond"
                  ? "text-brand-grey"
                  : "text-brand-grey/90 hover:text-brand-grey"
              }`}
            >
              Beyond
            </Link>

            <Link
              href="/contact"
              className="btn-sweep inline-flex rounded-full border border-brand-taupe/50 bg-brand-taupe px-5 py-2.5 text-sm font-medium text-brand-grey shadow-sm transition-colors hover:shadow-md"
            >
              <span>Work With Me</span>
            </Link>
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
                open ? "translate-y-2 rotate-45 bg-brand-black" : "bg-brand-grey"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${
                open ? "opacity-0" : "bg-brand-grey"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${
                open ? "-translate-y-2 -rotate-45 bg-brand-black" : "bg-brand-grey"
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
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 px-8 pt-24"
          aria-label="Mobile"
        >
          <Link
            href="/about"
            className="font-display text-3xl text-brand-black"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <div className="flex w-full max-w-xs flex-col items-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 font-display text-3xl text-brand-black"
              aria-expanded={mobileServicesOpen}
              aria-controls={mobileServicesId}
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <svg
                className={`h-5 w-5 text-brand-taupe transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 4.5L6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id={mobileServicesId}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                mobileServicesOpen
                  ? "mt-5 max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col items-center gap-4">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-lg font-light tracking-wide text-brand-navy"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/beyond"
            className="font-display text-3xl text-brand-black"
            onClick={() => setOpen(false)}
          >
            Beyond
          </Link>

          <Link
            href="/contact"
            className="mt-4 rounded-full bg-brand-taupe px-8 py-4 text-sm font-medium uppercase tracking-widest text-brand-grey shadow-md transition hover:bg-[#6e5f4f]"
            onClick={() => setOpen(false)}
          >
            Work With Me
          </Link>
        </nav>
      </div>
    </>
  );
}
