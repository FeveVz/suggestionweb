import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * Migas de pan visuales + BreadcrumbList JSON-LD (doc 12 §2.5).
 * El último item es la página actual (sin enlace).
 */

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "var(--text-on-inverse-mut)" : "var(--text-muted)";
  const strong = tone === "dark" ? "var(--white)" : "var(--text-strong)";
  return (
    <nav aria-label="Migas de pan" style={{ padding: "var(--space-5) 0 0" }}>
      <JsonLd data={breadcrumbSchema(items.map((i) => ({ name: i.name, url: i.href })))} />
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)" }}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              {last ? (
                <span aria-current="page" style={{ color: muted }}>{item.name}</span>
              ) : (
                <Link href={item.href} style={{ color: strong }}>{item.name}</Link>
              )}
              {!last && <ChevronRight size={13} style={{ color: muted }} aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
