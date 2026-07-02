import type { Metadata } from "next";
import { Label } from "@/components/brand/parts";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad | Suggestion",
  description: "Cómo Agencia de Marketing Suggestion S.A.C. trata tus datos personales conforme a la Ley N.º 29733 de Protección de Datos Personales del Perú.",
  path: "/privacidad",
});

const H2: React.CSSProperties = { font: "var(--fw-medium) var(--fs-xl)/1.2 var(--font-display)", color: "var(--text-strong)", margin: "36px 0 12px" };
const P: React.CSSProperties = { font: "var(--fw-light) var(--fs-base)/1.65 var(--font-body)", color: "var(--text-body)", margin: "0 0 12px", maxWidth: "70ch" };

export default function Privacidad() {
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(2rem,4vw,3.5rem) var(--gutter) var(--section-y)" }}>
        <Label dot>Legal</Label>
        <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 8px" }}>
          Política de Privacidad
        </h1>
        <p style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-muted)" }}>Última actualización: junio de 2026</p>

        <h2 style={H2}>1. Responsable del tratamiento</h2>
        <p style={P}>
          <strong>{site.legalName}</strong> (RUC {site.ruc}), con domicilio en Ica, Perú (en adelante, “Suggestion”), es responsable del tratamiento de los datos personales que nos proporcionas a través de este sitio web, de conformidad con la Ley N.º 29733 — Ley de Protección de Datos Personales — y su Reglamento.
        </p>

        <h2 style={H2}>2. Datos que recopilamos</h2>
        <p style={P}>
          Recopilamos los datos que nos entregas voluntariamente en nuestros formularios: nombre, nombre de tu negocio, correo electrónico, teléfono/WhatsApp y el mensaje u objetivo que describas. Además, con fines estadísticos, usamos herramientas de analítica (como Google Analytics y Meta Pixel) que registran datos de navegación de forma agregada mediante cookies.
        </p>

        <h2 style={H2}>3. Finalidad</h2>
        <p style={P}>
          Usamos tus datos para: (a) responder tu solicitud de contacto, cotización, auditoría o reclamo; (b) enviarte información comercial sobre nuestros servicios cuando nos lo autorices; y (c) mejorar nuestro sitio y campañas mediante estadísticas de uso.
        </p>

        <h2 style={H2}>4. Conservación y seguridad</h2>
        <p style={P}>
          Tus datos se almacenan en proveedores de infraestructura seguros (alojamiento web y base de datos con cifrado en tránsito) y se conservan mientras exista una relación comercial o durante el tiempo necesario para atender tu solicitud. Aplicamos medidas técnicas y organizativas razonables para protegerlos.
        </p>

        <h2 style={H2}>5. Transferencias</h2>
        <p style={P}>
          No vendemos ni cedemos tus datos a terceros. Nuestros proveedores tecnológicos (hosting, base de datos y analítica) pueden procesar datos en servidores ubicados fuera del Perú, bajo sus propias garantías de seguridad.
        </p>

        <h2 style={H2}>6. Tus derechos (ARCO)</h2>
        <p style={P}>
          Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiéndonos a <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>{site.email}</a> o al {site.phoneDisplay}. Atenderemos tu solicitud en los plazos que establece la ley. También puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales.
        </p>

        <h2 style={H2}>7. Cookies</h2>
        <p style={P}>
          Este sitio usa cookies propias y de terceros con fines analíticos y publicitarios. Puedes desactivarlas desde la configuración de tu navegador; el sitio seguirá funcionando con normalidad.
        </p>
      </div>
    </section>
  );
}
