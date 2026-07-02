import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Grid de tarjetas de servicio/categoría (pilar de servicios, categorías hub).
 * Tarjetas sobrias para fondo claro: título + 1 línea + enlace (doc 17 §5).
 */

export type ServiceGridItem = { title: string; description?: string; href: string };

export default function ServiceGrid({
  items,
  columns = 3,
}: {
  items: ServiceGridItem[];
  columns?: number;
}) {
  return (
    <div
      className="hk-grid"
      style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "var(--space-4)" }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hk-case hk-lift hk-spot"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: "var(--space-6)",
            background: "var(--white)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            transition: "border-color var(--dur-base) var(--ease-out)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
              {item.title}
            </h3>
            <ArrowUpRight size={18} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 2 }} aria-hidden />
          </div>
          {item.description && (
            <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)" }}>
              {item.description}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
