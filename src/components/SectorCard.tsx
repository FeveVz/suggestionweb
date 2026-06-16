import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { Blot } from "@/components/brand/parts";

/**
 * Tarjeta de sector (home + hub /sectores).
 * Comunica el rubro con un ícono de línea (acento cian) y conserva el ADN de
 * marca con la "mancha" como marca de agua tenue de fondo (no como protagonista).
 * Diseñada para fondo oscuro.
 */

export default function SectorCard({
  index,
  title,
  result,
  href,
  icon: Icon,
  shape = 1,
  cta = "Ver enfoque",
}: {
  index?: string;
  title: string;
  result: string;
  href: string;
  icon: LucideIcon;
  shape?: number;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="hk-sector hk-lift"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 28,
        minHeight: 320,
        padding: "var(--space-6)",
        background: "var(--surface-inverse-2)",
        color: "var(--white)",
        border: "1px solid var(--border-on-inverse)",
        borderRadius: "var(--radius-md)",
        textDecoration: "none",
        overflow: "hidden",
      }}
    >
      {/* Mancha de marca: marca de agua tenue de fondo */}
      <div aria-hidden style={{ position: "absolute", right: -34, top: -34, opacity: 0.14, pointerEvents: "none", zIndex: 0 }}>
        <Blot shape={shape} tint="orange" size={170} />
      </div>

      {/* Ícono del sector + índice */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <span
          className="hk-sector-chip"
          style={{ width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: "var(--radius-md)", border: "1px solid var(--border-on-inverse)", background: "rgba(0,191,255,0.06)", transition: "border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)" }}
        >
          <Icon size={26} strokeWidth={1.6} style={{ color: "var(--cyan)" }} aria-hidden />
        </span>
        {index && (
          <span style={{ font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>{index}</span>
        )}
      </div>

      {/* Texto */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h3 style={{ font: "var(--fw-medium) var(--fs-xl)/1.05 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)" }}>{title}</h3>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 12, maxWidth: "26ch" }}>{result}</p>
        <span className="hk-sector-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, font: "var(--fw-bold) var(--fs-xs)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--cyan)" }}>
          {cta} <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
