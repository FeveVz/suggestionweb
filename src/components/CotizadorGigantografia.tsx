"use client";

import { useId, useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/**
 * Cotizador de gigantografías: eliges medida, lugar, material, acabado,
 * cantidad y diseño, y se abre WhatsApp con el pedido ya escrito.
 *
 * Nace de los datos del 22-nov-2026 (GA4 + Search Console, 28 días): el
 * artículo de medidas y precios tenía 4,104 apariciones en Google y 15 visitas
 * sin un solo contacto, mientras la página de servicio convertía 3 de cada 5
 * visitas. El paso que faltaba era pasar de «ya sé qué necesito» a pedirlo sin
 * escribir el mensaje desde cero.
 *
 * Sin precios, a propósito: el blog no publica tarifas de Suggestion y el
 * precio sale de la especificación (por m², según material y acabado). Lo único
 * que calcula es el área, que es lo que se cobra. Los avisos repiten lo que ya
 * dicen el artículo y la página de servicio (8 onzas no es para la calle, la
 * tela no es para intemperie, más de 3.20 m de ancho va en partes).
 *
 * El clic lo mide Analytics.tsx como cualquier enlace a wa.me («contact»,
 * con data-cta), y le añade la línea «Ref» con la página de origen.
 */

const LUGARES = ["Exterior, al sol", "Interior o bajo techo", "Feria o evento"];
const MEDIDAS: { label: string; ancho?: number; alto?: number }[] = [
  { label: "1 × 2 m", ancho: 1, alto: 2 },
  { label: "2 × 1 m", ancho: 2, alto: 1 },
  { label: "3 × 1 m", ancho: 3, alto: 1 },
  { label: "1 × 3 m", ancho: 1, alto: 3 },
  { label: "3.20 × 2 m", ancho: 3.2, alto: 2 },
  { label: "Otra medida" },
];
const RECOMIENDEN = "Que me recomienden";
const MATERIALES = [RECOMIENDEN, "Lona 13 oz o frontlit", "Lona 11 oz", "Lona 8 oz", "Vinil adhesivo", "Malla (mesh)", "Tela sublimada"];
const ACABADOS = [RECOMIENDEN, "Ojales", "Bastidor", "Bolsillo para tubo"];
const DISENOS = ["Ya tengo el arte", "Necesito el diseño"];

const ROLLO = 3.2;

const num = (x: number) => (Number.isInteger(x) ? String(x) : x.toFixed(2).replace(/0$/, ""));
const minuscula = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);

