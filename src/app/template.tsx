"use client";

/**
 * Transición de página: template.tsx se re-monta en cada navegación,
 * así que la animación de entrada corre al cambiar de ruta.
 * CSS puro (.hk-page-in) → SEO-safe y respeta prefers-reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="hk-page-in">{children}</div>;
}
