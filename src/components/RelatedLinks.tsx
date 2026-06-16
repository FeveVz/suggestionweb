import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Bloque de enlazado interno del silo (doc 01/18): un servicio enlaza a su
 * categoría + sectores + blog; un sector a sus servicios; una entrada a su
 * money page. Anchor descriptivo, nunca "clic aquí" (doc 12 §3.2).
 */

export type RelatedLink = { label: string; href: string; description?: string };

export default function RelatedLinks({
  title,
  links,
  tone = "light",
  columns = 2,
}: {
  title: string;
  links: RelatedLink[];
  tone?: "light" | "dark";
  columns?: number;
}) {
  const dark = tone === "dark";
  const border = dark ? "var(--border-on-inverse)" : "var(--border-subtle)";
  const strong = dark ? "var(--white)" : "var(--text-strong)";
  const muted = dark ? "var(--text-on-inverse-mut)" : "var(--text-muted)";
  return (
    <div>
      <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: muted }}>
        {title}
      </span>
      <div className="hk-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "var(--space-4)", marginTop: 18 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hk-case"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 12,
              padding: "var(--space-5)",
              border: `1px solid ${border}`,
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              transition: "border-color var(--dur-base) var(--ease-out)",
            }}
          >
            <span>
              <span style={{ display: "block", font: "var(--fw-medium) var(--fs-md)/1.25 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: strong }}>
                {l.label}
              </span>
              {l.description && (
                <span style={{ display: "block", font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: muted, marginTop: 6 }}>
                  {l.description}
                </span>
              )}
            </span>
            <ArrowRight size={18} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 3 }} aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}
