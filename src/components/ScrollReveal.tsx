"use client";

import { useEffect } from "react";

/**
 * Tiny scroll-reveal engine.
 *
 * Replaces a full animation library with one IntersectionObserver + a couple
 * of CSS classes. Runs once on mount, reveals anything already inside the
 * viewport synchronously (so there is never a flash of invisible content),
 * then observes the rest. No scroll listeners, no re-renders, no per-frame JS.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (nodes.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const viewportHeight = window.innerHeight || 800;

    const pending: HTMLElement[] = [];

    // One batched layout read: anything at/above the fold is shown right away
    // before `reveal-ready` hides the rest.
    for (const el of nodes) {
      if (el.classList.contains("is-revealed")) continue;
      const top = el.getBoundingClientRect().top;
      if (prefersReduced || top < viewportHeight * 0.92) {
        el.classList.add("is-revealed");
      } else {
        pending.push(el);
      }
    }

    root.classList.add("reveal-ready");

    if (pending.length === 0 || !("IntersectionObserver" in window)) {
      for (const el of pending) el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );

    for (const el of pending) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
