"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ItemTT } from "@/content/types";

/**
 * Grilla de "Lo que ganas trabajando con nosotros" con animación de scroll:
 * cada tarjeta entra con fade + desplazamiento, escalonada, al entrar en
 * viewport (mismo lenguaje que la timeline del proceso). Client component
 * (framer-motion). Respeta prefers-reduced-motion (estático y visible).
 */
export default function BeneficiosGrid({ items }: { items: ItemTT[] }) {
  const reduce = useReducedMotion();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-4)" }}>
      {items.map((b, i) => (
        <motion.div
          key={b.titulo}
          className="hk-lift"
          style={{ padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}
          initial={reduce ? false : { opacity: 0, y: 44 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ font: "var(--fw-bold) var(--fs-lg)/1 var(--font-accent)", color: "var(--cyan)" }}>0{i + 1}</span>
          <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", marginTop: 12 }}>{b.titulo}</h3>
          <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)", marginTop: 6 }}>{b.texto}</p>
        </motion.div>
      ))}
    </div>
  );
}
