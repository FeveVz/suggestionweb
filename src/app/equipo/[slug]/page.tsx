import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import TarjetaPersonal from "@/components/TarjetaPersonal";
import { buildMetadata } from "@/lib/seo";
import { site, absoluteUrl, ORG_ID } from "@/lib/site";
import { AUTOR, AUTOR_ID, webPageSchema } from "@/lib/schema";
import { getTalento, allTalentoSlugs } from "@/content/equipo";
import { BLOG_POSTS } from "@/content/blog";

/**
 * Tarjeta personal digital de cada talento (destino del QR de su tarjeta
 * física).
 *
 * Desde el 21-nov-2026 (auditoría CON-08, decisión 11): solo la ficha de
 * Abraham se indexa, porque es la del autor del blog; lleva su Person con @id
 * (el mismo al que apunta el author de cada BlogPosting), su biografía y sus
 * artículos. Las otras 6 siguen visibles para quien escanea la tarjeta, pero
 * con noindex y fuera del sitemap.
 */

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allTalentoSlugs().map((slug) => ({ slug }));
}

const esAutor = (slug: string) => slug === AUTOR.slug;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = getTalento(slug);
  if (!t) return {};
  // Google corta la meta description pasados ~160 caracteres. Con bios largas
  // (la de Abraham son 152) el añadido quedaba fuera igual y salía una
  // descripción truncada a media frase: mejor engancharlo solo si cabe.
  const cta = `Guarda el contacto de ${t.corto} o escríbele por WhatsApp.`;
  const description = t.bio.length + 1 + cta.length <= 158 ? `${t.bio} ${cta}` : t.bio;

  return buildMetadata({
    title: `${t.nombre} | ${t.rolSeo ?? t.rol} | ${site.name}`,
    description,
    path: `/equipo/${t.slug}`,
    ogImage: `/assets/og2/equipo-${t.slug}.png`,
    noindex: !esAutor(t.slug),
  });
}

/** Biografía del autor: solo datos que ya están publicados y verificados (nada de «fundador»). */
const BIO_AUTOR = [
  "Abraham Velásquez es Gerente General de Agencia de Marketing Suggestion, la agencia de Ica que trabaja con empresas de la región y de todo el Perú desde 2019. Dirige la estrategia comercial y de performance de cada cuenta: qué se mide, cuánto se invierte y qué se corta cuando un canal no rinde.",
  "Su trabajo se ve en los casos publicados con cifra, período y fecha de corte: los lotes de Inmobiliaria Ceinys, los contratos de Granjas Bonanza, las reservas de Hoteles Señor de Luren y los autos vendidos en los eventos de Autoniza. Y en el lado físico de la agencia: activaciones BTL, producción gráfica y eventos para marcas automotrices, inmobiliarias y de consumo.",
  "Firma los artículos del blog de Suggestion sobre publicidad digital, marketing inmobiliario y automotriz, imprenta y BTL, con una regla: los precios del blog son rangos del mercado con su fuente y su fecha, nunca las tarifas de la agencia.",
];

export default async function TalentoPage({ params }: Params) {
  const { slug } = await params;
  const t = getTalento(slug);
  if (!t) notFound();

  const autor = esAutor(t.slug);
  const url = absoluteUrl(`/equipo/${t.slug}`);
  const personaId = autor ? AUTOR_ID : `${url}#person`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personaId,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    name: t.nombre,
    jobTitle: t.rol,
    description: autor ? BIO_AUTOR[0] : t.bio,
    worksFor: { "@id": ORG_ID },
    url,
    ...(t.foto ? { image: absoluteUrl(t.foto) } : {}),
    knowsAbout: t.especialidades,
    // Sin sameAs a las redes de la empresa: no son de la persona. LinkedIn
    // personal solo si existe y el dueño lo aprueba (campo `linkedin`).
    ...(t.linkedin ? { sameAs: [t.linkedin] } : {}),
  };

  // Los artículos del autor, del más reciente al más antiguo.
  const articulos = autor
    ? [...BLOG_POSTS].sort((a, b) => (b.actualizado ?? b.date).localeCompare(a.actualizado ?? a.date))
    : [];

  return (
    <>
      {/* ProfilePage: la página es el perfil de esta persona (Google lo usa para autores). */}
      <JsonLd data={[webPageSchema({ tipo: "ProfilePage", url, name: `${t.nombre}, ${t.rol} de Suggestion`, mainEntity: personaId }), schema]} />
      <TarjetaPersonal t={t} />
      {autor && (
        <section style={{ background: "var(--white)" }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(2rem,4vw,3rem) var(--gutter) var(--section-y)" }}>
            <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }, { name: t.nombre, href: `/equipo/${t.slug}` }]} />
            <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.15 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "24px 0 14px" }}>
              Sobre {t.corto}
            </h2>
            {BIO_AUTOR.map((p) => (
              <p key={p.slice(0, 24)} style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", margin: "0 0 14px", maxWidth: "66ch" }}>
                {p}
              </p>
            ))}
            <h2 style={{ font: "var(--fw-bold) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "32px 0 12px" }}>
              Sus {articulos.length} artículos
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
              {articulos.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.categoria}/${p.slug}`} className="hk-ulink" style={{ font: "var(--fw-regular) var(--fs-base)/1.45 var(--font-body)", color: "var(--text-strong)" }}>
                    {p.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/blog" className="hk-ulink" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24, font: "var(--fw-bold) var(--fs-sm)/1 var(--font-accent)", color: "var(--text-strong)" }}>
              Ir al blog <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
