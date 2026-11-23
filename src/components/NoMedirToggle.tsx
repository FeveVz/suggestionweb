"use client";

import { useEffect, useState } from "react";
import { OPTOUT_KEY } from "@/lib/tracking";

/**
 * «No medir mi visita / Volver a medir» (sección de cookies de /privacidad).
 *
 * Guarda sg_optout=1 en este navegador; los arranques de GA4, el Píxel,
 * Clarity y Metricool lo comprueban antes de cargar (NO_MEDIR_JS en lib/tracking.ts).
 * Al pedir no ser medido se recarga la página, porque las etiquetas ya
 * cargadas seguirían activas en la navegación interna sin recarga.
 */
export default function NoMedirToggle() {
  const [estado, setEstado] = useState<"cargando" | "midiendo" | "sin-medir" | "sin-almacen">("cargando");

  useEffect(() => {
    try {
      setEstado(localStorage.getItem(OPTOUT_KEY) === "1" ? "sin-medir" : "midiendo");
    } catch {
      setEstado("sin-almacen");
    }
  }, []);

  const cambiar = () => {
    try {
      if (estado === "sin-medir") {
        localStorage.removeItem(OPTOUT_KEY);
        setEstado("midiendo");
      } else {
        localStorage.setItem(OPTOUT_KEY, "1");
        setEstado("sin-medir");
        // Las etiquetas ya cargadas seguirían vivas en la navegación interna de
        // Next: se recarga para que esta misma visita deje de medirse.
        setTimeout(() => window.location.reload(), 900);
      }
    } catch {
      setEstado("sin-almacen");
    }
  };

  if (estado === "sin-almacen") {
    return (
      <p role="status" style={TEXTO}>
        Tu navegador no deja guardar preferencias en este sitio, así que no podemos recordar esta opción. Puedes bloquear la medición con la configuración de tu navegador o con una extensión de bloqueo.
      </p>
    );
  }

  const sinMedir = estado === "sin-medir";
  return (
    <div style={{ margin: "8px 0 16px", display: "grid", gap: 10, justifyItems: "start" }}>
      <button
        type="button"
        onClick={cambiar}
        disabled={estado === "cargando"}
        aria-pressed={sinMedir}
        style={{
          minHeight: 44,
          padding: "10px 18px",
          borderRadius: "var(--radius-pill)",
          border: "1.5px solid var(--text-strong)",
          background: sinMedir ? "var(--white)" : "var(--text-strong)",
          color: sinMedir ? "var(--text-strong)" : "var(--white)",
          font: "var(--fw-medium) var(--fs-sm)/1.2 var(--font-body)",
          cursor: "pointer",
        }}
      >
        {sinMedir ? "Volver a medir mi visita" : "No medir mi visita"}
      </button>
      <p role="status" aria-live="polite" style={TEXTO}>
        {estado === "cargando"
          ? " "
          : sinMedir
            ? "Listo: este navegador ya no carga Google Analytics, el Píxel de Meta, Microsoft Clarity ni Metricool, y tus formularios no se envían a Meta para medir anuncios. Si borras los datos del sitio en tu navegador, vuelve a pulsar el botón."
            : "Hoy medimos tu visita con las herramientas descritas arriba. Si vuelves a activarla, se aplica desde la próxima vez que abras el sitio."}
      </p>
    </div>
  );
}

const TEXTO: React.CSSProperties = {
  font: "var(--fw-light) var(--fs-sm)/1.55 var(--font-body)",
  color: "var(--text-muted)",
  margin: 0,
  maxWidth: "70ch",
};
