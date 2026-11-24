"use client";

import { createPortal } from "react-dom";
import { site } from "@/lib/site";
import { DEF_QUEJA, DEF_RECLAMO, LEYENDA_INDECOPI, LEYENDA_PLAZO } from "@/lib/reclamos";

/**
 * Constancia imprimible de la Hoja de Reclamación (24-nov-2026).
 *
 * Antes, «Imprimir o guardar en PDF» imprimía la página entera: la cabecera
 * fija se montaba sobre el texto, salían el pie, el botón de WhatsApp y el
 * enlace «Saltar al contenido», la tarjeta se partía entre hojas y la hoja en
 * sí no estaba, solo el aviso de que quedó registrada.
 *
 * Ahora se imprime solo esto: una hoja A4 con los mismos apartados que la
 * Hoja de Reclamación oficial (DS 011-2011-PCM): proveedor, consumidor, bien
 * contratado, detalle y pedido, y acciones del proveedor. En pantalla no se
 * ve. Va en un portal directo en <body> para que la regla de impresión pueda
 * ocultar todo lo demás sin dejar páginas en blanco.
 *
 * @page sin márgenes quita la fecha y la URL que Chrome agrega arriba y abajo;
 * el margen lo ponen la cabecera y el pie de la tabla, que se repiten en cada
 * hoja si el detalle es largo.
 */

export type DatosReclamo = {
  nombre: string;
  documento: string;
  direccion: string;
  telefono: string;
  email: string;
  menor: boolean;
  apoderado: string;
  apoderadoDoc: string;
  tipoBien: string;
  bien: string;
  monto: string;
  clase: string;
  detalle: string;
  pedido: string;
};

type Props = {
  datos: DatosReclamo;
  /** Número correlativo oficial (000001-2026). Sin él, la hoja salió por correo. */
  numero?: string;
  /** Referencia del envío por correo, cuando no hubo registro. */
  referencia?: string;
  /** Fecha y hora de Lima, dd/mm/aaaa hh:mm. */
  fecha: string;
  limite?: string;
};

/** Pone un nombre útil al PDF (Chrome usa el título de la página) y abre la impresión. */
export function imprimirConstancia(nombre: string) {
  const antes = document.title;
  document.title = nombre;
  window.addEventListener("afterprint", () => { document.title = antes; }, { once: true });
  window.print();
}

function Campo({ l, v, ancho }: { l: string; v?: string; ancho?: boolean }) {
  return (
    <div className={ancho ? "hk-c-campo hk-c-ancho" : "hk-c-campo"}>
      <div className="hk-c-l">{l}</div>
      <div className="hk-c-v">{v || "—"}</div>
    </div>
  );
}

function Seccion({ n, titulo, children, partible }: { n: number; titulo: string; children: React.ReactNode; partible?: boolean }) {
  return (
    <section className={partible ? "hk-c-seccion hk-c-partible" : "hk-c-seccion"}>
      <h2 className="hk-c-h2"><span className="hk-c-n">{n}</span>{titulo}</h2>
      {children}
    </section>
  );
}

function Casilla({ marcada, titulo, texto }: { marcada: boolean; titulo: string; texto: string }) {
  return (
    <div className="hk-c-casilla">
      <span className={marcada ? "hk-c-box hk-c-box-on" : "hk-c-box"} aria-hidden="true">{marcada ? "✓" : ""}</span>
      <div>
        <div className="hk-c-v" style={{ fontWeight: 600 }}>{titulo}</div>
        <div className="hk-c-nota">{texto.replace(/^[^:]+:\s*/, "")}</div>
      </div>
    </div>
  );
}

