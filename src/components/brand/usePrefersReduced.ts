"use client";

import { useEffect, useState } from "react";

/** ¿El sistema pide reducir movimiento? Archivo propio para no arrastrar framer-motion. */
export function usePrefersReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const f = () => setR(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return r;
}
