"use client";

import { useEffect, useState } from "react";

/**
 * Barra fina de progreso de scroll (acento cian) fija arriba.
 * Pasiva + rAF para no afectar el rendimiento de scroll.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
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
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${pct}%`,
        background: "var(--cyan)",
        zIndex: 200,
        transition: "width 90ms linear",
        pointerEvents: "none",
      }}
    />
  );
}
