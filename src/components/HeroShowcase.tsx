"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Building2, CalendarCheck, Car, Eye, Handshake, MessageCircle } from "lucide-react";
import CountUp from "@/components/CountUp";
import { usePrefersReduced } from "@/components/brand/interactive";

/**
 * Pieza del hero, en dos tarjetas: cómo llega un cliente y qué resultados
 * reales tenemos.
 *
 * ── Por qué se rehízo (octubre de 2026) ────────────────────────────────────
 * La versión anterior era un feed negro de notificaciones titulado "Así se ve
 * tu funnel con nosotros". Tres problemas, señalados por el owner y medidos:
 *
 *   1. Hablaba en jerga: funnel, lead, CPL, Meta Ads. Quien busca una agencia
 *      no tiene por qué saber qué es un CPL, y esto está en la pantalla 1.
 *   2. Sus cifras eran inventadas —"Venta cerrada S/37,000 · lote F-17",
 *      "CPL bajó a S/3.70"— y no decía que fueran un ejemplo. En un sitio cuyo
 *      argumento es "números reales", una cifra de mentira sin etiqueta es lo
 *      último que puede ir arriba del todo.
 *   3. Los tres "gráficos" de casos eran la misma línea decorativa: la curva
 *      de "19 marcas" era idéntica a la de "S/350,000". Parecían datos y no
 *      representaban nada, que para alguien que no domina el tema es peor que
 *      no poner gráfico.
 *
 * Ahora la primera tarjeta cuenta el recorrido de un cliente en frases
 * normales, y dice desde el título que es un ejemplo. La segunda dibuja los
 * números reales de cada caso: el embudo de Ceinys es 350 → 20 → 8 de verdad,
 * con barras proporcionales, y "19 marcas" son 19 íconos.
 */

/* ── 1. El recorrido de un cliente ─────────────────────────────────────────
   El texto se lee siempre entero: la animación solo enciende el ícono de cada
   paso y rellena la línea, para llevar la vista de arriba abajo. Apagar el
   texto mientras "no le toca" haría la tarjeta más bonita y menos legible. */
const PASOS = [
  { Icon: Eye, titulo: "Ve tu anuncio", detalle: "en Facebook o Instagram, desde su celular" },
  { Icon: MessageCircle, titulo: "Te escribe por WhatsApp", burbuja: "Hola, ¿me dan más información? 🙂" },
  { Icon: CalendarCheck, titulo: "Agenda una visita", detalle: "a tu tienda, oficina o sala de ventas" },
  { Icon: Handshake, titulo: "Te compra", detalle: "y sabes qué anuncio lo trajo hasta ti" },
] as const;

/* ── 2. Resultados reales ──────────────────────────────────────────────────
   Las cifras son las publicadas en cada caso, con su etiqueta en palabras de
   la calle. Las barras son proporcionales al número: si 8 de 350 se ve
   diminuto, es porque lo es, y eso es justo lo que el gráfico tiene que
   enseñar. */
type Caso = {
  kicker: string;
  big: string;
  bigLocale?: string;
  bigUnidad: string;
  sub: string;
  barras?: { valor: number; etiqueta: string; resultado?: boolean }[];
  unidades?: { n: number; pie: string; Icono: typeof Car };
  href: string;
  enlace: string;
};

/* Orden: cada caso va seguido de la experiencia de su rubro. Ceinys y luego
   las 24 marcas inmobiliarias; Autoniza y luego las 19 marcas de vehículos.
   Así el número grande nunca va solo: viene detrás de un caso que lo prueba.
   El "Caso" o "Experiencia" de cada etiqueta distingue un resultado medido de
   un conteo, porque no son lo mismo. */
