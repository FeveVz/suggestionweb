import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Btn, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, ORG_ID } from "@/lib/site";
import { CASOS_DETALLE, getCaso, allCasoSlugs } from "@/content/casos";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allCasoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaso(slug);
  if (!c) return {};
  return buildMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/casos/${c.slug}`, type: "article" });
}

export default async function CasoPage({ params }: Params) {
  const { slug } = await params;
  const c = getCaso(slug);
  if (!c) notFound();

  const otros = CASOS_DETALLE.filter((x) => x.slug !== c.slug).map((x) => ({
    label: x.cliente,
    href: `/casos/${x.slug}`,
    description: x.h1,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.h1,
    description: c.metaDescription,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: absoluteUrl(`/casos/${c.slug}`),
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* HERO */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2rem,4vw,3rem)" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Casos", href: "/casos" }, { name: c.cliente, href: `/casos/${c.slug}` }]} />
          <div style={{ marginTop: "clamp(1.5rem,3vw,2.5rem)", maxWidth: 820 }}>
            <Label dot>{c.sector}</Label>
            <h1 style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "20ch" }}>
              {c.h1}
            </h1>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "58ch" }}>{c.resumen}</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }}>
        <span className="hk-grain-layer" aria-hidden />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2rem,4vw,3rem) var(--gutter)", display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))`, gap: "var(--space-5)" }}>
          {c.stats.map((s) => (
            <div key={s.label}>
              <div style={{ font: "var(--fw-bold) var(--fs-3xl)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--cyan)" }}>{s.valor}</div>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 8 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RETO + QUÉ HICIMOS */}
      <Section tone="light">
        <div style={{ maxWidth: 860 }}>
          <SectionHeading level={2} kicker="El reto" maxWidth="26ch" style={{ marginBottom: 16 }}>
            De dónde partimos.
          </SectionHeading>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", maxWidth: "66ch" }}>{c.reto}</p>
        </div>
        <SectionHeading level={2} kicker="Qué hicimos" maxWidth="26ch" style={{ margin: "56px 0 28px" }}>
          El método aplicado a este caso.
        </SectionHeading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)" }}>
          {c.solucion.map((s, i) => (
            <div key={s.titulo} style={{ padding: "var(--space-6)", background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--cyan)" }}>0{i + 1}</span>
              <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "12px 0 8px" }}>{s.titulo}</h3>
              <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>{s.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GALERÍA */}
      {c.imagenes && c.imagenes.length > 0 && (
        <Section tone="light" style={{ background: "var(--surface-raised)" }}>
          <SectionHeading level={2} kicker="Las piezas" maxWidth="24ch" style={{ marginBottom: 30 }}>
            El trabajo que hizo el resultado.
          </SectionHeading>
          <div className="hk-casos-gal" style={{ maxWidth: 1000 }}>
            {c.imagenes.map((g) => (
              <figure key={g.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" style={{ width: "100%", height: "auto", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", display: "block" }} />
                <figcaption style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 8 }}>{g.cap}</figcaption>
              </figure>
            ))}
          </div>
          <style>{`
            .hk-casos-gal { columns: 1; column-gap: var(--space-4); }
            @media (min-width: 640px) { .hk-casos-gal { columns: 2; } }
            .hk-casos-gal figure { break-inside: avoid; margin: 0 0 var(--space-4); }
          `}</style>
        </Section>
      )}

      {/* QUOTE */}
      <Section tone="light">
        <blockquote style={{ margin: "0 auto", maxWidth: 780, borderLeft: "3px solid var(--cyan)", paddingLeft: "clamp(1.25rem,3vw,2rem)" }}>
          <p style={{ font: "var(--fw-medium) var(--fs-xl)/1.35 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>“{c.quote}”</p>
          <footer style={{ font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-muted)", marginTop: 16 }}>— {c.autor}</footer>
        </blockquote>
      </Section>

      {/* SERVICIOS + OTROS CASOS */}
      <Section tone="light" style={{ background: "var(--surface-raised)", paddingTop: "var(--section-y-tight)", paddingBottom: "var(--section-y-tight)" }}>
        <div style={{ display: "grid", gap: "var(--space-7)" }}>
          <RelatedLinks title="Servicios que usó este caso" links={c.servicios} columns={c.servicios.length >= 3 ? 3 : 2} />
          <RelatedLinks title="Otros casos" links={otros} columns={2} />
          <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)" }}>
            ¿Tu rubro? Mira <Link href={c.sectorHref} className="hk-ulink" style={{ color: "var(--text-strong)", fontWeight: 500 }}>marketing {c.sector.toLowerCase()}</Link>.
          </p>
        </div>
      </Section>

      {/* CIERRE */}
      <section style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
          <SectionHeading level={2} tone="dark" maxWidth="20ch">
            ¿Quieres resultados así en tu negocio?
          </SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn as="a" href="/auditoria-gratis" variant="onDark" size="lg">
              Auditoría gratis en 48 h <ArrowRight size={18} />
            </Btn>
            <Btn as="a" href="/contacto" variant="ghostDark" size="lg">
              Agenda una llamada
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
}
