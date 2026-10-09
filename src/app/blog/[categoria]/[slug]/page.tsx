import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Secciones from "@/components/Secciones";
import Faq from "@/components/Faq";
import RelatedLinks, { type RelatedLink } from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { blogPostingSchema } from "@/lib/schema";
import { BLOG_POSTS, getPost, getCategoria } from "@/content/blog";

type Params = { params: Promise<{ categoria: string; slug: string }> };

/** OG del post = la de su money page (marca en cada compartida + thumbnail elegible). */
function ogDelPost(moneyHref: string): string {
  const slug = moneyHref.replace(/^\/servicios\//, "").replace(/^\//, "").split("/")[0];
  return slug ? `/assets/og/${slug}.png` : "/og-image.png";
}

/**
 * Anclas de keyword hacia money pages, por categoría del blog (SEO interno).
 *
 * El blog es lo único que Google tiene posicionado, y hasta ahora no
 * repartía esa fuerza: /servicios/seo y /servicios/redes-sociales recibían
 * cero enlaces editoriales, y la categoría ia-automatizacion ni siquiera
 * figuraba en este mapa (caía al respaldo de un solo enlace).
 *
 * Los anclajes de servicio digital ya no llevan "en Ica": no hay búsquedas
 * así —"marketing digital ica" deriva a icatsin e ícaro; "páginas web ica"
 * no devuelve ni una sugerencia—. Lo digital se contrata a nivel nacional y
 * por vertical. Ica se mantiene donde sí tiene demanda: la home, las páginas
 * de ciudad y los servicios físicos (imprenta, BTL, estructuras).
 *
 * Cada enlace tiene que ser honesto para los posts de SU categoría: esto es
 * enlazado interno, no un escaparate.
 */
const SERVICIOS_ANCLA: Record<string, RelatedLink[]> = {
  inmobiliario: [
    { label: "Marketing inmobiliario", href: "/marketing-inmobiliario" },
    { label: "Agencia de Google Ads y Meta Ads", href: "/servicios/publicidad-digital" },
    { label: "Gestión de redes sociales", href: "/servicios/redes-sociales" },
  ],
  automotriz: [
    { label: "Marketing automotriz", href: "/marketing-automotriz" },
    { label: "Agencia de Google Ads y Meta Ads", href: "/servicios/publicidad-digital" },
    { label: "BTL y activaciones para eventos", href: "/servicios/btl" },
  ],
  performance: [
    { label: "Agencia de Google Ads y Meta Ads", href: "/servicios/publicidad-digital" },
    { label: "Agencia de marketing digital en Perú", href: "/servicios/marketing-digital" },
    { label: "CRM para ventas y WhatsApp", href: "/servicios/crm-automatizacion" },
  ],
  conversion: [
    { label: "Diseño de páginas web profesionales", href: "/servicios/desarrollo-web" },
    { label: "Posicionamiento web (SEO)", href: "/servicios/seo" },
    { label: "CRM para ventas y WhatsApp", href: "/servicios/crm-automatizacion" },
  ],
  marca: [
    { label: "Branding e identidad de marca", href: "/servicios/branding" },
    { label: "Producción audiovisual", href: "/servicios/produccion-audiovisual" },
    { label: "Gestión de redes sociales", href: "/servicios/redes-sociales" },
  ],
  "ia-automatizacion": [
    { label: "CRM para ventas y WhatsApp", href: "/servicios/crm-automatizacion" },
    { label: "Agencia de marketing digital en Perú", href: "/servicios/marketing-digital" },
    { label: "Branding e identidad de marca", href: "/servicios/branding" },
  ],
  "imprenta-btl": [
    { label: "Imprenta y gran formato", href: "/servicios/imprenta" },
    { label: "Estructuras y letreros", href: "/servicios/estructuras-publicitarias" },
    { label: "Merchandising corporativo", href: "/servicios/merchandising" },
    { label: "Material POP", href: "/servicios/material-pop" },
    { label: "Publicidad móvil y bicivallas", href: "/servicios/publicidad-movil" },
    { label: "Portafolio de activaciones", href: "/portafolio" },
  ],
  "psicologia-de-mercado": [
    { label: "Investigación de mercado", href: "/servicios/investigacion-de-mercado" },
    { label: "Consultoría de marketing", href: "/servicios/consultoria" },
  ],
  sectores: [
    { label: "Marketing por sectores en Perú", href: "/sectores" },
    { label: "Agencia de marketing en Ica", href: "/" },
  ],
};

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
    ogImage: ogDelPost(post.moneyPage.href),
  });
}

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
function fechaLarga(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return `${d.getDate()} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

/** Minutos de lectura (~200 palabras/min) a partir del contenido real del post. */
function minutosLectura(post: { excerpt: string; secciones: unknown; faq?: unknown; cierre: string }): number {
  const words = (JSON.stringify(post.secciones) + JSON.stringify(post.faq ?? "") + post.excerpt + post.cierre)
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
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
          image: ogDelPost(post.moneyPage.href),
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
            <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0" }}>
              {post.h1}
            </h1>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-xs)/1.5 var(--font-body)", color: "var(--text-muted)", marginTop: 16 }}>
              {fechaLarga(post.date)} · {minutosLectura(post)} min de lectura · Por <a href="/nosotros" style={{ color: "var(--text-strong)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "0.18em" }}>Abraham Velásquez</a>, Gerente General de Suggestion
            </p>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "64ch" }}>
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter) var(--section-y)" }}>
          <Secciones secciones={post.secciones} />

          {/* FAQ del post: responde las "Otras preguntas de los usuarios" y
              emite el FAQPage de esta URL (una sola vez, aquí). */}
          {post.faq && post.faq.length > 0 && (
            <div style={{ marginTop: "var(--space-8)" }}>
              <Faq items={post.faq} />
            </div>
          )}

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

          {/* Enlaces internos con ancla de keyword → money pages (SEO) */}
          <div style={{ marginTop: "var(--space-8)" }}>
            <RelatedLinks title="Servicios relacionados" links={SERVICIOS_ANCLA[categoria] ?? [post.moneyPage]} columns={2} />
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
