"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal de titular palabra por palabra (máscara + subida escalonada) al
 * entrar en viewport. SEO-safe: el texto vive en el DOM; visible por defecto
 * y solo se enmascara bajo <html class="js">. Respeta prefers-reduced-motion.
 */
export default function RevealText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");
  return (
    <span ref={ref} className={`hk-reveal-text ${className || ""}`} style={style}>
      {words.map((w, i) => (
        <span key={i} className="hk-word">
          <span style={{ transitionDelay: `${(i * 0.045).toFixed(3)}s` }}>{w}</span>
        </span>
      ))}
    </span>
  );
}
