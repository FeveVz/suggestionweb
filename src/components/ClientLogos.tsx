import { Label } from "@/components/brand/parts";

/**
 * Barra de logos de clientes (prueba social). Marquee infinito que pausa al
 * hover; logos en escala de grises que recuperan color al pasar el mouse.
 * Server Component (animación CSS, sin JS). Los logos son SVG con raster
 * embebido (colores propios) → tratamiento por filtro CSS.
 */

/**
 * Altura por logo, balanceada por proporción para que el área visual sea pareja:
 * los emblemas cuadrados van más altos (58px); los logotipos anchos, algo más
 * bajos (40-42px) pero ocupan más ancho. Calculado desde el viewBox de cada SVG.
 */
const LOGOS: { src: string; h: number }[] = [
  { src: "/assets/clientes/cliente-1.svg", h: 58 },
  { src: "/assets/clientes/cliente-2.svg", h: 58 },
  { src: "/assets/clientes/cliente-3.svg", h: 76 }, // Ceinys (mucho aire interno)
  { src: "/assets/clientes/cliente-4.svg", h: 40 },
  { src: "/assets/clientes/cliente-5.svg", h: 70 }, // El Charcutero (emblema)
  { src: "/assets/clientes/cliente-6.svg", h: 76 }, // CGH (mucho aire interno)
  { src: "/assets/clientes/cliente-7.svg", h: 40 },
  { src: "/assets/clientes/cliente-8.svg", h: 42 },
  { src: "/assets/clientes/cliente-9.svg", h: 40 },
  { src: "/assets/clientes/cliente-10.svg", h: 40 },
  { src: "/assets/clientes/cliente-11.svg", h: 58 },
  { src: "/assets/clientes/cliente-12.svg", h: 58 },
  { src: "/assets/clientes/cliente-13.svg", h: 52 },
  { src: "/assets/clientes/cliente-14.svg", h: 42 },
  { src: "/assets/clientes/cliente-15.svg", h: 70 }, // El Charcutero (versión oscura)
  { src: "/assets/clientes/cliente-16.svg", h: 40 },
  { src: "/assets/clientes/cliente-17.svg", h: 40 },
];

export default function ClientLogos() {
  const row = [...LOGOS, ...LOGOS]; // duplicado para loop continuo
  return (
    <section style={{ background: "var(--surface-raised)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }} aria-label="Clientes">
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,4vw,3.5rem) 0" }}>
        <div style={{ padding: "0 var(--gutter)", marginBottom: 28 }}>
          <Label>Más de 50 marcas confían en nosotros</Label>
        </div>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="hk-marquee" style={{ display: "inline-flex", alignItems: "center", gap: "clamp(2rem,4vw,3.75rem)", whiteSpace: "nowrap", padding: "8px 0", animation: "hk-marquee 55s linear infinite", willChange: "transform" }}>
            {row.map((logo, i) => (
              // Altura balanceada por logo (área visual pareja), ancho natural.
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={logo.src} alt="" aria-hidden className="hk-logo" style={{ height: logo.h, width: "auto", flexShrink: 0 }} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
