"use client";

import { useEffect, useRef } from "react";

/**
 * Columna de enlaces del pie: abierta en escritorio y plegada en el celular
 * (auditoría UX-09, tarea 2.06). En el celular el pie ocupaba dos pantallas
 * con 62 enlaces más chicos que la yema del dedo; plegado, cada sección es una
 * fila de 52 px y sus enlaces miden 44 px.
 *
 * Sale abierta del servidor (sin JavaScript se ve todo y los buscadores leen
 * los enlaces igual) y se pliega al cargar si la pantalla es angosta.
 */
export default function FooterColumna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 920px)");
    const aplicar = () => {
      if (ref.current) ref.current.open = !mq.matches;
    };
    aplicar();
    mq.addEventListener("change", aplicar);
    return () => mq.removeEventListener("change", aplicar);
  }, []);

  return (
    <details ref={ref} className="hk-foot-col" open>
      <summary className="hk-foot-sum">{titulo}</summary>
      <nav aria-label={titulo} className="hk-foot-list">
        {children}
      </nav>
    </details>
  );
}
