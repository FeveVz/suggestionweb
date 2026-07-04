"use client";

import { useState } from "react";
import { Btn } from "@/components/brand/parts";
import { track, leadDedup } from "@/lib/tracking";

/**
 * Formulario calificador de la auditoría gratis (lead magnet).
 * Guarda el lead (tipo "auditoria"), abre WhatsApp con el resumen y
 * redirige a /gracias (conversión medible).
 */

const WHATSAPP = "51937770159";

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

export default function AuditForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `Hola Suggestion, quiero mi auditoría gratis. Soy ${f.get("nombre")}.`,
      `Negocio: ${f.get("negocio")}`,
      f.get("web") ? `Web/IG: ${f.get("web")}` : null,
      `Inversión mensual en publicidad: ${f.get("inversion")}`,
      `Objetivo: ${f.get("objetivo")}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg.join("\n"))}`, "_blank", "noopener,noreferrer");
    const dedup = leadDedup(); // event_id compartido Pixel↔CAPI + fbp/fbc para el match
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        tipo: "auditoria",
        nombre: f.get("nombre"),
        negocio: f.get("negocio"),
        telefono: f.get("telefono"),
        pagina: "/auditoria-gratis",
        website: f.get("website"),
        extra: { web: f.get("web"), inversion: f.get("inversion"), objetivo: f.get("objetivo") },
        ...dedup,
      }),
    }).catch(() => {});
    track("generate_lead", { origen: "auditoria" }, dedup.event_id);
    setSent(true);
    setTimeout(() => window.location.assign("/gracias"), 700);
  };

  return (
    <form onSubmit={onSubmit} className="hk-form" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <F l="Nombre *"><input name="nombre" required placeholder="Tu nombre" className="hk-input" style={input} /></F>
      <F l="Negocio *"><input name="negocio" required placeholder="Empresa / rubro" className="hk-input" style={input} /></F>
      <F l="WhatsApp *"><input name="telefono" required type="tel" placeholder="+51 ..." className="hk-input" style={input} /></F>
      <F l="Web o Instagram (opcional)"><input name="web" placeholder="tunegocio.pe / @tunegocio" className="hk-input" style={input} /></F>
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
      <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <Btn type="submit" variant="insight" size="lg">{sent ? "¡Abriendo WhatsApp!" : "Quiero mi auditoría gratis"}</Btn>
        <span style={{ font: "var(--fw-light) var(--fs-xs)/1.4 var(--font-body)", color: "var(--text-on-inverse-mut)" }}>Sin compromiso · Respuesta en 48 h hábiles</span>
      </div>
    </form>
  );
}
