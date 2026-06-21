import { ArrowRight, Phone } from "lucide-react";
import { Section, Btn, Blot, Label } from "@/components/brand/parts";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import ServiceGrid, { type ServiceGridItem } from "@/components/ServiceGrid";
import MetodoSection from "@/components/MetodoSection";
import PorQueSection from "@/components/PorQueSection";
import JsonLd from "@/components/JsonLd";
import { site, whatsappLink } from "@/lib/site";

/**
 * Página hub (pilar de servicios, categorías y hub de sectores):
 * hero + grid de tarjetas hijas + cierre. Server Component, SEO-safe.
 * Breadcrumb schema lo emite <Breadcrumbs>; el resto via `extraSchema`.
 */

type Json = Record<string, unknown>;

export default function HubLanding({
  breadcrumbs,
  kicker,
  h1,
  intro,
  cta,
  items,
  columns = 3,
  gridKicker,
  gridHeading,
  shape = 1,
  extraSchema,
}: {
  breadcrumbs: Crumb[];
  kicker: string;
  h1: string;
  intro: string;
  cta: string;
  items: ServiceGridItem[];
  columns?: number;
  gridKicker?: string;
  gridHeading?: string;
  shape?: number;
  extraSchema?: Json | Json[];
}) {
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
                  maxWidth: "16ch",
                }}
              >
                {h1}
              </h1>
              <p
                className="hk-enter-3"
                style={{
                  font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)",
                  color: "var(--text-body)",
                  maxWidth: "50ch",
                  margin: "22px 0 0",
                }}
              >
                {intro}
              </p>
              <div className="hk-enter-4" style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
                <Btn as="a" href="/contacto" size="lg">
                  {cta} <ArrowRight size={18} />
                </Btn>
                <Btn
                  as="a"
                  href={whatsappLink()}
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

      {/* GRID DE HIJAS */}
      <Section tone="light" style={{ background: "var(--surface-raised)" }}>
        {(gridKicker || gridHeading) && (
          <SectionHeading level={2} kicker={gridKicker} maxWidth="24ch" style={{ marginBottom: 36 }}>
            {gridHeading}
          </SectionHeading>
        )}
        <div>
          <ServiceGrid items={items} columns={columns} />
        </div>
      </Section>

      {/* MÉTODO + POR QUÉ — más sustancia en hubs y pilares */}
      <MetodoSection />
      <PorQueSection tone="light" />

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
            gap: 24,
          }}
        >
          <SectionHeading level={2} tone="dark" maxWidth="18ch">
            Convirtamos tu atención en ventas.
          </SectionHeading>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <Btn as="a" href="/contacto" variant="onDark" size="lg">
              {cta} <ArrowRight size={18} />
            </Btn>
            <a
              href={whatsappLink()}
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
