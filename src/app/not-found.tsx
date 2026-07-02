import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Btn, Blot, Label } from "@/components/brand/parts";

/** 404 con identidad (Rorschach): convierte el error en un momento de marca. */
export default function NotFound() {
  const links = [
    { label: "Servicios", href: "/servicios" },
    { label: "Sectores", href: "/sectores" },
    { label: "Casos de éxito", href: "/casos" },
    { label: "Blog", href: "/blog" },
  ];
  return (
    <section style={{ background: "var(--white)", minHeight: "68vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "clamp(2rem,5vw,4rem)", alignItems: "center" }} className="hk-split">
        <div>
          <Label dot>Error 404</Label>
          <h1 style={{ font: "var(--fw-bold) var(--fs-3xl)/1.08 var(--font-display)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", margin: "18px 0 0", maxWidth: "20ch" }}>
            ¿Qué ves aquí? Nosotros tampoco: esta página no existe.
          </h1>
          <p style={{ font: "var(--fw-light) var(--fs-md)/1.6 var(--font-body)", color: "var(--text-body)", margin: "18px 0 0", maxWidth: "48ch" }}>
            El enlace cambió o nunca existió. Lo que sí existe: nuestro trabajo convirtiendo atención en ventas.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <Btn as="a" href="/" size="lg">
              Ir al inicio <ArrowRight size={18} />
            </Btn>
            <Btn as="a" href="/contacto" variant="secondary" size="lg">
              Hablar con el equipo
            </Btn>
          </div>
          <nav aria-label="Enlaces útiles" style={{ display: "flex", gap: "10px 22px", flexWrap: "wrap", marginTop: 26 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hk-ulink" style={{ font: "var(--fw-medium) var(--fs-sm)/1 var(--font-body)", color: "var(--text-muted)" }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div aria-hidden style={{ opacity: 0.9 }}>
          <Blot shape={4} tint="orange" size={220} />
        </div>
      </div>
    </section>
  );
}
