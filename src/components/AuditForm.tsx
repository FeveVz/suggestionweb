"use client";

import { useEffect, useState } from "react";
import { Btn } from "@/components/brand/parts";
import { track, leadDedup, getAttribution } from "@/lib/tracking";
import { temaDeUrl } from "@/lib/cta";
import { whatsappLink } from "@/lib/site";

/**
 * Formulario calificador, para dos ofertas distintas:
 *
 * - "auditoria" (/auditoria-gratis): diagnóstico de 20 minutos con tres
 *   mejoras. Guarda el lead con tipo "auditoria".
 * - "consultoria" (home, /contacto y /consultoria-cero): 30 minutos en los que
 *   el cliente cuenta su problema o lo que quiere mejorar. Pide solo nombre,
 *   WhatsApp y eso, en texto libre, que es el insumo de la conversación; el
 *   negocio y la inversión se conversan después. Se guarda con tipo "contacto"
 *   y la página de origen: /api/lead solo acepta contacto, auditoria y reclamo,
 *   y no se sabe si la tabla de Supabase restringe el campo, así que un tipo
 *   nuevo podría hacer fallar el guardado. Para separarlo en el panel hay que
 *   dar de alta el valor primero en la base y en TIPOS.
 *
 * En los dos casos abre WhatsApp con el resumen y redirige a /gracias.
 */

const WHATSAPP = "51920010308";

const label: React.CSSProperties = { font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)", color: "var(--white)" };
const input: React.CSSProperties = {
  font: "var(--fw-light) var(--fs-base)/1.4 var(--font-body)", color: "var(--white)", background: "var(--ink-800)",
  border: "1px solid var(--border-on-inverse)", borderRadius: "var(--radius-sm)", padding: "13px 16px", outline: "none", width: "100%",
};

function F({ l, children, span }: { l: string; children: React.ReactNode; span?: boolean }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: span ? "1 / -1" : undefined }}>
      <span style={label}>{l}</span>
      {children}
    </label>
  );
}

/** El tema con el que se llegó (ver lib/cta.ts). Se lee al montar para no romper la hidratación. */
function useTema(): string {
  const [tema, setTema] = useState("");
  useEffect(() => setTema(temaDeUrl()), []);
  return tema;
}

/** Botón de WhatsApp de la consultoría: lleva el mismo tema que el formulario. */
export function WaConsultoria({ children }: { children: React.ReactNode }) {
  const tema = useTema();
  const texto = `Hola Suggestion, quiero agendar mi consultoría cero${tema ? ` sobre ${tema}` : ""}.`;
  return (
    <Btn as="a" href={whatsappLink(texto)} size="lg" target="_blank" rel="noopener noreferrer">
      {children}
    </Btn>
  );
}

