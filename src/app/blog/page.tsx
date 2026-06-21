import type { Metadata } from "next";
import Link from "next/link";
import { Section, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { blogSchema } from "@/lib/schema";
import { BLOG_PILAR, BLOG_CATEGORIAS, allPostsSorted, getCategoria } from "@/content/blog";

export const metadata: Metadata = buildMetadata({
  title: BLOG_PILAR.metaTitle,
  description: BLOG_PILAR.metaDescription,
  path: "/blog",
});

export default function BlogPilar() {
  const posts = allPostsSorted();
  return (
    <>
      <JsonLd data={blogSchema({ name: BLOG_PILAR.metaTitle, description: BLOG_PILAR.metaDescription, url: "/blog" })} />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2rem,4vw,3rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Blog", href: "/blog" }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 760 }}>
            <Label dot>Blog</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "16ch" }}>
              {BLOG_PILAR.h1}
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "52ch" }}>
              {BLOG_PILAR.intro}
            </p>
          </div>
          {/* Explora por tema */}
          <nav aria-label="Categorías del blog" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {BLOG_CATEGORIAS.map((c) => (
              <Link key={c.slug} href={`/blog/${c.slug}`} className="hk-chip" style={{ font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)", color: "var(--text-strong)", background: "transparent", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-pill)", padding: "10px 18px", whiteSpace: "nowrap" }}>
                {c.nombre}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* TODAS LAS ENTRADAS */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <SectionHeading level={2} kicker="Artículos" maxWidth="20ch" style={{ marginBottom: 32 }}>
          Lo último del blog.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "var(--space-4)" }}>
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} categoriaNombre={getCategoria(p.categoria)?.nombre} />
          ))}
        </div>
      </Section>
    </>
  );
}
