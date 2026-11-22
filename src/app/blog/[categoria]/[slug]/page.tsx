import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Secciones from "@/components/Secciones";
import Faq from "@/components/Faq";
import RelatedLinks, { type RelatedLink } from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import EnCorto from "@/components/EnCorto";
import CotizadorGigantografia from "@/components/CotizadorGigantografia";
import { buildMetadata } from "@/lib/seo";
import { CTA_CONSULTORIA, consultoriaHref } from "@/lib/cta";
import { whatsappLink } from "@/lib/site";
import { CTA_COTIZA, COTIZA_PRODUCCION, mensajeCotiza, ANCLA_SECTOR } from "@/content/navegacion";
import { blogPostingSchema } from "@/lib/schema";
import { BLOG_POSTS, getPost, getCategoria } from "@/content/blog";

type Params = { params: Promise<{ categoria: string; slug: string }> };

/**
 * OG del post. Si el artículo tiene foto propia en alguna sección, su imagen
 * compuesta desde esa foto (scripts/og-posts.mjs → /assets/og/blog-<slug>.jpg):
 * antes hasta 8 posts compartían la misma (auditoría TEC-13). Si no, la de su
 * money page (marca en cada compartida + thumbnail elegible).
 */
function ogDelPost(post: { slug: string; moneyPage: { href: string }; secciones: { foto?: unknown }[] }): string {
  if (post.secciones.some((s) => s.foto)) return `/assets/og/blog-${post.slug}.jpg`;
  const slug = post.moneyPage.href.replace(/^\/servicios\//, "").replace(/^\//, "").split("/")[0];
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
/**
 * En «sectores» la rejilla común no sirve: cada post es de un rubro distinto.
 * Va primero la página de SU sector con el ancla descriptiva («Marketing para
 * bodegas de pisco y vino»), en vez del botón genérico «Hagamos crecer tu
 * bodega» (auditoría CRO-10, 21-nov-2026).
 */
function serviciosRelacionados(categoria: string, moneyPage: RelatedLink): RelatedLink[] {
  const base = SERVICIOS_ANCLA[categoria];
  if (categoria === "sectores" && ANCLA_SECTOR[moneyPage.href]) {
    return [{ label: ANCLA_SECTOR[moneyPage.href], href: moneyPage.href }, ...(base ?? [])];
  }
  return base ?? [moneyPage];
}

const SERVICIOS_ANCLA: Record<string, RelatedLink[]> = {
  inmobiliario: [
    { label: "Marketing inmobiliario", href: "/marketing-inmobiliario" },
    { label: "Agencia de Meta Ads", href: "/servicios/meta-ads" },
    { label: "Gestión de redes sociales", href: "/servicios/redes-sociales" },
  ],
  automotriz: [
    { label: "Marketing automotriz", href: "/marketing-automotriz" },
    { label: "Agencia de Google Ads", href: "/servicios/publicidad-digital" },
    { label: "BTL y activaciones para eventos", href: "/servicios/btl" },
  ],
  performance: [
    { label: "Agencia de Google Ads", href: "/servicios/publicidad-digital" },
    { label: "Agencia de Meta Ads", href: "/servicios/meta-ads" },
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
    // El agente de IA tenía 6 enlaces entrantes y 0 impresiones (auditoría ONP-03).
    { label: "Agente de IA para WhatsApp", href: "/servicios/chatbot-whatsapp" },
    { label: "Agencia de marketing digital en Perú", href: "/servicios/marketing-digital" },
    { label: "Branding e identidad de marca", href: "/servicios/branding" },
  ],
  "imprenta-btl": [
    { label: "Imprenta y gran formato", href: "/servicios/imprenta" },
    { label: "Gigantografías en Ica", href: "/servicios/gigantografias" },
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
    ogImage: ogDelPost(post),
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
          dateModified: post.actualizado,
          image: ogDelPost(post),
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
              <time dateTime={post.date}>{fechaLarga(post.date)}</time>
              {post.actualizado && (
                <>
                  {" · "}Actualizado el <time dateTime={post.actualizado}>{fechaLarga(post.actualizado)}</time>
                </>
              )}
              {" · "}{minutosLectura(post)} min de lectura · Por <a href="/equipo/abraham" style={{ color: "var(--text-strong)", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "0.18em" }}>Abraham Velásquez</a>, Gerente General de Suggestion
            </p>
            <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", marginTop: 18, maxWidth: "64ch" }}>
              {post.excerpt}
            </p>
            {/* Con enlace a la consultoría por decisión del owner (2026-11-13):
                quien llega desde un asistente ya tiene la respuesta aquí arriba. */}
            {post.enCorto && post.enCorto.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <EnCorto puntos={post.enCorto} enlace={{ href: consultoriaHref(cat?.nombre), label: CTA_CONSULTORIA }} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 var(--gutter) var(--section-y)" }}>
          {/* Con cotizador, va tras la primera sección (la respuesta corta):
              quien ya sabe medida y material lo pide ahí, sin bajar al cierre. */}
          {post.cotizador === "gigantografias" ? (
            <div style={{ display: "grid", gap: "var(--space-7)" }}>
              <Secciones secciones={post.secciones.slice(0, 1)} />
              <CotizadorGigantografia titulo="¿Ya sabes lo que necesitas? Cotízalo aquí" />
              <Secciones secciones={post.secciones.slice(1)} />
            </div>
          ) : (
            <Secciones secciones={post.secciones} />
          )}

          {/* FAQ del post: responde las "Otras preguntas de los usuarios" y
              emite el FAQPage de esta URL (una sola vez, aquí). */}
          {post.faq && post.faq.length > 0 && (
            <div style={{ marginTop: "var(--space-8)" }}>
              {/* Su propio H2 (auditoría CON-26): sin él, las preguntas colgaban
                  del último H2 del artículo. */}
              <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.15 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "0 0 16px" }}>
                Preguntas frecuentes
              </h2>
              <Faq items={post.faq} />
            </div>
          )}

          {/* CTA a money page */}
          <div style={{ marginTop: "var(--space-8)", padding: "clamp(1.5rem,3vw,2.5rem)", background: "var(--black)", color: "var(--white)", borderRadius: "var(--radius-md)" }}>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "54ch" }}>
              {post.cierre}
            </p>
            {/* Imprenta y BTL cierra con la cotización por WhatsApp (auditoría
                CRO-07, tarea 2.04): quien lee de gigantografías quiere un precio,
                no una reunión. El resto, con la consultoría. */}
            {categoria === "imprenta-btl" ? (
              <>
                <div style={{ marginTop: 20, display: "flex", gap: "14px 22px", flexWrap: "wrap", alignItems: "center" }}>
                  <Btn as="a" href={whatsappLink(mensajeCotiza(COTIZA_PRODUCCION[post.moneyPage.href] ?? "un trabajo de imprenta"))} data-cta="cierre del artículo" target="_blank" rel="noopener noreferrer" variant="insight" size="lg">
                    {CTA_COTIZA} <ArrowRight size={18} />
                  </Btn>
                  <a href={post.moneyPage.href} className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-sm)/1.4 var(--font-body)", color: "var(--white)" }}>
                    {post.moneyPage.label}
                  </a>
                </div>
                <p style={{ font: "var(--fw-light) var(--fs-xs)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 14 }}>
                  Producimos en Ica y entregamos en sus distritos. Todo con factura.
                </p>
              </>
            ) : (
              <div style={{ marginTop: 20, display: "flex", gap: "14px 22px", flexWrap: "wrap", alignItems: "center" }}>
                <Btn as="a" href={post.moneyPage.href} variant="insight" size="lg">
                  {post.moneyPage.label} <ArrowRight size={18} />
                </Btn>
                {/* El cierre es el sitio del artículo donde se deriva (solo 4 de 52
                    tenían un enlace para hablar con nosotros); la única otra salida
                    es el bloque «En corto», en los posts que lo tienen. */}
                <a href={consultoriaHref(cat?.nombre)} className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-sm)/1.4 var(--font-body)", color: "var(--white)" }}>
                  O cuéntanos tu caso: consultoría cero, gratis
                </a>
              </div>
            )}
          </div>

          {/* Enlaces internos con ancla de keyword → money pages (SEO) */}
          <div style={{ marginTop: "var(--space-8)" }}>
            <RelatedLinks title="Servicios relacionados" links={serviciosRelacionados(categoria, post.moneyPage)} columns={2} />
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