function Chips({ nombre, leyenda, opciones, valor, onCambio }: { nombre: string; leyenda: string; opciones: string[]; valor: string; onCambio: (v: string) => void }) {
  return (
    <fieldset className="cz-grupo">
      <legend className="cz-leyenda">{leyenda}</legend>
      <div className="cz-chips">
        {opciones.map((o) => (
          <label key={o} className="cz-chip">
            <input type="radio" name={nombre} value={o} checked={valor === o} onChange={() => onCambio(o)} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function CotizadorGigantografia({ titulo = "Arma tu gigantografía y cotízala por WhatsApp" }: { titulo?: string }) {
  const id = useId().replace(/:/g, "");
  const [lugar, setLugar] = useState("");
  const [medida, setMedida] = useState("");
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [material, setMaterial] = useState(RECOMIENDEN);
  const [acabado, setAcabado] = useState(RECOMIENDEN);
  const [diseno, setDiseno] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const preset = MEDIDAS.find((m) => m.label === medida);
  const otra = medida === "Otra medida";
  const a = otra ? parseFloat(ancho.replace(",", ".")) : preset?.ancho;
  const h = otra ? parseFloat(alto.replace(",", ".")) : preset?.alto;
  const medidaOk = !!a && !!h && a > 0 && h > 0;
  const area = medidaOk ? a! * h! * cantidad : 0;

  const medidaTxt = otra ? (medidaOk ? `${num(a!)} × ${num(h!)} m` : "otra, la paso en el chat") : medida || "por definir";
  const exterior = lugar === "Exterior, al sol";

  const avisos: string[] = [];
  if (exterior && material === "Lona 8 oz") avisos.push("La lona de 8 onzas es para interior: al sol se vence y destiñe pronto. Para la calle, 11 onzas en campaña corta y 13 o frontlit si va a quedarse.");
  if (exterior && material === "Tela sublimada") avisos.push("La tela sublimada da el mejor acabado, pero no es para intemperie.");
  if (exterior && material === "Lona 11 oz") avisos.push("Si va a estar más de tres meses a la intemperie, conviene 13 onzas: el ahorro de bajar a 11 se va en reimprimir.");
  if (medidaOk && Math.min(a!, h!) > ROLLO) avisos.push("Es más grande que el ancho del rollo (3.20 m) en los dos lados: se imprime en partes que se unen.");

  const mensaje = [
    "Hola Suggestion, quiero cotizar una gigantografía.",
    "",
    `Medida: ${medidaTxt}`,
    `Cantidad: ${cantidad}${area ? ` (${num(area)} m² en total)` : ""}`,
    `Dónde va: ${lugar ? minuscula(lugar) : "por definir"}`,
    `Material: ${minuscula(material)}`,
    `Acabado: ${minuscula(acabado)}`,
    `Diseño: ${diseno ? minuscula(diseno) : "por definir"}`,
    "Fecha y lugar de entrega: ",
  ].join("\n");

  const cambiarCantidad = (n: number) => setCantidad(Math.min(999, Math.max(1, Math.round(n) || 1)));

  return (
    <section className="cz" aria-labelledby={`${id}-t`}>
      <span className="cz-kicker">Cotizador</span>
      <h2 id={`${id}-t`} className="cz-titulo">{titulo}</h2>
      <p className="cz-intro">
        Elige lo que ya sepas y se abre WhatsApp con tu pedido escrito. Lo que no sepas, déjalo en «que me recomienden»: te lo decimos al cotizar.
      </p>

      <Chips nombre={`${id}-lugar`} leyenda="¿Dónde va?" opciones={LUGARES} valor={lugar} onCambio={setLugar} />

      <fieldset className="cz-grupo">
        <legend className="cz-leyenda">Medida (ancho × alto)</legend>
        <div className="cz-chips">
          {MEDIDAS.map((m) => (
            <label key={m.label} className="cz-chip">
              <input type="radio" name={`${id}-medida`} value={m.label} checked={medida === m.label} onChange={() => setMedida(m.label)} />
              <span>{m.label}</span>
            </label>
          ))}
        </div>
        {otra && (
          <div className="cz-otra">
            <label>
              <span>Ancho (m)</span>
              <input type="number" inputMode="decimal" min="0.1" max="100" step="0.1" value={ancho} onChange={(e) => setAncho(e.target.value)} placeholder="2.5" />
            </label>
            <span aria-hidden className="cz-por">×</span>
            <label>
              <span>Alto (m)</span>
              <input type="number" inputMode="decimal" min="0.1" max="100" step="0.1" value={alto} onChange={(e) => setAlto(e.target.value)} placeholder="1.2" />
            </label>
          </div>
        )}
      </fieldset>

      <Chips nombre={`${id}-material`} leyenda="Material" opciones={MATERIALES} valor={material} onCambio={setMaterial} />
      <Chips nombre={`${id}-acabado`} leyenda="Acabado" opciones={ACABADOS} valor={acabado} onCambio={setAcabado} />

      <div className="cz-fila">
        <fieldset className="cz-grupo">
          <legend className="cz-leyenda">Cantidad</legend>
          <div className="cz-stepper">
            <button type="button" onClick={() => cambiarCantidad(cantidad - 1)} aria-label="Una menos" disabled={cantidad <= 1}>
              <Minus size={18} aria-hidden />
            </button>
            <input
              type="number"
              inputMode="numeric"
              min="1"
              max="999"
              value={cantidad}
              onChange={(e) => cambiarCantidad(parseInt(e.target.value, 10))}
              aria-label="Cantidad de piezas"
            />
            <button type="button" onClick={() => cambiarCantidad(cantidad + 1)} aria-label="Una más">
              <Plus size={18} aria-hidden />
            </button>
          </div>
        </fieldset>
        <Chips nombre={`${id}-diseno`} leyenda="Diseño" opciones={DISENOS} valor={diseno} onCambio={setDiseno} />
      </div>

      {avisos.length > 0 && (
        <div className="cz-avisos" role="status">
          {avisos.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      )}

      <div className="cz-pie">
        <p className="cz-area" aria-live="polite">
          {area ? (
            <>
              <strong>{num(area)} m²</strong> en total{cantidad > 1 ? ` (${cantidad} piezas de ${num(a! * h!)} m²)` : ""}. Se cobra por metro cuadrado, según material y acabado.
            </>
          ) : (
            <>Se cobra por metro cuadrado, según material y acabado: con la medida te decimos el precio.</>
          )}
        </p>
        <a
          className="hk-btn hk-btn--primary cz-boton"
          href={whatsappLink(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="cotizador de gigantografías"
        >
          Cotiza tu gigantografía <ArrowRight size={18} aria-hidden />
        </a>
        <p className="cz-nota">Se abre WhatsApp con el pedido escrito. Puedes cambiar lo que quieras antes de enviarlo.</p>
      </div>

      <style>{`
        .cz { background: var(--white); border: 1px solid var(--border-subtle); border-top: 3px solid var(--cyan); border-radius: var(--radius-md); padding: clamp(1.25rem, 3.5vw, 2rem); box-shadow: var(--shadow-sm); min-width: 0; }
        .cz-kicker { font: var(--fw-bold) var(--fs-micro)/1 var(--font-accent); text-transform: uppercase; letter-spacing: var(--tracking-label); color: var(--text-muted); }
        .cz-titulo { font: var(--fw-bold) var(--fs-xl)/1.15 var(--font-display); letter-spacing: var(--tracking-snug); color: var(--text-strong); margin: 10px 0 0; max-width: 26ch; }
        .cz-intro { font: var(--fw-light) var(--fs-base)/1.55 var(--font-body); color: var(--text-body); margin: 10px 0 0; max-width: 60ch; }
        .cz-grupo { border: 0; margin: 22px 0 0; padding: 0; min-width: 0; }
        .cz-leyenda { font: var(--fw-bold) var(--fs-micro)/1 var(--font-accent); text-transform: uppercase; letter-spacing: var(--tracking-label); color: var(--text-strong); padding: 0; margin: 0 0 10px; }
        .cz-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .cz-chip { position: relative; display: inline-flex; }
        .cz-chip input { position: absolute; inset: 0; opacity: 0; margin: 0; cursor: pointer; }
        .cz-chip span { display: inline-flex; align-items: center; min-height: 44px; padding: 0 16px; border: 1px solid var(--border-strong); border-radius: 999px; background: var(--white); font: var(--fw-medium) var(--fs-sm)/1.2 var(--font-body); color: var(--text-strong); transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out); }
        .cz-chip input:checked + span { background: var(--black); border-color: var(--black); color: var(--white); }
        .cz-chip input:focus-visible + span { outline: 2px solid var(--cyan); outline-offset: 2px; }
        @media (hover: hover) { .cz-chip input:not(:checked):hover + span { border-color: var(--black); } }
        .cz-otra { display: flex; align-items: flex-end; gap: 10px; margin-top: 12px; }
        .cz-otra label { display: grid; gap: 6px; font: var(--fw-medium) var(--fs-xs)/1 var(--font-body); color: var(--text-muted); }
        .cz-otra input, .cz-stepper input { height: 44px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm, 8px); font: var(--fw-medium) var(--fs-base)/1 var(--font-body); color: var(--text-strong); background: var(--white); text-align: center; }
        .cz-otra input { width: 104px; }
        .cz-otra input:focus-visible, .cz-stepper input:focus-visible { outline: 2px solid var(--cyan); outline-offset: 1px; }
        .cz-por { padding-bottom: 12px; color: var(--text-muted); }
        .cz-fila { display: flex; flex-wrap: wrap; gap: 0 28px; }
        .cz-stepper { display: inline-flex; align-items: center; gap: 6px; }
        .cz-stepper input { width: 72px; -moz-appearance: textfield; }
        .cz-stepper input::-webkit-outer-spin-button, .cz-stepper input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
        .cz-stepper button { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--border-strong); border-radius: 50%; background: var(--white); color: var(--text-strong); cursor: pointer; }
        .cz-stepper button:disabled { opacity: 0.35; cursor: default; }
        .cz-stepper button:focus-visible { outline: 2px solid var(--cyan); outline-offset: 2px; }
        .cz-avisos { margin-top: 20px; border-left: 3px solid var(--orange); background: var(--surface-raised); border-radius: 0 var(--radius-sm, 8px) var(--radius-sm, 8px) 0; padding: 12px 16px; display: grid; gap: 8px; }
        .cz-avisos p { margin: 0; font: var(--fw-light) var(--fs-sm)/1.5 var(--font-body); color: var(--text-strong); }
        .cz-pie { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: grid; gap: 14px; justify-items: start; }
        .cz-area { margin: 0; font: var(--fw-light) var(--fs-sm)/1.5 var(--font-body); color: var(--text-body); max-width: 60ch; }
        .cz-area strong { font-weight: 700; color: var(--text-strong); }
        .cz-boton { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 16px 28px; border-radius: var(--radius-md); background: var(--black); color: var(--white); border: 1px solid var(--black); font: 700 var(--fs-base)/1 var(--font-accent); letter-spacing: var(--tracking-snug); text-decoration: none; white-space: nowrap; }
        .cz-nota { margin: 0; font: var(--fw-light) var(--fs-xs)/1.5 var(--font-body); color: var(--text-muted); }
        @media (max-width: 640px) { .cz-boton { width: 100%; } .cz-pie { justify-items: stretch; } }
      `}</style>
    </section>
  );
}
