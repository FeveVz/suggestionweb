import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import { buildMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

/**
 * Página de gracias (conversión medible: su page_view = lead confirmado).
 * noindex: no debe rankear ni recibir tráfico orgánico.
 */
export const metadata: Metadata = buildMetadata({
  title: "¡Recibido! Te respondemos en menos de 24 h | Suggestion",
  description: "Tus datos llegaron bien. Te contactamos en menos de 24 horas hábiles.",
  path: "/gracias",
  noindex: true,
});

export default function Gracias() {
  return (
    <section style={{ background: "var(--white)", minHeight: "62vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <div className="hk-enter"><Label dot>Mensaje recibido</Label></div>
        <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "18px 0 0", maxWidth: "18ch" }}>
          Listo. Tus datos ya están con el equipo.
        </h1>
        <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-body)", margin: "20px 0 0", maxWidth: "52ch" }}>
          Te respondemos en <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>menos de 24 horas hábiles</strong> con un diagnóstico honesto — sin humo ni promesas mágicas. Si prefieres no esperar, escríbenos directo:
        </p>
        <div className="hk-enter-4" style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}>
          <Btn as="a" href={whatsappLink("Hola Suggestion, acabo de dejar mis datos en la web.")} target="_blank" rel="noopener noreferrer" size="lg">
            <MessageCircle size={18} /> Abrir WhatsApp
          </Btn>
          <Btn as="a" href="/casos" variant="secondary" size="lg">
            Ver casos mientras tanto <ArrowRight size={18} />
          </Btn>
        </div>
        <p style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--fw-light) var(--fs-xs)/1 var(--font-body)", color: "var(--text-muted)", marginTop: 22 }}>
          <Clock size={14} style={{ color: "var(--cyan)" }} /> Horario de atención: lunes a sábado, 9:00–19:00 (hora de Perú) · {site.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
