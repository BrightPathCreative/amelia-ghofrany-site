"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useScroll } from "./ScrollProvider";

export function ScrollToTop() {
  const pathname = usePathname();
  const { scrollToTop } = useScroll();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    scrollToTop();
  }, [pathname, scrollToTop]);

  return null;
}
