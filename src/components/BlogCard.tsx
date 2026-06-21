import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

/** Tarjeta de entrada de blog (pilar y categorías). */
export default function BlogCard({
  post,
  categoriaNombre,
}: {
  post: BlogPost;
  categoriaNombre?: string;
}) {
  return (
    <Link
      href={`/blog/${post.categoria}/${post.slug}`}
      className="hk-case hk-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "var(--space-6)",
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        textDecoration: "none",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>
          {categoriaNombre ?? post.categoria}
        </span>
        <ArrowUpRight size={18} style={{ color: "var(--cyan)", flexShrink: 0 }} aria-hidden />
      </div>
      <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.22 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
        {post.h1}
      </h3>
      <p className="line-clamp-3" style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>
        {post.excerpt}
      </p>
    </Link>
  );
}
