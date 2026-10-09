"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";

export type BarraDato = {
  /** Qué mide esta barra. Va a la izquierda, con el tamaño de una etiqueta. */
  etiqueta: string;
  /** El número que dibuja la barra. Solo para el ancho. */
  valor: number;
  /** La cifra tal como se lee, con su unidad. Es texto real, no una imagen. */
  texto: string;
  /** Segunda cifra, a la derecha: el coste, el porcentaje, lo que matice. */
  nota?: string;
  /** La barra del argumento. Se pinta en cian; el resto en negro. */
  destacada?: boolean;
};

/**
 * Gráfico de barras horizontales.
 *
 * ── Por qué no hay librería de gráficos ───────────────────────────────────
 * Son tres gráficos de tres y cuatro barras. La librería más ligera del
 * mercado pesa más que todo el JavaScript que hoy carga una página de caso,
 * y no dibujaría nada que no haga un div con un ancho en porcentaje.
 *
 * ── Por qué el texto no está dentro del dibujo ────────────────────────────
 * La etiqueta y las cifras son texto normal del documento: se leen con un
 * lector de pantalla, se copian, se traducen y las indexa Google. La barra
 * es `aria-hidden` porque no añade nada que no diga ya el número que tiene
 * al lado. Así no hace falta duplicar los datos en una tabla oculta.
 *
 * ── Qué pasa sin JavaScript ───────────────────────────────────────────────
 * El render del servidor ya trae las barras a su ancho final. La animación
 * solo las encoge y las vuelve a soltar cuando entran en pantalla, igual que
 * hace CountUp con los números. Si el bundle no carga, el gráfico se ve
 * completo y quieto, que es el estado correcto.
 */
export default function Grafico({
  titulo,
  datos,
  pie,
  unidad,
}: {
  titulo?: string;
  datos: BarraDato[];
  /** Pie del gráfico: la fuente del dato o el matiz que lo hace legible. */
  pie?: string;
  /** Qué cuentan las barras. Se escribe tras la cifra: "18 lotes". */
  unidad?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animar, setAnimar] = useState(false);
  const lanzado = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Encoge antes de pintar y suelta al entrar en pantalla.
    setAnimar(true);

    const soltar = () => {
      if (lanzado.current) return;
      lanzado.current = true;
      el.dataset.visible = "";
    };

    // Red de seguridad, la misma que CountUp. Si el observador no llega a
    // dispararse —pasó de verdad en un navegador con el panel oculto: sin
    // composición, IntersectionObserver no reporta nada— las barras se
    // quedarían en cero para siempre, que es mucho peor que no animar.
    const red = setTimeout(soltar, 3000);

    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas[0].isIntersecting) return;
        soltar();
        io.disconnect();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      clearTimeout(red);
      io.disconnect();
    };
  }, []);

  const maximo = Math.max(...datos.map((d) => d.valor), 1);

  return (
    <figure className="hk-g" style={{ margin: "26px 0 0" }}>
      {titulo && <figcaption className="hk-g-titulo">{titulo}</figcaption>}
      <div ref={ref} className={`hk-g-barras${animar ? " hk-g-anim" : ""}`}>
        {datos.map((d, i) => (
          <div key={d.etiqueta} className={`hk-g-fila${d.destacada ? " hk-g-dest" : ""}`}>
            <p className="hk-g-et">{d.etiqueta}</p>
            <div className="hk-g-pista">
              <span
                aria-hidden
                className="hk-g-barra"
                style={{ width: `${Math.max(4, (d.valor / maximo) * 100)}%`, transitionDelay: `${i * 110}ms` }}
              />
            </div>
            <p className="hk-g-val">
              <CountUp to={d.texto} />
              {unidad && <span className="hk-g-uni"> {unidad}</span>}
            </p>
            {d.nota && <p className="hk-g-nota">{d.nota}</p>}
          </div>
        ))}
      </div>
      {pie && <p className="hk-g-pie">{pie}</p>}

      <style>{`
        .hk-g-titulo {
          font: var(--fw-bold) var(--fs-micro)/1.3 var(--font-accent);
          text-transform: uppercase; letter-spacing: var(--tracking-label);
          color: var(--text-muted); margin-bottom: 18px;
        }
        .hk-g-barras { display: grid; gap: 18px; }
        .hk-g-fila {
          display: grid; align-items: center; gap: 4px 16px;
          grid-template-columns: minmax(0, 1fr);
        }
        .hk-g-et {
          font: var(--fw-light) var(--fs-xs)/1.4 var(--font-body);
          color: var(--text-muted); margin: 0; max-width: 46ch;
        }
        .hk-g-pista {
          height: 12px; border-radius: 999px; background: var(--surface-raised);
          border: 1px solid var(--border-subtle); overflow: hidden;
        }
        .hk-g-barra {
          display: block; height: 100%; border-radius: 999px;
          background: var(--text-strong); transform-origin: left center;
        }
        .hk-g-dest .hk-g-barra { background: var(--cyan); }
        .hk-g-val {
          font: var(--fw-bold) var(--fs-2xl)/1 var(--font-display);
          letter-spacing: var(--tracking-tight); color: var(--text-strong); margin: 0;
        }
        .hk-g-uni { font: var(--fw-light) var(--fs-sm)/1 var(--font-body); color: var(--text-muted); }
        .hk-g-dest .hk-g-val { color: var(--cyan-text); }
        .hk-g-dest .hk-g-uni { color: var(--cyan-text); }
        .hk-g-nota {
          font: var(--fw-light) var(--fs-xs)/1.4 var(--font-body);
          color: var(--text-muted); margin: 0;
        }
        .hk-g-pie {
          font: var(--fw-light) var(--fs-xs)/1.5 var(--font-body);
          color: var(--text-muted); margin: 20px 0 0; max-width: 62ch;
        }

        /* La animación solo existe cuando el componente la enciende: sin JS,
           las barras ya vienen del servidor con su ancho final. */
        .hk-g-anim .hk-g-barra { transform: scaleX(0); transition: transform 760ms var(--ease-out); }
        .hk-g-anim[data-visible] .hk-g-barra { transform: scaleX(1); }

        @media (min-width: 700px) {
          .hk-g-fila {
            grid-template-columns: minmax(0, 15rem) minmax(0, 1fr) auto;
            grid-template-areas: "et pista val" "et nota nota";
            row-gap: 6px;
          }
          .hk-g-et { grid-area: et; }
          .hk-g-pista { grid-area: pista; }
          .hk-g-val { grid-area: val; text-align: right; min-width: 5ch; }
          .hk-g-nota { grid-area: nota; text-align: right; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hk-g-anim .hk-g-barra { transform: none; transition: none; }
        }
      `}</style>
    </figure>
  );
}