const CASOS: Caso[] = [
  {
    kicker: "Caso · Inmobiliaria Ceinys",
    big: "S/350,000",
    bigLocale: "es-ES",
    bigUnidad: "en ventas",
    sub: "con S/3,000 invertidos en anuncios de Facebook e Instagram.",
    barras: [
      { valor: 350, etiqueta: "personas pidieron información" },
      { valor: 20, etiqueta: "visitaron la sala de ventas" },
      { valor: 8, etiqueta: "compraron un lote", resultado: true },
    ],
    href: "/casos/inmobiliaria-ceinys",
    enlace: "Ver cómo se hizo",
  },
  {
    // Dato del owner (2026-10-15). La frase no describe cómo se reparten las
    // 24 —lotes, casas, preventa— porque eso no lo sabemos; solo dice lo que
    // él dijo y lo ata al caso que se acaba de ver.
    kicker: "Experiencia · Inmobiliario",
    big: "24",
    bigUnidad: "marcas inmobiliarias",
    sub: "para las que hemos trabajado. Ceinys, el caso anterior, es una de ellas.",
    unidades: { n: 24, pie: "Cada ícono es una marca inmobiliaria distinta.", Icono: Building2 },
    href: "/marketing-inmobiliario",
    enlace: "Ver marketing inmobiliario",
  },
  {
    kicker: "Caso · Autoniza",
    big: "8",
    bigUnidad: "autos vendidos",
    sub: "en dos eventos de venta, los dos con autos vendidos el mismo día.",
    barras: [
      { valor: 3, etiqueta: "autos · evento del 22 de mayo", resultado: true },
      { valor: 5, etiqueta: "autos · evento del 25 de junio", resultado: true },
    ],
    href: "/casos/autoniza-eventos",
    enlace: "Ver cómo se hizo",
  },
  {
    kicker: "Experiencia · Autos",
    big: "19",
    bigUnidad: "marcas de vehículos",
    sub: "autos, camionetas, camiones y maquinaria pesada, con tres concesionarios de la región.",
    unidades: { n: 19, pie: "Cada ícono es una marca de vehículos distinta.", Icono: Car },
    href: "/marketing-automotriz",
    enlace: "Ver marketing automotriz",
  },
];

/** Tiempo por caso. Es largo a propósito: hay que leer la frase y el gráfico. */
const ROTACION_MS = 9000;

