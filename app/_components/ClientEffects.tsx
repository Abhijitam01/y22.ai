"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const root = document.documentElement;

    // ─── Theme: read saved preference or system preference ────
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else if (savedTheme === "light") {
      root.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
    }

    // ─── Scroll-triggered fade-in for elements ──────────────────
    const fadeElements = document.querySelectorAll<HTMLElement>(
      '[style*="opacity:0"][style*="transform:translate"]'
    );

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transition =
              "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
            el.style.opacity = "1";
            el.style.transform = "translate(0, 0)";
            fadeObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));

    // ─── Header scroll blur effect ────────────────────────────
    const header = document.querySelector<HTMLElement>("header");
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (header) {
            if (lastScrollY > 50) {
              header.classList.add("scrolled");
            } else {
              header.classList.remove("scrolled");
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      fadeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

