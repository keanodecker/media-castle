"use client";

import { useEffect } from "react";

/**
 * Single global observer for all [data-reveal] elements. Elements already at or
 * near the fold on load are shown immediately (no flash); those further down are
 * armed (hidden) while off-screen and revealed as they enter the viewport.
 * Reduced motion or missing IntersectionObserver → everything shown at once.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const foldLine = window.innerHeight * 0.92;
    for (const el of els) {
      if (el.getBoundingClientRect().top < foldLine) {
        el.classList.add("is-visible");
      } else {
        el.classList.add("reveal-armed");
        io.observe(el);
      }
    }

    // Failsafe: never leave content armed-but-hidden.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
