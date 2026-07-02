import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

/**
 * Tarjeta de entrada de blog (pilar y categorías) con portada de marca:
 * mancha Rorschach + tinte por categoría sobre gris claro. CSS puro +
 * blots ya cargados (cero peso extra, siempre coherente).
 */

const COVER: Record<string, { shape: number; tint: "orange" | "cyan" }> = {
  performance: { shape: 2, tint: "orange" },
  conversion: { shape: 5, tint: "cyan" },
  marca: { shape: 1, tint: "orange" },
  "ia-automatizacion": { shape: 6, tint: "cyan" },
  "psicologia-de-mercado": { shape: 4, tint: "orange" },
  inmobiliario: { shape: 3, tint: "cyan" },
  automotriz: { shape: 2, tint: "cyan" },
  sectores: { shape: 5, tint: "orange" },
};

export default function BlogCard({
  post,
  categoriaNombre,
}: {
  post: BlogPost;
  categoriaNombre?: string;
}) {
  const c = COVER[post.categoria] ?? { shape: 1, tint: "orange" as const };
  return (
    <Link
      href={`/blog/${post.categoria}/${post.slug}`}
      className="hk-case hk-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        textDecoration: "none",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Portada de marca */}
      <div aria-hidden style={{ position: "relative", height: 104, background: "linear-gradient(118deg, var(--ink-050) 55%, #fff)", borderBottom: "1px solid var(--hairline)", overflow: "hidden", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/assets/blots/blot-${c.shape}-${c.tint}.png`}
          alt=""
          loading="lazy"
          style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%) rotate(-6deg)", width: 118, opacity: 0.9 }}
        />
        <span style={{ position: "absolute", left: 18, bottom: 12, font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>
          {categoriaNombre ?? post.categoria}
        </span>
      </div>
      {/* Contenido */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "var(--space-5) var(--space-6) var(--space-6)", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.22 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
            {post.h1}
          </h3>
          <ArrowUpRight size={18} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 4 }} aria-hidden />
        </div>
        <p className="line-clamp-3" style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
