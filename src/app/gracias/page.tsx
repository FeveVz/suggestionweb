import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import { buildMetadata } from "@/lib/seo";
import GraciasWa from "@/components/GraciasWa";
import { site } from "@/lib/site";

/**
 * Tras enviar un formulario. Mientras GUARDAR_EN_BASE sea false (lib/cta.ts) los
 * datos solo llegan si la persona envía el WhatsApp: por eso no dice "recibido" y
 * su page_view no confirma un lead.
 * noindex: no debe rankear ni recibir tráfico orgánico.
 */
export const metadata: Metadata = buildMetadata({
  title: "Último paso: envía tu mensaje | Suggestion",
  description: "Envía el mensaje que se abrió en WhatsApp para que te respondamos.",
  path: "/gracias",
  noindex: true,
});

export default function Gracias() {
  return (
    <section style={{ background: "var(--white)", minHeight: "62vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <div className="hk-enter"><Label dot>Último paso</Label></div>
        <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "18px 0 0", maxWidth: "18ch" }}>
          Envía el mensaje en WhatsApp para terminar.
        </h1>
        <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-body)", margin: "20px 0 0", maxWidth: "52ch" }}>
          Tu mensaje ya está escrito en WhatsApp. <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>Hasta que lo envíes no nos llega.</strong> Si no se abrió, ábrelo aquí:
        </p>
        <div className="hk-enter-4" style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}>
          <GraciasWa />
          <Btn as="a" href="/casos" variant="secondary" size="lg">
            Ver casos mientras tanto <ArrowRight size={18} />
          </Btn>
        </div>
        <p style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-muted)", marginTop: 22 }}>
          <Clock size={14} style={{ color: "var(--cyan)" }} /> Atención las 24 horas con nuestro agente de IA · {site.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
