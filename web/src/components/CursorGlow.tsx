"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches || !ref.current) return;

    const el = ref.current;
    const move = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] hidden [@media(pointer:fine)]:block"
      style={{
        background:
          "radial-gradient(300px circle at var(--x, 50%) var(--y, 50%), rgba(161, 177, 194, 0.08), transparent 65%)",
      }}
      aria-hidden
    />
  );
}
