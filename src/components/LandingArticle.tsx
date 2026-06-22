import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Blot, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import RelatedLinks, { type RelatedLink } from "@/components/RelatedLinks";
import MetodoSection from "@/components/MetodoSection";
import PorQueSection from "@/components/PorQueSection";
import TransactionalSections from "@/components/TransactionalSections";
import JsonLd from "@/components/JsonLd";
import { site, whatsappLink } from "@/lib/site";
import type { Seccion, Faq as FaqType, Cierre, ItemTT, Paso } from "@/content/types";

/**
 * Plantilla común de páginas de servicio y sector (hero → prueba → secciones →
 * enlazado interno → FAQ → cierre). Server Component, SEO-safe. El schema de
 * Breadcrumb lo emite <Breadcrumbs> y el de FAQ <Faq>; el caller pasa el resto
 * (Service / CollectionPage) en `extraSchema`.
 */

export type RelatedBlock = { title: string; links: RelatedLink[]; columns?: number };

type Json = Record<string, unknown>;

export default function LandingArticle({
  breadcrumbs,
  kicker,
  h1,
  hero,
  ctaLabel,
  proof,
  secciones,
  incluye,
  beneficios,
  proceso,
  related = [],
  faq,
  cierre,
  shape = 3,
  extraSchema,
}: {
  breadcrumbs: Crumb[];
  kicker: string;
  h1: string;
  hero: string;
  ctaLabel: string;
  proof?: string;
  secciones: Seccion[];
  incluye?: ItemTT[];
  beneficios?: ItemTT[];
  proceso?: Paso[];
  related?: RelatedBlock[];
  faq: FaqType[];
  cierre: Cierre;
  shape?: number;
  extraSchema?: Json | Json[];
}) {
  const waMsg = `Hola Suggestion, me interesa: ${h1}.`;
  const proofText =
    proof ??
    "S/350K en ventas, +350 leads y 8 lotes vendidos con S/3,000 en pauta · 7 años convirtiendo atención en ventas.";
  return (
    <>
      {extraSchema && <JsonLd data={extraSchema} />}

      {/* HERO */}
      <section style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "clamp(1.25rem,3vw,2rem) var(--gutter) clamp(2rem,4vw,3rem)",
          }}
        >
          <Breadcrumbs items={breadcrumbs} />
          <div
            className="hk-hero"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.15fr) minmax(0,0.85fr)",
              gap: "clamp(2rem,5vw,4rem)",
              alignItems: "center",
              marginTop: "clamp(1.5rem,3vw,2.5rem)",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <Label dot>{kicker}</Label>
              <h1
                className="hk-enter-2"
                style={{
                  font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)",
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--text-strong)",
                  margin: "16px 0 0",
                  maxWidth: "17ch",
                }}
              >
                {h1}
              </h1>
              <p
                className="hk-enter-3"
                style={{
                  font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)",
                  color: "var(--text-body)",
                  maxWidth: "48ch",
                  margin: "22px 0 0",
                }}
              >
                {hero}
              </p>
              <div
                className="hk-enter-4"
                style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}
              >
                <Btn as="a" href="/contacto" size="lg">
                  {ctaLabel} <ArrowRight size={18} />
                </Btn>
                <Btn
                  as="a"
                  href={whatsappLink(waMsg)}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Btn>
              </div>
            </div>
            <div className="hk-hero-art" style={{ minWidth: 0, display: "flex", justifyContent: "center" }}>
              <Blot dual shape={shape} size={420} className="hk-blot-in" />
            </div>
          </div>
        </div>
      </section>

      {/* BARRA DE PRUEBA (siempre visible; resultados reales por defecto) */}
      {proofText && (
        <div style={{ background: "var(--black)", color: "var(--white)" }}>
          <div
            style={{
              maxWidth: "var(--container-max)",
              margin: "0 auto",
              padding: "18px var(--gutter)",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span
              aria-hidden
              style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cyan)", flexShrink: 0 }}
            />
            <p
              style={{
                font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)",
                color: "var(--text-on-inverse-mut)",
                margin: 0,
              }}
            >
              {proofText}
            </p>
          </div>
        </div>
      )}

      {/* SECCIONES */}
      <Section tone="light">
        <div style={{ display: "grid", gap: "var(--space-8)", maxWidth: 880 }}>
          {secciones.map((sec, i) => (
            <div key={i}>
              <SectionHeading level={2} maxWidth="26ch">
                {sec.h2}
              </SectionHeading>
              {sec.parrafo && (
                <p
                  style={{
                    font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)",
                    color: "var(--text-body)",
                    marginTop: 16,
                    maxWidth: "66ch",
                  }}
                >
                  {sec.parrafo}
                </p>
              )}
              {sec.sub && (
                <div style={{ display: "grid", gap: "var(--space-5)", marginTop: 24 }}>
                  {sec.sub.map((s, j) => (
                    <div key={j}>
                      <h3
                        style={{
                          font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)",
                          letterSpacing: "var(--tracking-snug)",
                          color: "var(--text-strong)",
                        }}
                      >
                        {s.h3}
                      </h3>
                      <p
                        style={{
                          font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)",
                          color: "var(--text-muted)",
                          marginTop: 6,
                          maxWidth: "64ch",
                        }}
                      >
                        {s.texto}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {sec.bullets && (
                <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gap: 14 }}>
                  {sec.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span
                        aria-hidden
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "var(--cyan)",
                          marginTop: 9,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          font: "var(--fw-light) var(--fs-base)/1.55 var(--font-body)",
                          color: "var(--text-body)",
                          maxWidth: "64ch",
                        }}
                      >
                        {b.titulo && (
                          <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{b.titulo}. </strong>
                        )}
                        {b.texto}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* AST — qué incluye / beneficios / proceso (transaccional) */}
      <TransactionalSections incluye={incluye} beneficios={beneficios} proceso={proceso} />

      {/* ENLAZADO INTERNO (silo) */}
      {related.length > 0 && (
        <Section tone="light" style={{ background: "var(--surface-raised)", paddingTop: "var(--section-y-tight)", paddingBottom: "var(--section-y-tight)" }}>
          <div style={{ display: "grid", gap: "var(--space-7)" }}>
            {related.map((block, i) => (
              <RelatedLinks key={i} title={block.title} links={block.links} columns={block.columns ?? 2} />
            ))}
          </div>
        </Section>
      )}

      {/* MÉTODO genérico (solo si el servicio no trae proceso propio) + POR QUÉ */}
      {!proceso && <MetodoSection />}
      <PorQueSection tone="light" />

      {/* FAQ */}
      {faq.length > 0 && (
        <Section tone="light" style={{ background: "var(--surface-raised)" }}>
          <div>
            <SectionHeading level={2} kicker="Preguntas frecuentes" maxWidth="20ch" style={{ marginBottom: 20 }}>
              Lo que sueles preguntarte.
            </SectionHeading>
            <div style={{ maxWidth: 820 }}>
              <Faq items={faq} />
            </div>
          </div>
        </Section>
      )}

      {/* CIERRE */}
      <section style={{ background: "var(--black)", color: "var(--white)", borderTop: "1px solid var(--hairline-inverse)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "var(--section-y) var(--gutter)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 26,
          }}
        >
          <SectionHeading level={2} tone="dark" maxWidth="18ch">
            {cierre.h2}
          </SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <Btn as="a" href="/contacto" variant="onDark" size="lg">
              {cierre.cta} <ArrowRight size={18} />
            </Btn>
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                font: "var(--fw-light) var(--fs-sm) var(--font-body)",
                color: "var(--white)",
              }}
            >
              <Phone size={16} style={{ color: "var(--cyan)" }} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
