import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Label } from "@/components/brand/parts";
import ReclamoForm from "@/components/ReclamoForm";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Libro de Reclamaciones | Suggestion",
  description: "Libro de Reclamaciones virtual de Agencia de Marketing Suggestion S.A.C. (RUC 20615266753). Registra tu reclamo o queja; respondemos en máximo 15 días hábiles.",
  path: "/libro-de-reclamaciones",
});

export default function LibroReclamaciones() {
  return (
    <section style={{ background: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2rem,4vw,3.5rem) var(--gutter) var(--section-y)" }}>
        <Label dot>Libro de Reclamaciones</Label>
        <h1 style={{ display: "flex", alignItems: "center", gap: 14, font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "16px 0 0" }}>
          <BookOpen size={34} style={{ color: "var(--cyan)", flexShrink: 0 }} aria-hidden /> Libro de Reclamaciones
        </h1>
        <p style={{ font: "var(--fw-light) var(--fs-base)/1.6 var(--font-body)", color: "var(--text-body)", margin: "16px 0 6px", maxWidth: "70ch" }}>
          Conforme al Código de Protección y Defensa del Consumidor (Ley N.º 29571), ponemos a tu disposición nuestro Libro de Reclamaciones virtual.
        </p>
        <p style={{ font: "var(--fw-light) var(--fs-sm)/1.5 var(--font-body)", color: "var(--text-muted)", margin: "0 0 30px" }}>
          Proveedor: {site.legalName} · RUC {site.ruc} · Ica, Perú
        </p>
        <ReclamoForm />
      </div>
    </section>
  );
}
