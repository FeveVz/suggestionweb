import { ArrowRight } from "lucide-react";
import { Btn, Label } from "@/components/brand/parts";
import CountUp from "@/components/CountUp";

/**
 * Muro de trabajos: columnas de miniaturas de piezas REALES flotando en
 * direcciones alternas (loop infinito, contenido duplicado). Texto + métrica
 * a la izquierda, muro a la derecha. Server Component (animación CSS pura).
 * Pausa al hover; con prefers-reduced-motion queda estático; móvil: 2 columnas.
 */

const W = (n: number) => `/assets/wall/wall-${n}.webp`;

// 4 columnas balanceadas por alturas (se duplican en DOM para el loop)
const COLS: string[][] = [
  [W(1), W(9), W(6), W(13)],
  [W(5), W(10), W(2)],
  [W(3), W(11), W(4), W(8)],
  [W(12), W(7), W(14), W(1)],
];

const DUR = [44, 56, 48, 62]; // s — velocidades distintas = movimiento orgánico

export default function WorkWall() {
  return (
    <section className="hk-grain" style={{ background: "var(--black)", color: "var(--white)", position: "relative", overflow: "hidden" }} aria-label="Trabajos para más de 50 marcas">
      <span className="hk-grain-layer" aria-hidden />
      <div className="hk-wall-grid" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)", gap: "clamp(2rem,5vw,4.5rem)", alignItems: "center" }}>
        {/* Texto + métrica */}
        <div>
          <Label tone="onDark" dot>Prueba de trabajo</Label>
          <div style={{ font: "var(--fw-bold) clamp(4rem, 9vw, 7rem)/0.9 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--cyan)", margin: "22px 0 0" }}>
            <CountUp to="+50" />
          </div>
          <h2 style={{ font: "var(--fw-bold) var(--fs-2xl)/1.1 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)", margin: "14px 0 0", maxWidth: "16ch" }}>
            marcas confiaron. Esto es lo que hicimos.
          </h2>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-on-inverse-mut)", margin: "18px 0 0", maxWidth: "40ch" }}>
            Campañas, proyectos, activaciones y rodajes reales — de Ica para todo el Perú. Sin banco de imágenes: todo lo que ves aquí lo hicimos nosotros.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
            <Btn as="a" href="/casos" variant="onDark" size="lg">
              Ver los casos <ArrowRight size={18} />
            </Btn>
          </div>
        </div>

        {/* Muro flotante */}
        <div className="hk-wall" aria-hidden>
          {COLS.map((col, i) => (
            <div key={i} className="hk-wall-col" style={{ animationDuration: `${DUR[i]}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
              {[...col, ...col].map((src, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={j} src={src} alt="" loading="lazy" decoding="async" />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hk-wall { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; height: 560px; overflow: hidden;
          mask-image: linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent);
          -webkit-mask-image: linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent); }
        .hk-wall-col { display: flex; flex-direction: column; gap: 14px; animation-name: hk-wall-scroll; animation-timing-function: linear; animation-iteration-count: infinite; will-change: transform; }
        .hk-wall-col img { width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid var(--border-on-inverse); display: block; }
        @keyframes hk-wall-scroll { from { transform: translateY(0); } to { transform: translateY(calc(-50% - 7px)); } }
        section:hover .hk-wall-col { animation-play-state: paused; }
        @media (max-width: 920px) {
          .hk-wall-grid { grid-template-columns: 1fr !important; }
          .hk-wall { height: 400px; grid-template-columns: repeat(2, 1fr); }
          .hk-wall-col:nth-child(n+3) { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hk-wall-col { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
