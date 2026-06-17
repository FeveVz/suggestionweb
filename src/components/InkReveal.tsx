"use client";

import { useEffect, useRef } from "react";

/**
 * Transición develadora: el contenido se destapa a través de una mancha de
 * tinta que se expande con el scroll (concepto Rorschach / "no todo es lo que
 * ves"). Al completarse, quita la máscara (queda 100% nítido). SEO-safe:
 * sin JS el contenido es visible; respeta prefers-reduced-motion.
 */
export default function InkReveal({
  children,
  shape = 3,
  className,
  style,
}: {
  children: React.ReactNode;
  shape?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const url = `url(/assets/blots/blot-${shape}-orange.png)`;
    const applyMask = (on: boolean, size?: number) => {
      el.style.webkitMaskImage = on ? url : "none";
      el.style.maskImage = on ? url : "none";
      if (on && size != null) {
        el.style.webkitMaskSize = el.style.maskSize = `${size}%`;
      }
    };
    el.style.webkitMaskRepeat = el.style.maskRepeat = "no-repeat";
    el.style.webkitMaskPosition = el.style.maskPosition = "center";

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.92;
        const end = vh * 0.4;
        let p = (start - r.top) / (start - end);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        if (p >= 1) applyMask(false);
        else applyMask(true, 26 + p * 320);
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
  }, [shape]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
