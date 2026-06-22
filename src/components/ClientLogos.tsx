import { Label } from "@/components/brand/parts";

/**
 * Barra de logos de clientes (prueba social). Marquee infinito que pausa al
 * hover; logos en escala de grises que recuperan color al pasar el mouse.
 * Server Component (animación CSS, sin JS). Los logos son SVG con raster
 * embebido (colores propios) → tratamiento por filtro CSS.
 */

const COUNT = 17;
const LOGOS = Array.from({ length: COUNT }, (_, i) => `/assets/clientes/cliente-${i + 1}.svg`);

export default function ClientLogos() {
  const row = [...LOGOS, ...LOGOS]; // duplicado para loop continuo
  return (
    <section style={{ background: "var(--surface-raised)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }} aria-label="Clientes">
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,4vw,3.5rem) 0" }}>
        <div style={{ padding: "0 var(--gutter)", marginBottom: 28 }}>
          <Label>Más de 50 marcas confían en nosotros</Label>
        </div>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="hk-marquee" style={{ display: "inline-flex", alignItems: "center", gap: "clamp(1.25rem,3vw,2.75rem)", whiteSpace: "nowrap", padding: "8px 0", animation: "hk-marquee 48s linear infinite", willChange: "transform" }}>
            {row.map((src, i) => (
              // Celda uniforme: cada logo se escala para caber (contain), centrado,
              // con el mismo footprint sin importar su proporción interna.
              <span key={i} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 48, width: 116, flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" aria-hidden className="hk-logo" style={{ maxHeight: 30, maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
