"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor personalizado (punto con mix-blend) que sigue al mouse con inercia y
 * crece sobre elementos interactivos. Solo en punteros finos (desktop), nunca
 * en táctil ni con prefers-reduced-motion. No oculta el cursor nativo (fallback).
 */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = -100, y = -100, tx = -100, ty = -100, raf = 0, shown = false;
    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) { shown = true; el.style.opacity = "1"; }
      // Spotlight: alimenta --sx/--sy de la tarjeta .hk-spot bajo el cursor
      const spot = (e.target as HTMLElement).closest?.(".hk-spot") as HTMLElement | null;
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--sx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      el.classList.toggle("hk-cursor--on", !!t.closest('a,button,[role="button"],label,input,textarea'));
    };
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="hk-cursor" aria-hidden />;
}
