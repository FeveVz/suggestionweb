import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blot } from "@/components/brand/parts";

/**
 * Tarjeta de sector (home + hub /sectores). Mancha dual que se revela en
 * cian al hover (motivo "No es lo que ves"). Diseñada para fondo oscuro.
 */

export default function SectorCard({
  index,
  title,
  result,
  href,
  shape = 1,
  cta = "Ver enfoque",
}: {
  index?: string;
  title: string;
  result: string;
  href: string;
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
        minHeight: 320,
        padding: "var(--space-6)",
        background: "var(--surface-inverse-2)",
        color: "var(--white)",
        border: "1px solid var(--border-on-inverse)",
        borderRadius: "var(--radius-md)",
        textDecoration: "none",
        overflow: "hidden",
        transition: "border-color var(--dur-base) var(--ease-out)",
      }}
    >
      <div style={{ position: "absolute", right: 18, top: 18, zIndex: "var(--z-art)" as unknown as number, pointerEvents: "none" }}>
        <Blot shape={shape} dual reveal size={140} />
      </div>
      {index && (
        <span style={{ position: "relative", font: "var(--fw-bold) var(--fs-micro)/1 var(--font-accent)", letterSpacing: "var(--tracking-label)", color: "var(--text-on-inverse-mut)" }}>
          {index}
        </span>
      )}
      <div style={{ position: "relative" }}>
        <h3 style={{ font: "var(--fw-medium) var(--fs-xl)/1.05 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--white)" }}>{title}</h3>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-on-inverse-mut)", marginTop: 12, maxWidth: "26ch" }}>{result}</p>
        <span className="hk-sector-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, font: "var(--fw-bold) var(--fs-xs)/1 var(--font-accent)", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--cyan)" }}>
          {cta} <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
