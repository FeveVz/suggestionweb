import SectionHeading from "@/components/SectionHeading";
import type { Seccion } from "@/content/types";

/** Render de secciones de contenido (H2 + párrafo + sub-H3 + bullets). */
export default function Secciones({ secciones }: { secciones: Seccion[] }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-7)" }}>
      {secciones.map((sec, i) => (
        <div key={i}>
          <SectionHeading level={2} maxWidth="30ch">
            {sec.h2}
          </SectionHeading>
          {sec.parrafo && (
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", marginTop: 16, maxWidth: "66ch" }}>
              {sec.parrafo}
            </p>
          )}
          {sec.sub && (
            <div style={{ display: "grid", gap: "var(--space-5)", marginTop: 22 }}>
              {sec.sub.map((s, j) => (
                <div key={j}>
                  <h3 style={{ font: "var(--fw-medium) var(--fs-lg)/1.2 var(--font-display)", letterSpacing: "var(--tracking-snug)", color: "var(--text-strong)" }}>
                    {s.h3}
                  </h3>
                  <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-muted)", marginTop: 6, maxWidth: "64ch" }}>
                    {s.texto}
                  </p>
                </div>
              ))}
            </div>
          )}
          {sec.bullets && (
            <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 14 }}>
              {sec.bullets.map((b, j) => (
                <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)", marginTop: 9, flexShrink: 0 }} />
                  <p style={{ font: "var(--fw-light) var(--fs-base)/1.55 var(--font-body)", color: "var(--text-body)", maxWidth: "64ch" }}>
                    {b.titulo && <strong style={{ fontWeight: 700, color: "var(--text-strong)" }}>{b.titulo}. </strong>}
                    {b.texto}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
