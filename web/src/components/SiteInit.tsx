"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SiteInit() {
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from("#hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
      })
        .from(
          "#hero-title .hero-line",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          "#hero-subtitle",
          { y: 20, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.5",
        )
        .from(
          "#hero-ctas",
          { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.45",
        );

      const reveal = (sel: string, vars: gsap.TweenVars) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            ...vars,
          });
        });
      };

      reveal(".reveal", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out" });
      reveal(".reveal-left", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      reveal(".reveal-right", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      reveal(".reveal-scale", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".service-card-anim").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 90%", once: true },
          y: 36,
          opacity: 0,
          duration: 0.75,
          delay: i * 0.08,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const raw = el.dataset.target;
        if (raw === undefined) return;
        const target = Number(raw);
        const suffix = el.dataset.suffix ?? "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            const v = Math.round(obj.val);
            el.textContent = `${v}${suffix}`;
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [] },
  );

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}
