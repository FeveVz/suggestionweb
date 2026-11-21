"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * Carga el cursor personalizado solo donde se usa: puntero fino (mouse) y sin
 * «reducir movimiento». En celulares ya no se descarga ni se hidrata
 * (auditoría TEC-03, 21-nov-2026).
 */
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function CursorLoader() {
  const [usar, setUsar] = useState(false);
  useEffect(() => {
    setUsar(
      window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);
  return usar ? <CustomCursor /> : null;
}
