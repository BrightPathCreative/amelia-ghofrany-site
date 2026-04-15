"use client";

import { ChevronUp } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useScroll } from "./ScrollProvider";

const SHOW_AFTER_CAP = 200;

function subscribeWindowScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getWindowScrollYSnapshot(): number {
  return window.scrollY;
}

function getWindowScrollYServer(): number {
  return 0;
}

function docMaxScrollY(): number {
  const el = document.documentElement;
  return Math.max(0, el.scrollHeight - el.clientHeight);
}

function showAfterThreshold(scrollRange: number): number {
  if (!Number.isFinite(scrollRange) || scrollRange <= 0) return SHOW_AFTER_CAP;
  return Math.min(
    SHOW_AFTER_CAP,
    Math.max(8, Math.floor(scrollRange * 0.35)),
    Math.max(0, Math.floor(scrollRange - 1)),
  );
}

type BackToTopButtonProps = {
  /** When true, use in-flow positioning and collapse layout height while hidden. */
  inline?: boolean;
};

export function BackToTopButton({ inline = false }: BackToTopButtonProps) {
  const { scrollY: ctxScrollY, maxScrollY, scrollToTopSmooth } = useScroll();
  const windowScrollY = useSyncExternalStore(
    subscribeWindowScroll,
    getWindowScrollYSnapshot,
    getWindowScrollYServer,
  );

  const [docMax, setDocMax] = useState(0);

  useEffect(() => {
    const sync = () => setDocMax(docMaxScrollY());
    sync();
    window.addEventListener("resize", sync, { passive: true });
    const ro = new ResizeObserver(sync);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("resize", sync);
      ro.disconnect();
    };
  }, []);

  const y = Math.max(ctxScrollY, windowScrollY);

  const scrollRange = useMemo(() => {
    if (maxScrollY > 0) return Math.min(docMax, maxScrollY);
    return docMax;
  }, [docMax, maxScrollY]);

  const progress =
    scrollRange > 0 ? Math.min(1, Math.max(0, y / scrollRange)) : 0;

  const showAfter = showAfterThreshold(scrollRange);
  const visible =
    scrollRange > 0 ? y > showAfter : y > Math.min(SHOW_AFTER_CAP, 120);

  const ringAngle = progress * 360;

  const onClick = useCallback(() => {
    scrollToTopSmooth();
  }, [scrollToTopSmooth]);

  const outerClass = inline
    ? "relative z-[10200] flex justify-end transition-[height,opacity,margin] duration-300 motion-reduce:transition-opacity"
    : "fixed bottom-6 right-6 z-[10200] motion-safe:transition-[opacity,transform] motion-safe:duration-300 motion-reduce:transition-opacity motion-reduce:duration-200";

  return (
    <div
      className={`${outerClass} ${visible ? "pointer-events-auto" : "pointer-events-none"} ${inline && !visible ? "h-0 overflow-hidden opacity-0" : ""} ${!inline && !visible ? "translate-y-3 opacity-0" : ""} ${!inline && visible ? "translate-y-0 opacity-100" : ""} ${inline && visible ? "mb-2 mt-2 h-[52px] opacity-100" : ""}`}
      aria-hidden={!visible}
    >
      <div className="relative h-[43px] w-[43px] shrink-0">
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from -90deg, var(--back-to-top-ring) ${ringAngle}deg, transparent ${ringAngle}deg)`,
            WebkitMaskImage:
              "radial-gradient(farthest-side, transparent calc(50% - 2.5px), #000 calc(50% - 1.5px), #000 calc(50% + 1.5px), transparent calc(50% + 2.5px))",
            maskImage:
              "radial-gradient(farthest-side, transparent calc(50% - 2.5px), #000 calc(50% - 1.5px), #000 calc(50% + 1.5px), transparent calc(50% + 2.5px))",
          }}
        />
        <button
          type="button"
          aria-label="Back to top"
          tabIndex={visible ? 0 : -1}
          onClick={onClick}
          className="absolute inset-[5px] flex items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-taupe text-brand-grey shadow-md transition-[transform,box-shadow] hover:shadow-lg motion-reduce:hover:transform-none"
        >
          <ChevronUp className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
