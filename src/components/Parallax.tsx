"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax sutil al hacer scroll (profundidad). Mueve el elemento en Y según
 * su posición respecto al centro del viewport. Pasivo + rAF.
 * Desactivado con prefers-reduced-motion. Pensado para capas decorativas;
 * usar un hijo aparte para animaciones CSS (no choca con el transform JS).
 */
export default function Parallax({
  speed = 0.15,
  children,
  className,
  style,
}: {
  speed?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${(-center * speed).toFixed(1)}px, 0)`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}
