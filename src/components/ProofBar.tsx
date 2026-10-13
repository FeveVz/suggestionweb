import { ArrowRight } from "lucide-react";
import { Stat } from "@/components/brand/parts";
import CountUp from "@/components/CountUp";
import { EQUIPO } from "@/content/equipo";
import { SECTORES } from "@/content/sectores";
import { aniosActivos, site } from "@/lib/site";

/**
 * Barra de prueba social (doc 16 §5). Banda oscura con la línea del funnel
 * (Lead → Cita → Cierre) y 3–4 métricas reales en grande.
 * Por defecto (agregado, sin repetir los casos): 19 marcas de vehículos · +50 marcas · sectores · 7 años.
 * El conteo de sectores se deriva de SECTORES para que nunca se desincronice al añadir verticales.
 */

export type ProofStat = { value: string; label: string; href?: string };

// Cada cifra lleva a la página que la demuestra. Antes eran texto plano y
// concentraban el 29% de los clics de la home sin llevar a ninguna parte.
const DEFAULT_STATS: ProofStat[] = [
  { value: "19", label: "Marcas de vehículos atendidas", href: "/marketing-automotriz" },
  { value: "+50", label: "Marcas que confían en nosotros", href: "/casos" },
  { value: String(SECTORES.length), label: "Sectores con estrategia propia", href: "/sectores" },
  // "7 años" es una afirmación; "desde 2019" es un dato que se puede
  // comprobar. Y el número se calcula, así que no caduca en enero.
  { value: String(aniosActivos()), label: `Años en Ica y Perú, desde ${site.fundacion}`, href: "/nosotros" },
];

const FUNNEL = ["Lead", "Cita", "Cierre"];

