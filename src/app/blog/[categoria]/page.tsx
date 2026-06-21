import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { collectionPageSchema } from "@/lib/schema";
import { getCategoria, getPostsByCategoria, allCategoriaSlugs } from "@/content/blog";

type Params = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return allCategoriaSlugs().map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { categoria } = await params;
  const c = getCategoria(categoria);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/blog/${c.slug}` });
}

export default async function BlogCategoria({ params }: Params) {
  const { categoria } = await params;
  const c = getCategoria(categoria);
  if (!c) notFound();
  const posts = getPostsByCategoria(c.slug);

  return (
    <>
      <JsonLd data={collectionPageSchema({ name: c.metaTitle, description: c.metaDescription, url: `/blog/${c.slug}` })} />

      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2rem,4vw,3rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Blog", href: "/blog" }, { name: c.nombre, href: `/blog/${c.slug}` }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 760 }}>
            <Label dot>{c.nombre}</Label>
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "17ch" }}>
              {c.h1}
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "54ch" }}>
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "var(--space-4)" }}>
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} categoriaNombre={c.nombre} />
          ))}
        </div>
      </Section>
    </>
  );
}
