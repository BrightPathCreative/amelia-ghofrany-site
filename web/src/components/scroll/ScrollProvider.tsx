"use client";

import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

gsap.registerPlugin(ScrollTrigger);

export type ScrollContextValue = {
  scrollY: number;
  maxScrollY: number;
  scrollToTop: () => void;
  scrollToTopSmooth: () => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

function domMaxScrollY(): number {
  const el = document.documentElement;
  return Math.max(0, el.scrollHeight - el.clientHeight);
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);

  const scrollToTop = useCallback(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  const scrollToTopSmooth = useCallback(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { duration: 1.35 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const preferNativeScroll =
      window.matchMedia("(pointer: coarse)").matches ||
      ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0) ||
      "ontouchstart" in window;

    if (preferNativeScroll) {
      lenisRef.current = null;

      const sync = () => {
        setScrollY(window.scrollY);
        setMaxScrollY(domMaxScrollY());
      };

      sync();
      window.addEventListener("scroll", sync, { passive: true });
      window.addEventListener("resize", sync, { passive: true });

      const ro = new ResizeObserver(sync);
      ro.observe(document.documentElement);

      return () => {
        window.removeEventListener("scroll", sync);
        window.removeEventListener("resize", sync);
        ro.disconnect();
      };
    }

    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1.4 });
    lenisRef.current = lenis;

    const onLenisScroll = (instance: Lenis) => {
      setScrollY(instance.scroll);
      setMaxScrollY(instance.limit);
      ScrollTrigger.update();
    };

    lenis.on("scroll", onLenisScroll);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onResize = () => {
      lenis.resize();
      setScrollY(lenis.scroll);
      setMaxScrollY(lenis.limit);
    };

    window.addEventListener("resize", onResize, { passive: true });
    const ro = new ResizeObserver(onResize);
    ro.observe(document.documentElement);

    onLenisScroll(lenis);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo(
    () => ({
      scrollY,
      maxScrollY,
      scrollToTop,
      scrollToTopSmooth,
    }),
    [scrollY, maxScrollY, scrollToTop, scrollToTopSmooth],
  );

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextValue {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScroll must be used within ScrollProvider");
  }
  return ctx;
}
