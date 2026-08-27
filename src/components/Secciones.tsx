import SectionHeading from "@/components/SectionHeading";
import type { Seccion } from "@/content/types";

/**
 * Render de secciones de contenido.
 *
 * Además del párrafo, los sub-H3 y las viñetas de siempre, una sección puede
 * traer una tabla comparativa, un proceso numerado, una cifra destacada o una
 * nota al margen. Se añadieron porque un artículo largo hecho solo de párrafos
 * y viñetas se lee todo igual: no hay forma de comparar dos opciones de un
 * vistazo ni de que una cifra se quede en la cabeza.
 *
 * Todo es CSS y Server Component: nada de JS en el cliente. El "dinamismo" es
 * visual —ritmo, contraste y color de marca—, no animación.
 */

const CELDA = {
  font: "var(--fw-light) var(--fs-base)/1.5 var(--font-body)",
  color: "var(--text-body)",
  padding: "14px 18px",
  borderBottom: "1px solid var(--border-subtle)",
  verticalAlign: "top" as const,
};

function Tabla({ t }: { t: NonNullable<Seccion["tabla"]> }) {
  return (
    <figure style={{ margin: "24px 0 0" }}>
      {/* La caja hace el scroll, nunca la página: en móvil una tabla de 3-4
          columnas no cabe y sin esto rompe el layout entero. */}
      <div
        style={{
          overflowX: "auto",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-md)",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 460 }}>
          <thead>
            <tr>
              {t.cabeceras.map((c, i) => (
                <th
                  key={i}
                  scope="col"
                  style={{
                    font: "var(--fw-bold) var(--fs-micro)/1.3 var(--font-accent)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-label)",
                    color: "var(--text-muted)",
                    textAlign: "left",
                    padding: "14px 18px",
                    background: "var(--surface-raised)",
                    borderBottom: "1px solid var(--border-subtle)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.filas.map((fila, i) => (
              <tr key={i}>
                {fila.map((celda, j) =>
                  j === 0 ? (
                    <th
                      key={j}
                      scope="row"
                      style={{
                        ...CELDA,
                        font: "var(--fw-medium) var(--fs-base)/1.45 var(--font-body)",
                        color: "var(--text-strong)",
                        textAlign: "left",
                      }}
                    >
                      {celda}
                    </th>
                  ) : (
                    <td key={j} style={CELDA}>
                      {celda}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.nota && (
        <figcaption
          style={{
            font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)",
            color: "var(--text-muted)",
            marginTop: 10,
          }}
        >
          {t.nota}
        </figcaption>
      )}
    </figure>
  );
}

function Pasos({ pasos }: { pasos: NonNullable<Seccion["pasos"]> }) {
  return (
    <ol style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gap: "var(--space-5)" }}>
      {pasos.map((p, i) => (
        <li key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
          <span
            aria-hidden
            style={{
              font: "var(--fw-bold) var(--fs-lg)/1 var(--font-display)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--cyan-700)",
              flexShrink: 0,
              width: "2.2ch",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span style={{ borderLeft: "1px solid var(--border-subtle)", paddingLeft: 18 }}>
            <strong
              style={{
                display: "block",
                font: "var(--fw-medium) var(--fs-md)/1.25 var(--font-display)",
                letterSpacing: "var(--tracking-snug)",
                color: "var(--text-strong)",
              }}
            >
              {p.titulo}
            </strong>
            <span
              style={{
                display: "block",
                font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)",
                color: "var(--text-body)",
                marginTop: 6,
                maxWidth: "62ch",
              }}
            >
              {p.texto}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function DatoDestacado({ d }: { d: NonNullable<Seccion["dato"]> }) {
  return (
    <div
      style={{
        margin: "26px 0 0",
        padding: "var(--space-5) var(--space-6)",
        background: "var(--surface-raised)",
        borderRadius: "var(--radius-md)",
        borderLeft: "3px solid var(--cyan-700)",
      }}
    >
      <p
        style={{
          font: "var(--fw-bold) clamp(2.2rem, 5vw, 3.2rem)/1 var(--font-display)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--cyan-700)",
          margin: 0,
        }}
      >
        {d.cifra}
      </p>
      <p
        style={{
          font: "var(--fw-light) var(--fs-md)/1.55 var(--font-body)",
          color: "var(--text-body)",
          margin: "10px 0 0",
          maxWidth: "58ch",
        }}
      >
        {d.texto}
      </p>
      {d.fuente && (
        <p
          style={{
            font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)",
            color: "var(--text-muted)",
            margin: "8px 0 0",
          }}
        >
          Fuente: {d.fuente}
        </p>
      )}
    </div>
  );
}

function NotaAlMargen({ n }: { n: NonNullable<Seccion["nota"]> }) {
  const aviso = n.tipo === "aviso";
  return (
    <aside
      style={{
        margin: "26px 0 0",
        padding: "var(--space-5)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${aviso ? "var(--orange)" : "var(--cyan-700)"}`,
      }}
    >
      {n.titulo && (
        <strong
          style={{
            display: "block",
            font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-label)",
            color: aviso ? "var(--orange)" : "var(--cyan-700)",
            marginBottom: 10,
          }}
        >
          {n.titulo}
        </strong>
      )}
      <p
        style={{
          font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)",
          color: "var(--text-body)",
          margin: 0,
          maxWidth: "64ch",
        }}
      >
        {n.texto}
      </p>
    </aside>
  );
}

export default function Secciones({ secciones }: { secciones: Seccion[] }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-7)" }}>
      {secciones.map((sec, i) => (
        // minWidth:0 es obligatorio: al ser hijo de un grid, por defecto vale
        // `auto` y no puede encoger por debajo del contenido. La tabla lleva
        // min-width para que sus columnas sean legibles, y sin esto ese ancho
        // empujaba la caja a 462 px dentro de una pantalla de 375: el
        // overflow-x:clip del <main> recortaba 107 px que el lector no podía
        // alcanzar ni scrolleando.
        <div key={i} style={{ minWidth: 0 }}>
          <SectionHeading level={2} maxWidth="30ch">
            {sec.h2}
          </SectionHeading>
          {sec.parrafo && (
            <p style={{ font: "var(--fw-light) var(--fs-md)/1.65 var(--font-body)", color: "var(--text-body)", marginTop: 16, maxWidth: "66ch" }}>
              {sec.parrafo}
            </p>
          )}
          {sec.dato && <DatoDestacado d={sec.dato} />}
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
          {sec.pasos && <Pasos pasos={sec.pasos} />}
          {sec.tabla && <Tabla t={sec.tabla} />}
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
          {sec.nota && <NotaAlMargen n={sec.nota} />}
        </div>
      ))}
    </div>
  );
}