export default function ConstanciaReclamo({ datos: d, numero, referencia, fecha, limite }: Props) {
  if (typeof document === "undefined") return null;
  const identificador = numero ? `N.º ${numero}` : `Ref. ${referencia}`;

  return createPortal(
    <div className="hk-constancia" aria-hidden="true">
      <table className="hk-c-marco">
        <thead>
          <tr><td><div className="hk-c-margen" /></td></tr>
        </thead>
        <tfoot>
          <tr>
            <td>
              <div className="hk-c-pie">
                <span>{site.legalName} · RUC {site.ruc} · Ica, Perú · suggestion.pe · {site.email}</span>
                <span>Hoja de reclamación {identificador}</span>
              </div>
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>
              <header className="hk-c-cabecera">
                {/* eslint-disable-next-line @next/next/no-img-element -- solo para imprimir */}
                <img src="/assets/logos/suggestion-logo-black.webp" alt="Suggestion" width={800} height={135} className="hk-c-logo" />
                <div className="hk-c-titulo">
                  <div className="hk-c-etiqueta">Libro de Reclamaciones virtual</div>
                  <h1 className="hk-c-h1">Hoja de reclamación</h1>
                  <div className="hk-c-numero">{identificador}</div>
                  <div className="hk-c-nota">{fecha} (hora de Lima)</div>
                </div>
              </header>

              <div className="hk-c-proveedor">
                <Campo l="Proveedor" v={site.legalName} />
                <Campo l="RUC" v={site.ruc} />
                <Campo l="Domicilio" v="Ica, Perú" />
                <Campo l="Contacto" v={`${site.email} · suggestion.pe`} />
              </div>

              <Seccion n={1} titulo="Identificación del consumidor reclamante">
                <div className="hk-c-grid">
                  <Campo l="Nombre completo" v={d.nombre} />
                  <Campo l="DNI / CE" v={d.documento} />
                  <Campo l="Teléfono" v={d.telefono} />
                  <Campo l="Correo electrónico" v={d.email} />
                  <Campo l="Domicilio" v={d.direccion} ancho />
                  {d.menor && (
                    <>
                      <Campo l="Padre, madre o apoderado (menor de edad)" v={d.apoderado} />
                      <Campo l="DNI / CE del apoderado" v={d.apoderadoDoc} />
                    </>
                  )}
                </div>
              </Seccion>

              <Seccion n={2} titulo="Identificación del bien contratado">
                <div className="hk-c-grid hk-c-grid-bien">
                  <Campo l="Tipo" v={d.tipoBien} />
                  <Campo l="Monto reclamado" v={d.monto} />
                  <Campo l="Descripción" v={d.bien} />
                </div>
              </Seccion>

              <Seccion n={3} titulo="Detalle de la reclamación y pedido del consumidor" partible>
                <div className="hk-c-casillas">
                  <Casilla marcada={d.clase !== "Queja"} titulo="Reclamo" texto={DEF_RECLAMO} />
                  <Casilla marcada={d.clase === "Queja"} titulo="Queja" texto={DEF_QUEJA} />
                </div>
                <div className="hk-c-l hk-c-rotulo" style={{ marginTop: "3.5mm" }}>Detalle</div>
                <div className="hk-c-texto">{d.detalle}</div>
                <div className="hk-c-l hk-c-rotulo" style={{ marginTop: "3mm" }}>Pedido</div>
                <div className="hk-c-texto">{d.pedido}</div>
              </Seccion>

              <Seccion n={4} titulo="Observaciones y acciones adoptadas por el proveedor">
                <div className="hk-c-texto">
                  {numero
                    ? `Hoja registrada. Responderemos al correo ${d.email}${limite ? ` a más tardar el ${limite}` : " en un plazo máximo de 15 días hábiles"}.`
                    : `La hoja se registra cuando recibimos tu correo en ${site.email}. Responderemos en un plazo máximo de 15 días hábiles.`}
                </div>
              </Seccion>

              <div className="hk-c-legal">
                <p>{LEYENDA_PLAZO}</p>
                <p>{LEYENDA_INDECOPI}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <style>{`
        .hk-constancia { display: none; }
        @media print {
          @page { size: A4 portrait; margin: 0; }
          html, body { background: #fff !important; }
          body > *:not(.hk-constancia) { display: none !important; }
          .hk-constancia {
            display: block !important;
            color: #111; background: #fff;
            font: 400 10pt/1.45 var(--font-body), Arial, sans-serif;
            -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
          .hk-c-marco { width: 100%; border-collapse: collapse; }
          .hk-c-marco > thead > tr > td, .hk-c-marco > tfoot > tr > td, .hk-c-marco > tbody > tr > td { padding: 0 16mm; }
          .hk-c-margen { height: 12mm; }
          .hk-c-pie {
            display: flex; justify-content: space-between; gap: 6mm;
            margin-top: 5mm; padding: 3mm 0 8mm; border-top: 0.3mm solid #d6d6d6;
            font-size: 7.5pt; color: #6b6b6b;
          }
          .hk-c-cabecera {
            display: flex; justify-content: space-between; align-items: flex-start; gap: 10mm;
            padding-bottom: 4mm; border-bottom: 0.6mm solid #111;
          }
          .hk-c-logo { width: 42mm; height: auto; margin-top: 1.5mm; }
          .hk-c-titulo { text-align: right; }
          .hk-c-etiqueta {
            font: 700 7pt/1 var(--font-accent), Arial, sans-serif; letter-spacing: 0.14em;
            text-transform: uppercase; color: var(--cyan-800, #007ea6);
          }
          .hk-c-h1 { margin: 2mm 0 0; font: 500 17pt/1.1 var(--font-display), Arial, sans-serif; color: #111; }
          .hk-c-numero { margin-top: 1.5mm; font: 700 14pt/1.1 var(--font-display), Arial, sans-serif; letter-spacing: 0.02em; }
          .hk-c-nota { font-size: 8pt; line-height: 1.4; color: #6b6b6b; margin-top: 0.8mm; }
          .hk-c-proveedor {
            display: grid; grid-template-columns: auto auto auto auto; justify-content: space-between; gap: 6mm;
            margin-top: 4.5mm; padding: 3mm 4mm; background: #f4f4f4; border-radius: 1.5mm;
          }
          .hk-c-proveedor .hk-c-v { font-size: 9pt; }
          .hk-c-seccion { margin-top: 5mm; break-inside: avoid; page-break-inside: avoid; }
          .hk-c-seccion.hk-c-partible { break-inside: auto; page-break-inside: auto; }
          .hk-c-h2, .hk-c-rotulo { break-after: avoid; page-break-after: avoid; }
          .hk-c-casillas { break-inside: avoid; }
          .hk-c-h2 {
            display: flex; align-items: center; gap: 2.5mm; margin: 0 0 3mm; padding-bottom: 2mm;
            border-bottom: 0.3mm solid #d6d6d6;
            font: 700 8.5pt/1 var(--font-accent), Arial, sans-serif; letter-spacing: 0.1em; text-transform: uppercase;
          }
          .hk-c-n {
            display: inline-flex; align-items: center; justify-content: center;
            width: 5mm; height: 5mm; border-radius: 1mm; background: #111; color: #fff;
            font: 700 7.5pt/1 var(--font-accent), Arial, sans-serif; letter-spacing: 0;
          }
          .hk-c-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.8mm 8mm; }
          .hk-c-grid-bien { grid-template-columns: 0.7fr 0.8fr 2.5fr; }
          .hk-c-ancho { grid-column: 1 / -1; }
          .hk-c-l {
            font: 700 6.5pt/1.2 var(--font-accent), Arial, sans-serif; letter-spacing: 0.1em;
            text-transform: uppercase; color: #6b6b6b;
          }
          .hk-c-v { margin-top: 0.8mm; font-size: 10pt; line-height: 1.4; color: #111; word-break: break-word; }
          .hk-c-casillas { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }
          .hk-c-casilla { display: flex; gap: 2.5mm; align-items: flex-start; }
          .hk-c-box {
            flex: none; display: inline-flex; align-items: center; justify-content: center;
            width: 4.2mm; height: 4.2mm; margin-top: 0.6mm; border: 0.35mm solid #111; border-radius: 0.6mm;
            font: 700 8pt/1 Arial, sans-serif; color: #fff;
          }
          .hk-c-box-on { background: #111; }
          .hk-c-texto {
            margin-top: 1mm; padding: 3mm 3.5mm; border: 0.3mm solid #d6d6d6; border-radius: 1.5mm;
            white-space: pre-wrap; word-break: break-word; font-size: 10pt; line-height: 1.5;
          }
          .hk-c-legal {
            margin-top: 5mm; padding-top: 3mm; border-top: 0.3mm solid #d6d6d6;
            font-size: 7.5pt; line-height: 1.45; color: #6b6b6b; break-inside: avoid;
          }
          .hk-c-legal p { margin: 0 0 1mm; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
