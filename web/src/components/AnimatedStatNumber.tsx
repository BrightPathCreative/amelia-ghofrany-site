"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimatedStatNumberProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Count-up stat that animates when scrolled into view. */
export function AnimatedStatNumber({
  value,
  suffix = "",
  className,
}: AnimatedStatNumberProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          el.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => tween.play(),
      });

      ScrollTrigger.refresh();
      if (trigger.isActive) tween.play();

      return () => {
        trigger.kill();
        tween.kill();
      };
    },
    { dependencies: [value, suffix] },
  );

  return (
    <p ref={ref} className={className}>
      0{suffix}
    </p>
  );
}