export default function HeroShowcase() {
  const reduce = usePrefersReduced();
  const [ci, setCi] = useState(0);
  const [pausa, setPausa] = useState(false);
  // Cuenta los toques en los puntos. Tocar el punto del caso que ya está en
  // pantalla no cambia `ci`, y sin esto el temporizador seguía corriendo: el
  // caso se iba aunque la persona acabara de pedir quedarse en él.
  const [toques, setToques] = useState(0);
  const elegir = (i: number) => {
    setCi(i);
    setToques((t) => t + 1);
  };

  // Un temporizador por caso, no un intervalo fijo: depende de `ci`, así que
  // cada cambio —también el que hace la persona al tocar un punto— vuelve a
  // dar los nueve segundos enteros. Con setInterval, el caso que alguien
  // acababa de elegir podía irse un segundo después.
  useEffect(() => {
    if (reduce || pausa) return;
    const id = setTimeout(() => setCi((c) => (c + 1) % CASOS.length), ROTACION_MS);
    return () => clearTimeout(id);
  }, [reduce, pausa, ci, toques]);

  return (
    <div className="hs" style={{ width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: 14 }}>
      {/* ── Tarjeta 1: el recorrido ─────────────────────────────────────── */}
      <section className="hs-card hs-viaje" aria-labelledby="hs-viaje-t">
        <p id="hs-viaje-t" className="hs-kicker">
          <span className="hs-chip">Ejemplo</span> Así te llega un cliente
        </p>
        <ol className="hs-pasos">
          {PASOS.map((p, i) => (
            <li key={p.titulo} className={`hs-paso hs-p${i + 1}`}>
              <span className="hs-ico" aria-hidden>
                <p.Icon size={17} strokeWidth={2.2} />
              </span>
              <span className="hs-txt">
                <strong>{p.titulo}</strong>
                {"burbuja" in p ? (
                  <span className="hs-burbuja">{p.burbuja}</span>
                ) : (
                  <span className="hs-det">{p.detalle}</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Tarjeta 2: resultados reales ────────────────────────────────── */}
      <section
        className="hs-card hs-casos"
        aria-roledescription="carrusel"
        aria-labelledby="hs-casos-t"
        onMouseEnter={() => setPausa(true)}
        onMouseLeave={() => setPausa(false)}
        onFocus={() => setPausa(true)}
        onBlur={() => setPausa(false)}
      >
        {/* Título de la tarjeta, pedido por el owner: sin él, los números se
            leían sueltos y no quedaba claro de quién eran. El sello "Real"
            contesta al "Ejemplo" de la tarjeta de arriba: una es ilustrativa,
            la otra es trabajo hecho para clientes de verdad. */}
        <p id="hs-casos-t" className="hs-kicker hs-cab">
          <span className="hs-chip hs-chip-real">Real</span> Resultados de clientes de Suggestion
        </p>
        {/* Los tres casos ocupan la misma celda de la rejilla: la tarjeta toma
            la altura del más alto y no salta al rotar, que en el móvil movía
            todo lo de abajo cada nueve segundos. */}
        <div className="hs-pila">
          {CASOS.map((c, i) => {
            const activo = i === ci;
            const max = c.barras ? Math.max(...c.barras.map((b) => b.valor)) : 1;
            // JSX solo acepta como etiqueta un nombre que empiece en mayúscula.
            const Icono = c.unidades?.Icono;
            return (
              <div key={c.kicker} className={`hs-slide${activo ? " is-on" : ""}`} aria-hidden={!activo}>
                <span className="hs-cual">{c.kicker}</span>
                <p className="hs-big">
                  {/* La clave cambia al activarse: así el número vuelve a
                      contar cada vez que el caso entra, no solo la primera. */}
                  <CountUp key={activo ? `on${ci}` : "off"} to={c.big} locale={c.bigLocale} />{" "}
                  <span className="hs-big-u">{c.bigUnidad}</span>
                </p>
                <p className="hs-sub">{c.sub}</p>

                {c.barras && (
                  <ul className="hs-barras">
                    {c.barras.map((b) => (
                      <li key={b.etiqueta} className={b.resultado ? "is-res" : undefined}>
                        <span className="hs-b-txt">
                          <strong>{b.valor}</strong> {b.etiqueta}
                        </span>
                        <span className="hs-b-pista" aria-hidden>
                          <span className="hs-b-barra" style={{ width: `${Math.max(3, (b.valor / max) * 100)}%` }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {c.unidades && (
                  <div className="hs-unidades">
                    <span className="hs-u-grid" aria-hidden>
                      {Array.from({ length: c.unidades.n }, (_, k) => (
                        <span key={k} className="hs-u" style={{ transitionDelay: `${k * 30}ms` }}>
                          {Icono && <Icono size={15} strokeWidth={2} />}
                        </span>
                      ))}
                    </span>
                    <span className="hs-u-pie">{c.unidades.pie}</span>
                  </div>
                )}

                <a href={c.href} className="hs-enlace" tabIndex={activo ? 0 : -1}>
                  {c.enlace} <ArrowRight size={14} aria-hidden />
                </a>
              </div>
            );
          })}
        </div>

        {/* El punto se ve de 8 px, pero el botón mide 24×24: es el área táctil
            mínima que pide WCAG 2.2 y era el único fallo que Lighthouse
            encontraba en la home. */}
        <div className="hs-puntos">
          {CASOS.map((c, i) => (
            <button key={c.kicker} type="button" onClick={() => elegir(i)} aria-label={`Ver: ${c.kicker}`} aria-current={i === ci}>
              <span aria-hidden className={i === ci ? "is-on" : undefined} />
            </button>
          ))}
        </div>
      </section>

      <style>{`
        .hs-card {
          background: var(--white);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          padding: 16px 18px;
        }
        .hs-kicker {
          display: flex; align-items: center; gap: 8px; margin: 0;
          font: var(--fw-bold) var(--fs-micro)/1.3 var(--font-accent);
          text-transform: uppercase; letter-spacing: var(--tracking-label);
          color: var(--text-muted);
        }
        .hs-chip {
          display: inline-block; padding: 3px 8px; border-radius: 999px;
          background: var(--surface-raised); border: 1px solid var(--border-subtle);
          color: var(--text-strong); letter-spacing: 0.04em;
        }
        /* "Real" en cian y "Ejemplo" en gris: la diferencia tiene que verse
           antes de leerla. El texto va en --cyan-text, no en el cian de marca,
           que sobre blanco no llega al contraste mínimo para letra pequeña. */
        .hs-chip-real { background: rgba(0,191,255,0.12); border-color: rgba(0,191,255,0.4); color: var(--cyan-text); }
        .hs-cab { padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid var(--hairline); }
        /* Qué caso es: debajo del título de la tarjeta, en minúscula y oscuro,
           para que no compita con él como si fueran dos títulos iguales. */
        .hs-cual { display: block; font: var(--fw-bold) var(--fs-xs)/1.3 var(--font-body); color: var(--text-strong); }

        /* ── Recorrido ───────────────────────────────────────────────────── */
        .hs-viaje { --hs-loop: 9s; }
        .hs-pasos { list-style: none; margin: 14px 0 0; padding: 0; position: relative; display: grid; gap: 12px; }
        /* La línea que une los cuatro íconos, y su relleno animado. */
        .hs-pasos::before, .hs-pasos::after {
          content: ""; position: absolute; left: 17px; top: 18px; bottom: 18px; width: 2px; border-radius: 2px;
        }
        .hs-pasos::before { background: var(--border-subtle); }
        .hs-pasos::after {
          background: var(--cyan); transform-origin: top; transform: scaleY(0);
          animation: hs-linea var(--hs-loop) linear infinite;
        }
        .hs-paso { position: relative; z-index: 1; display: flex; gap: 12px; align-items: flex-start; }
        .hs-ico {
          width: 36px; height: 36px; flex-shrink: 0; border-radius: 50%;
          display: grid; place-items: center;
          background: var(--surface-raised); color: var(--text-muted);
          border: 1.5px solid var(--border-subtle);
        }
        .hs-txt { display: grid; gap: 3px; padding-top: 1px; min-width: 0; }
        .hs-txt strong { font: var(--fw-medium) var(--fs-sm)/1.3 var(--font-display); color: var(--text-strong); }
        .hs-det { font: var(--fw-light) var(--fs-xs)/1.4 var(--font-body); color: var(--text-body); }
        .hs-burbuja {
          justify-self: start; margin-top: 3px;
          padding: 7px 11px; border-radius: 4px 14px 14px 14px;
          background: #dcf8c6; color: #1f2c1a;
          font: var(--fw-light) var(--fs-xs)/1.35 var(--font-body);
          box-shadow: 0 1px 1px rgba(0,0,0,0.08);
        }

        /* Cada paso se enciende cuando la línea llega: 0 / 25 / 50 / 75 %. */
        .hs-p1 .hs-ico { animation: hs-p1 var(--hs-loop) ease-out infinite; }
        .hs-p2 .hs-ico { animation: hs-p2 var(--hs-loop) ease-out infinite; }
        .hs-p3 .hs-ico { animation: hs-p3 var(--hs-loop) ease-out infinite; }
        .hs-p4 .hs-ico { animation: hs-p4 var(--hs-loop) ease-out infinite; }
        .hs-p2 .hs-burbuja { animation: hs-burbuja var(--hs-loop) ease-out infinite; transform-origin: left top; }

        @keyframes hs-linea { 0% { transform: scaleY(0); } 75% { transform: scaleY(1); } 92% { transform: scaleY(1); opacity: 1; } 100% { transform: scaleY(1); opacity: 0; } }
        @keyframes hs-p1 { 0%, 92% { background: var(--cyan); border-color: var(--cyan); color: #04121a; } 100% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); } }
        @keyframes hs-p2 { 0%, 23% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); } 27%, 92% { background: #25d366; border-color: #25d366; color: #fff; } 100% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); } }
        @keyframes hs-p3 { 0%, 48% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); } 52%, 92% { background: var(--orange); border-color: var(--orange); color: #1a0d00; } 100% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); } }
        @keyframes hs-p4 { 0%, 73% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); transform: scale(1); } 77% { background: var(--cyan); border-color: var(--cyan); color: #04121a; transform: scale(1.12); } 81%, 92% { background: var(--cyan); border-color: var(--cyan); color: #04121a; transform: scale(1); } 100% { background: var(--surface-raised); border-color: var(--border-subtle); color: var(--text-muted); transform: scale(1); } }
        @keyframes hs-burbuja { 0%, 24% { transform: scale(0.9); opacity: 0.55; } 29%, 100% { transform: scale(1); opacity: 1; } }

        /* ── Resultados ──────────────────────────────────────────────────── */
        .hs-casos { padding-bottom: 8px; }
        .hs-pila { display: grid; }
        /* Primero se va el caso que sale y después entra el siguiente. Si se
           cruzan, durante medio segundo hay dos textos uno encima del otro en
           la misma celda, y eso se lee como un error. */
        .hs-slide {
          grid-area: 1 / 1; min-width: 0;
          opacity: 0; visibility: hidden;
          transition: opacity 0.25s var(--ease-out), visibility 0s linear 0.25s;
        }
        .hs-slide.is-on { opacity: 1; visibility: visible; transition: opacity 0.35s var(--ease-out) 0.25s, visibility 0s linear 0.25s; }
        .hs-big { margin: 8px 0 0; font: var(--fw-bold) var(--fs-2xl)/1.05 var(--font-display); letter-spacing: var(--tracking-tight); color: var(--text-strong); }
        .hs-big-u { font: var(--fw-medium) var(--fs-md)/1 var(--font-display); letter-spacing: var(--tracking-snug); color: var(--text-strong); }
        .hs-sub { margin: 6px 0 0; font: var(--fw-light) var(--fs-sm)/1.45 var(--font-body); color: var(--text-body); max-width: 44ch; }

        .hs-barras { list-style: none; margin: 14px 0 0; padding: 12px 0 0; border-top: 1px solid var(--hairline); display: grid; gap: 10px; }
        .hs-barras li { display: grid; gap: 5px; }
        .hs-b-txt { font: var(--fw-light) var(--fs-xs)/1.35 var(--font-body); color: var(--text-body); }
        .hs-b-txt strong { font: var(--fw-bold) var(--fs-md)/1 var(--font-display); color: var(--text-strong); margin-right: 2px; }
        .is-res .hs-b-txt strong { color: var(--cyan-text); }
        .hs-b-pista { display: block; height: 8px; border-radius: 999px; background: var(--surface-raised); overflow: hidden; }
        .hs-b-barra {
          display: block; height: 100%; border-radius: 999px; background: var(--text-strong);
          transform-origin: left; transform: scaleX(0);
          transition: transform 0.8s var(--ease-out) 0.15s;
        }
        .is-res .hs-b-barra { background: var(--cyan); }
        .is-on .hs-b-barra { transform: scaleX(1); }

        .hs-unidades { margin: 14px 0 0; padding: 12px 0 0; border-top: 1px solid var(--hairline); display: grid; gap: 8px; }
        .hs-u-grid { display: flex; flex-wrap: wrap; gap: 6px; }
        .hs-u {
          width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center;
          background: var(--surface-raised); color: var(--cyan-text-sm); border: 1px solid var(--border-subtle);
          opacity: 0; transform: translateY(4px);
          transition: opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out);
        }
        .is-on .hs-u { opacity: 1; transform: none; }
        .hs-u-pie { font: var(--fw-light) var(--fs-xs)/1.4 var(--font-body); color: var(--text-muted); }

        .hs-enlace {
          display: inline-flex; align-items: center; gap: 6px; margin-top: 12px;
          font: var(--fw-bold) var(--fs-xs)/1 var(--font-accent); color: var(--text-strong);
          text-decoration: underline; text-decoration-color: var(--border-subtle); text-underline-offset: 3px;
          padding-block: 6px;
        }
        .hs-enlace:hover, .hs-enlace:focus-visible { color: var(--cyan-text); text-decoration-color: var(--cyan); }

        .hs-puntos { display: flex; justify-content: center; margin-top: 2px; }
        .hs-puntos button { width: 24px; height: 24px; border: none; padding: 0; background: none; cursor: pointer; display: grid; place-items: center; }
        .hs-puntos button span { width: 8px; height: 8px; border-radius: 50%; background: var(--ink-200); transition: background var(--dur-base), transform var(--dur-base); }
        .hs-puntos button span.is-on { background: var(--cyan); transform: scale(1.15); }

        /* Sin movimiento: todo encendido y quieto, las barras ya dibujadas. */
        @media (prefers-reduced-motion: reduce) {
          .hs-pasos::after { animation: none; transform: scaleY(1); }
          .hs-p1 .hs-ico, .hs-p4 .hs-ico { animation: none; background: var(--cyan); border-color: var(--cyan); color: #04121a; }
          .hs-p2 .hs-ico { animation: none; background: #25d366; border-color: #25d366; color: #fff; }
          .hs-p3 .hs-ico { animation: none; background: var(--orange); border-color: var(--orange); color: #1a0d00; }
          .hs-p2 .hs-burbuja { animation: none; }
          .hs-slide, .hs-b-barra, .hs-u { transition: none; }
        }
      `}</style>
    </div>
  );
}
