import type { Metadata } from "next";
import { Search, Target, Zap } from "lucide-react";
import { Label } from "@/components/brand/parts";
import AuditForm from "@/components/AuditForm";
import Faq from "@/components/Faq";
import { buildMetadata } from "@/lib/seo";

const FAQ = [
  { q: "¿De verdad es gratis? ¿Cuál es el truco?", a: "Sí, es gratis y no hay truco: es la mejor forma de demostrarte cómo trabajamos. Si el diagnóstico te sirve y quieres que lo ejecutemos, hablamos de una propuesta; si no, te quedas con las 3 mejoras y listo." },
  { q: "¿Qué necesito darles acceso?", a: "Para el diagnóstico inicial, nada: trabajamos con lo público (tu web, redes y anuncios visibles) y lo que nos cuentes del negocio. Si luego avanzamos, ahí sí revisamos tus cuentas con permisos de solo lectura." },
  { q: "¿En cuánto tiempo lo recibo?", a: "En un máximo de 48 horas hábiles te contactamos con el diagnóstico: 20 minutos por videollamada o un resumen por WhatsApp, como prefieras." },
  { q: "¿Sirve si recién estoy empezando?", a: "Sí. Si aún no inviertes en publicidad, el diagnóstico se enfoca en tu oferta, tu presencia digital y por dónde te conviene empezar sin quemar presupuesto." },
];

export const metadata: Metadata = buildMetadata({
  title: "Auditoría de Marketing Gratis en Ica (48 h) | Suggestion",
  description: "Te auditamos gratis el funnel: pauta, web y seguimiento. Recibes 3 mejoras accionables en 48 horas hábiles, sin compromiso. Para negocios en Perú.",
  path: "/auditoria-gratis",
});

const ENTREGABLES = [
  { Icon: Search, t: "Leemos tu funnel completo", d: "Revisamos tu pauta, tu web/redes y tu seguimiento: dónde se está escapando la venta." },
  { Icon: Target, t: "3 mejoras accionables", d: "Te decimos las 3 cosas concretas que más moverían tus resultados — puedas aplicarlas con o sin nosotros." },
  { Icon: Zap, t: "En 48 h, sin compromiso", d: "Un diagnóstico honesto de 20 minutos por videollamada o WhatsApp. Sin letra pequeña." },
];

export default function AuditoriaGratis() {
  return (
    <>
      {/* HERO + QUÉ RECIBES */}
      <section style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter) clamp(2.5rem,5vw,3.5rem)" }}>
          <div className="hk-enter"><Label dot>Auditoría gratuita</Label></div>
          <h1 className="hk-enter-2" style={{ font: "var(--fw-bold) var(--fs-4xl)/1.04 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0", maxWidth: "17ch" }}>
            Te decimos dónde se escapa tu venta. Gratis, en 48 horas.
          </h1>
          <p className="hk-enter-3" style={{ font: "var(--fw-light) var(--fs-md)/1.62 var(--font-body)", color: "var(--text-body)", margin: "22px 0 0", maxWidth: "52ch" }}>
            El mismo diagnóstico con el que empezamos cada cuenta —el que llevó a Ceinys a S/350K en ventas— aplicado a tu negocio. Sin costo y sin compromiso: si te sirve, hablamos; si no, te quedas con las mejoras.
          </p>
          <div className="hk-enter-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-4)", marginTop: 40 }}>
            {ENTREGABLES.map(({ Icon, t, d }) => (
              <div key={t} style={{ padding: "var(--space-6)", background: "var(--surface-raised)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
                <Icon size={22} style={{ color: "var(--cyan)" }} aria-hidden />
                <h2 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "14px 0 8px" }}>{t}</h2>
                <p style={{ font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)", color: "var(--text-muted)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }}>
        <span className="hk-grain-layer" aria-hidden />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 880, margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "0 0 10px" }}>
            Pide tu auditoría
          </h2>
          <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "0 0 30px", maxWidth: "54ch" }}>
            2 minutos. Mientras más contexto nos des, más útil será el diagnóstico.
          </p>
          <AuditForm />
        </div>
      </section>

      {/* FAQ (maneja objeciones; emite schema FAQPage) */}
      <section style={{ background: "var(--surface-raised)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "var(--section-y-tight) var(--gutter)" }}>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "0 0 24px" }}>
            Lo que sueles preguntarte.
          </h2>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
