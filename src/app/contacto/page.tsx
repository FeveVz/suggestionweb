import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Label } from "@/components/brand/parts";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CtaForm } from "@/components/brand/interactive";
import { buildMetadata } from "@/lib/seo";
import { contactPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contacto: Agenda una Llamada | Suggestion",
  description:
    "Cuéntanos de tu negocio y te damos un diagnóstico honesto de tu funnel, sin humo. Agenda una llamada o escríbenos por WhatsApp hoy mismo.",
  path: "/contacto",
});

export default function Contacto() {
  return (
    <>
      <JsonLd data={contactPageSchema({ url: "/contacto" })} />

      {/* Migas sobre fondo claro y luego bloque oscuro de conversión */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(1.25rem,3vw,2rem) var(--gutter) 0" }}>
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Contacto", href: "/contacto" }]} />
        </div>
      </section>

      <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
        <span className="hk-grain-layer" aria-hidden />
        <div className="hk-cta" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
          <div>
            <Label tone="onDark" dot>Agenda una llamada</Label>
            <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.06 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "14px 0 0", maxWidth: "14ch" }}>
              Convirtamos tu atención en ventas.
            </h1>
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 20, maxWidth: "42ch" }}>
              Cuéntanos de tu negocio. Te respondemos con un diagnóstico honesto de tu funnel —sin humo, sin promesas de #1.
            </p>
            <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
              <a href={`tel:${site.phoneE164}`} style={{ display: "inline-flex", alignItems: "center", gap: 12, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
                <Phone size={16} style={{ color: "var(--cyan)" }} /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 12, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--white)" }}>
                <Mail size={16} style={{ color: "var(--cyan)" }} /> {site.email}
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12, font: "var(--fw-light) var(--fs-sm) var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
                <MapPin size={16} style={{ color: "var(--cyan)" }} /> {site.city}, Perú · Atención a todo el país
              </span>
            </div>
          </div>
          <CtaForm />
        </div>
      </section>
    </>
  );
}
