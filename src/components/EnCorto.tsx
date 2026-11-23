import { ArrowRight, Check } from "lucide-react";

/**
 * La respuesta corta, arriba de todo: tres o cuatro frases que contestan lo
 * que la persona vino a preguntar (precio, método, qué esperar) antes de que
 * tenga que bajar.
 *
 * Nació de la auditoría del 2026-11-10: estas páginas reciben visitas de
 * ChatGPT (investigación de mercado, redes sociales, cuánto invertir en ads)
 * y casi nadie contactaba. Un asistente cita frases que se sostienen solas, y
 * quien llega desde él quiere la respuesta antes que el contexto.
 *
 * Solo datos que la página ya publica más abajo: precios de content/precios.ts
 * o el cálculo del propio artículo. Nada que no esté escrito en la página.
 */
export default function EnCorto({ puntos, enlace }: { puntos: string[]; enlace?: { href: string; label: string; externo?: boolean } }) {
  return (
    <aside
      className="hk-encorto"
      aria-label="En corto"
      style={{
        background: "var(--surface-raised)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "clamp(1.25rem,3vw,1.75rem)",
      }}
    >
      <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: "var(--tracking-label)", color: "var(--text-muted)" }}>
        En corto
      </span>
      <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid", gap: 12 }}>
        {puntos.map((p) => (
          <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Check size={16} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: 4 }} aria-hidden />
            <span style={{ font: "var(--fw-light) var(--fs-base)/1.55 var(--font-body)", color: "var(--text-strong)" }}>{p}</span>
          </li>
        ))}
      </ul>
      {enlace && (
        <a
          href={enlace.href}
          data-cta="en corto"
          {...(enlace.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="hk-ulink"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, font: "var(--fw-bold) var(--fs-sm)/1.3 var(--font-accent)", color: "var(--text-strong)" }}
        >
          {enlace.label} <ArrowRight size={15} aria-hidden />
        </a>
      )}
    </aside>
  );
}
