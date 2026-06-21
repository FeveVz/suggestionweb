import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Secciones from "@/components/Secciones";
import RelatedLinks, { type RelatedLink } from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { BLOG_POSTS, getPost, getCategoria } from "@/content/blog";

type Params = { params: Promise<{ categoria: string; slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ categoria: p.categoria, slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { categoria, slug } = await params;
  const post = getPost(categoria, slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${categoria}/${slug}`,
    type: "article",
  });
}

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
function fechaLarga(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.getDate()} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function BlogPostPage({ params }: Params) {
  const { categoria, slug } = await params;
  const post = getPost(categoria, slug);
  if (!post) notFound();
  const cat = getCategoria(categoria);

  const relatedLinks: RelatedLink[] = (post.relacionados ?? []).flatMap((rs) => {
    const r = BLOG_POSTS.find((p) => p.slug === rs);
    return r ? [{ label: r.h1, href: `/blog/${r.categoria}/${r.slug}` }] : [];
  });

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          headline: post.h1,
          description: post.description,
          datePublished: post.date,
          url: `/blog/${categoria}/${slug}`,
        })}
      />

      {/* CABECERA */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(1.25rem,3vw,2rem)" }}>
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: cat?.nombre ?? categoria, href: `/blog/${categoria}` },
              { name: post.h1, href: `/blog/${categoria}/${slug}` },
            ]}
          />
          <div style={{ marginTop: 24 }}>
            <Label dot>{cat?.nombre ?? categoria}</Label>
            <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0" }}>
              {post.h1}
            </h1>
            <p style={{ font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-muted)", marginTop: 16 }}>
              {fechaLarga(post.date)} · Suggestion
            </p>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "64ch" }}>
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter) var(--section-y)" }}>
          <Secciones secciones={post.secciones} />

          {/* CTA a money page */}
          <div style={{ marginTop: "var(--space-8)", padding: "clamp(1.5rem,3vw,2.5rem)", background: "var(--black)", color: "var(--white)", borderRadius: "var(--radius-md)" }}>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "54ch" }}>
              {post.cierre}
            </p>
            <div style={{ marginTop: 20 }}>
              <Btn as="a" href={post.moneyPage.href} variant="insight" size="lg">
                {post.moneyPage.label} <ArrowRight size={18} />
              </Btn>
            </div>
          </div>

          {relatedLinks.length > 0 && (
            <div style={{ marginTop: "var(--space-8)" }}>
              <RelatedLinks title="Sigue leyendo" links={relatedLinks} columns={relatedLinks.length >= 2 ? 2 : 1} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
