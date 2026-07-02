import type { Metadata } from "next";
import { Label } from "@/components/brand/parts";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Términos y Condiciones | Suggestion",
  description: "Condiciones de uso del sitio web de Agencia de Marketing Suggestion S.A.C.",
  path: "/terminos",
});

const H2: React.CSSProperties = { font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "36px 0 12px" };
const P: React.CSSProperties = { font: "var(--fw-light) var(--fs-base)/1.65 var(--font-body)", color: "var(--text-body)", margin: "0 0 12px", maxWidth: "70ch" };

export default function Terminos() {
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(2rem,4vw,3.5rem) var(--gutter) var(--section-y)" }}>
        <Label dot>Legal</Label>
        <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 8px" }}>
          Términos y Condiciones
        </h1>
        <p style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)" }}>Última actualización: junio de 2026</p>

        <h2 style={H2}>1. Titularidad del sitio</h2>
        <p style={P}>
          Este sitio web es operado por <strong>{site.legalName}</strong> (RUC {site.ruc}), con domicilio en Ica, Perú. Al navegarlo aceptas estos términos.
        </p>

        <h2 style={H2}>2. Uso del contenido</h2>
        <p style={P}>
          Los textos, marcas, logotipos, imágenes y demás contenidos del sitio son de titularidad de Suggestion o de sus clientes (usados con autorización) y están protegidos por la normativa de propiedad intelectual. No está permitida su reproducción con fines comerciales sin autorización escrita.
        </p>

        <h2 style={H2}>3. Información de servicios y precios</h2>
        <p style={P}>
          Los precios y alcances publicados son referenciales y pueden ajustarse según el diagnóstico de cada negocio. Toda contratación se formaliza mediante propuesta y/o contrato específico, que prevalece sobre lo publicado en el sitio.
        </p>

        <h2 style={H2}>4. Resultados</h2>
        <p style={P}>
          Los casos publicados corresponden a resultados reales de clientes específicos. No constituyen garantía de resultados idénticos: cada mercado, presupuesto y negocio es distinto, y así lo comunicamos en cada propuesta.
        </p>

        <h2 style={H2}>5. Limitación de responsabilidad</h2>
        <p style={P}>
          Suggestion no se responsabiliza por interrupciones temporales del sitio ni por el contenido de sitios de terceros enlazados.
        </p>

        <h2 style={H2}>6. Ley aplicable</h2>
        <p style={P}>
          Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se somete a los jueces y tribunales de Ica. Para consultas: <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
