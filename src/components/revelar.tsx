"use client";

import { useEffect } from "react";

/** Ativa a entrada suave dos elementos marcados com data-revelar. */
export function Revelar() {
  useEffect(() => {
    const raiz = document.documentElement;
    raiz.classList.add("js-revelar");
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observer.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-revelar]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