export default function ProofBar({
  stats = DEFAULT_STATS,
  funnel = true,
  equipo = false,
}: {
  stats?: ProofStat[];
  funnel?: boolean;
  /**
   * Las siete personas, debajo de las cifras.
   *
   * Por qué aquí y no en una sección nueva: la home ya mide 16,6 pantallas de
   * móvil y el equipo estaba solo en /nosotros, el sexto ítem del menú. Quien
   * entra se pregunta «¿son dos personas con una laptop o una agencia?» en los
   * primeros veinte segundos, y «+50 marcas» no lo responde: lo responde ver
   * siete nombres con su oficio. Esto cae en la pantalla 2, dentro de la banda
   * que ya existía, sin alargar la página.
   *
   * De paso, cada ficha de equipo gana su segundo enlace entrante —antes solo
   * la enlazaba /nosotros— y desde la página con más autoridad del sitio.
   */
  equipo?: boolean;
}) {
  return (
    <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)" }} aria-label="Resultados">
      <span className="hk-grain-layer" aria-hidden />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,5vw,4rem) var(--gutter)" }}>
        {funnel && (
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34, flexWrap: "wrap" }}>
            {FUNNEL.map((s, i) => (
              <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
                <span style={{ font: "var(--fw-medium) var(--fs-lg)/1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: i === FUNNEL.length - 1 ? "var(--cyan)" : "var(--white)" }}>{s}</span>
                {i < FUNNEL.length - 1 && <ArrowRight size={18} style={{ color: "var(--ink-400)" }} aria-hidden />}
              </span>
            ))}
            <span style={{ marginLeft: "auto", font: "var(--fw-light) var(--fs-sm)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)", maxWidth: "34ch" }}>
              Medimos cada etapa del funnel. Reportamos lo que mueve el negocio.
            </span>
          </div>
        )}
        <div
          className="hk-proof-stats reveal reveal-d2"
          style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`, gap: "var(--space-6)", borderTop: funnel ? "1px solid var(--hairline-inverse)" : "none", paddingTop: funnel ? 34 : 0 }}
        >
          {stats.map((s) => (
            <Stat key={s.label} value={<CountUp to={s.value} />} label={s.label} href={s.href} />
          ))}
        </div>

        {equipo && (
          <div className="hk-equipo reveal reveal-d3">
            <p className="hk-equipo-intro">
              <strong>Somos siete personas en Ica.</strong> Estrategia, análisis de mercado, web, diseño,
              audiovisual y producción en el mismo equipo: por eso la campaña y el material de calle
              salen coordinados, sin dos proveedores señalándose.
            </p>
            <ul className="hk-equipo-fila">
              {EQUIPO.map((m) => (
                <li key={m.slug}>
                  <a href={`/equipo/${m.slug}`} className="hk-equipo-p">
                    <span aria-hidden className="hk-equipo-aro">
                      {m.foto ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={m.foto} alt="" width={56} height={56} loading="lazy" decoding="async" />
                      ) : (
                        <span className="hk-equipo-ini">{m.iniciales}</span>
                      )}
                    </span>
                    <span className="hk-equipo-nom">{m.nombre}</span>
                    <span className="hk-equipo-rol">{m.rol}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/nosotros" className="hk-equipo-mas">
              Desde {site.fundacion}, más de 50 marcas y los datos de la agencia <ArrowRight size={15} aria-hidden />
            </a>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hk-proof-stats { grid-template-columns: 1fr 1fr !important; gap: var(--space-5) !important; }
        }
        /* La pista "Ver →" aparece al pasar por encima o al enfocar con
           teclado: en reposo la banda se mantiene limpia. En táctil no hay
           hover, así que ahí se muestra siempre. */
        .hk-stat-cue { opacity: 0; transform: translateY(-4px); transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
        .hk-stat-link:hover .hk-stat-cue,
        .hk-stat-link:focus-visible .hk-stat-cue { opacity: 1; transform: none; }
        @media (hover: none) { .hk-stat-cue { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .hk-stat-cue { transition: none; } }

        /* ── Las siete personas ───────────────────────────────────────────── */
        .hk-equipo {
          margin-top: clamp(2rem, 4vw, 3rem);
          padding-top: clamp(1.75rem, 3vw, 2.5rem);
          border-top: 1px solid var(--hairline-inverse);
        }
        .hk-equipo-intro {
          font: var(--fw-light) var(--fs-md)/1.6 var(--font-body);
          color: var(--text-on-inverse-mut);
          max-width: 62ch;
          margin: 0 0 clamp(1.5rem, 3vw, 2.25rem);
        }
        .hk-equipo-intro strong { font-weight: 600; color: var(--white); }

        .hk-equipo-fila {
          list-style: none; margin: 0; padding: 0;
          display: grid; gap: var(--space-5);
          /* Siete en una fila en escritorio; dos por fila en el móvil. */
          grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
        }
        .hk-equipo-p {
          display: grid; justify-items: center; text-align: center; gap: 10px;
          text-decoration: none; padding: 4px;
        }
        .hk-equipo-aro {
          width: 62px; height: 62px; border-radius: 50%; padding: 2.5px; display: grid;
          background: linear-gradient(135deg, var(--orange), var(--cyan));
          transition: transform var(--dur-base) var(--ease-out);
        }
        .hk-equipo-aro img,
        .hk-equipo-ini {
          width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
          background: var(--black); color: var(--white);
          display: grid; place-items: center;
          font: var(--fw-bold) var(--fs-sm)/1 var(--font-display); letter-spacing: 0.03em;
        }
        .hk-equipo-nom {
          font: var(--fw-medium) var(--fs-sm)/1.25 var(--font-display);
          color: var(--white); letter-spacing: var(--tracking-snug);
        }
        .hk-equipo-rol {
          font: var(--fw-light) var(--fs-xs)/1.35 var(--font-body);
          color: var(--text-on-inverse-mut); max-width: 17ch;
        }
        /* En escritorio las columnas son estrechas y algunos nombres ocupan dos
           líneas: sin esto, los oficios quedan a alturas distintas y la fila se
           ve desalineada. En móvil las celdas son más anchas, todos los nombres
           entran en una línea y reservar la segunda solo dejaría hueco. */
        @media (min-width: 700px) {
          .hk-equipo-nom { min-height: 2.5em; }
        }
        .hk-equipo-p:hover .hk-equipo-aro,
        .hk-equipo-p:focus-visible .hk-equipo-aro { transform: translateY(-3px); }
        .hk-equipo-p:hover .hk-equipo-nom { color: var(--cyan); }

        .hk-equipo-mas {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: clamp(1.75rem, 3vw, 2.25rem);
          font: var(--fw-bold) var(--fs-sm)/1 var(--font-accent);
          color: var(--white); text-decoration: none;
          border-bottom: 1px solid var(--hairline-inverse); padding-bottom: 6px;
        }
        .hk-equipo-mas:hover { color: var(--cyan); border-bottom-color: var(--cyan); }

        @media (prefers-reduced-motion: reduce) {
          .hk-equipo-aro { transition: none; }
          .hk-equipo-p:hover .hk-equipo-aro { transform: none; }
        }
      `}</style>
    </section>
  );
}