export default function AuditForm({ variante = "auditoria" }: { variante?: "auditoria" | "consultoria" }) {
  const [sent, setSent] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const tema = useTema();
  const consultoria = variante === "consultoria";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAviso(null);
    const f = new FormData(e.currentTarget);
    const quiere = String(f.get("quiere") || "").trim();
    const msg = consultoria
      ? [
          `Hola Suggestion, quiero agendar mi consultoría cero. Soy ${f.get("nombre")}.`,
          tema ? `Sobre: ${tema}` : null,
          quiere ? `Lo que quiero resolver o mejorar: ${quiere}` : null,
        ]
      : [
          `Hola Suggestion, quiero mi auditoría gratis. Soy ${f.get("nombre")}.`,
          `Negocio: ${f.get("negocio")}`,
          f.get("web") ? `Web/IG: ${f.get("web")}` : null,
          `Inversión mensual en publicidad: ${f.get("inversion")}`,
          `Objetivo: ${f.get("objetivo")}`,
        ];
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg.filter(Boolean).join("\n"))}`;
    setWaUrl(wa);
    window.open(wa, "_blank", "noopener,noreferrer");
    const dedup = leadDedup(); // event_id compartido Pixel↔CAPI + fbp/fbc para el match
    const guardado = fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        tipo: consultoria ? "contacto" : "auditoria",
        nombre: f.get("nombre"),
        negocio: f.get("negocio"),
        telefono: f.get("telefono"),
        mensaje: consultoria ? quiere || undefined : undefined,
        pagina: consultoria ? window.location.pathname : "/auditoria-gratis",
        website: f.get("website"),
        extra: consultoria
          ? { oferta: "consultoria-cero", tema: tema || undefined }
          : { web: f.get("web"), inversion: f.get("inversion"), objetivo: f.get("objetivo") },
        attribution: getAttribution(),
        ...dedup,
      }),
    });
    track("generate_lead", { origen: consultoria ? "consultoria-cero" : "auditoria" }, dedup.event_id);
    setSent(true);

    // Antes esto era `.catch(() => {})` + salto a /gracias a los 700 ms: si el
    // guardado fallaba, el lead se perdía y nadie se enteraba. Ahora esperamos
    // la respuesta (con tope de 2,5 s para no dejar a nadie mirando el botón) y
    // solo celebramos si de verdad se guardó.
    const r = await Promise.race([
      guardado.catch(() => null),
      new Promise<"timeout">((res) => setTimeout(() => res("timeout"), 2500)),
    ]);

    if (r === "timeout") {
      // WhatsApp ya está abierto y `keepalive` termina el guardado igual.
      window.location.assign("/gracias");
      return;
    }
    if (r && r.ok) {
      window.location.assign("/gracias");
      return;
    }
    setSent(false);
    setAviso(r && r.status === 429 ? "Ya recibimos tu solicitud hace unos minutos. Si es urgente, escríbenos directamente por WhatsApp." : "Tu mensaje ya está escrito en WhatsApp. Envíalo desde ahí para que te respondamos.");
  };

  return (
    <form onSubmit={onSubmit} className="hk-form" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      {aviso && (
        <p role="status" style={{ gridColumn: "1 / -1", margin: 0, font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--white)" }}>
          {aviso}{" "}
          {waUrl && (
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--cyan)", textDecoration: "underline" }}>
              ¿No se abrió? Abrir WhatsApp
            </a>
          )}
        </p>
      )}
      {consultoria && tema && (
        <p style={{ gridColumn: "1 / -1", margin: 0, font: "var(--fw-medium) var(--fs-sm)/1.4 var(--font-body)", color: "var(--cyan)" }}>
          Sobre: {tema}
        </p>
      )}
      <F l="Nombre *"><input name="nombre" required autoComplete="name" placeholder="Tu nombre" className="hk-input" style={input} /></F>
      {!consultoria && <F l="Negocio *"><input name="negocio" required autoComplete="organization" placeholder="Empresa / rubro" className="hk-input" style={input} /></F>}
      <F l="WhatsApp *"><input name="telefono" required type="tel" autoComplete="tel" placeholder="+51 ..." className="hk-input" style={input} /></F>
      {consultoria ? (
        // La consultoría cero empieza con lo que el cliente cuenta: se le pide
        // en sus palabras, no eligiendo de una lista.
        <F l="¿Qué te gustaría resolver o mejorar? (opcional)" span>
          <textarea name="quiere" rows={3} placeholder="Ej.: me escriben por WhatsApp pero pocos terminan comprando." className="hk-input" style={{ ...input, resize: "vertical" }} />
        </F>
      ) : (
        <>
          <F l="Web o Instagram (opcional)"><input name="web" autoComplete="url" placeholder="tunegocio.pe / @tunegocio" className="hk-input" style={input} /></F>
          <F l="¿Cuánto inviertes al mes en publicidad?">
            <select name="inversion" className="hk-input" style={input} defaultValue="Aún no invierto">
              <option>Aún no invierto</option>
              <option>Menos de S/1,000</option>
              <option>S/1,000 – S/3,000</option>
              <option>S/3,000 – S/10,000</option>
              <option>Más de S/10,000</option>
            </select>
          </F>
          <F l="¿Tu objetivo principal?">
            <select name="objetivo" className="hk-input" style={input} defaultValue="Más leads y citas">
              <option>Más leads y citas</option>
              <option>Más ventas directas</option>
              <option>Ordenar mi marketing</option>
              <option>Lanzar un proyecto nuevo</option>
            </select>
          </F>
        </>
      )}
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <Btn type="submit" variant="insight" size="lg">
          {sent ? "¡Abriendo WhatsApp!" : consultoria ? "Agendar mi consultoría cero" : "Quiero mi auditoría gratis"}
        </Btn>
        <span style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>
          {consultoria ? "Gratis y sin compromiso. Se abre WhatsApp con tu mensaje listo y respondemos en menos de 24 h hábiles." : "Sin compromiso · Respuesta en 48 h hábiles"}
        </span>
      </div>
    </form>
  );
}
