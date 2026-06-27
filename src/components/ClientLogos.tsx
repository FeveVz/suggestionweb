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
// Altura por logo para igualar el TAMAÑO VISUAL (área), no solo la altura:
// los cuadrados/verticales van mucho más altos que los wordmarks horizontales
// (que se ven grandes por su ancho). Los emblemas con aire interno, aún más.
const LOGOS: { src: string; h: number }[] = [
  { src: "/assets/clientes/trim/cliente-1.png", h: 80 }, // Coplogistics (recortado)
  { src: "/assets/clientes/trim/cliente-2.png", h: 92 }, // Aura Andina (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-3.png", h: 96 }, // Ceinys (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-4.png", h: 46 }, // yonda (horizontal)
  { src: "/assets/clientes/trim/cliente-5.png", h: 92 }, // El Charcutero (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-6.png", h: 84 }, // CGH (recortado)
  { src: "/assets/clientes/trim/cliente-7.png", h: 46 }, // Changan (horizontal)
  { src: "/assets/clientes/trim/cliente-8.png", h: 52 }, // Renault (semi-ancho)
  { src: "/assets/clientes/trim/cliente-9.png", h: 46 }, // Landini (horizontal)
  { src: "/assets/clientes/trim/cliente-10.png", h: 48 }, // Citroën (horizontal)
  { src: "/assets/clientes/trim/cliente-11.png", h: 92 }, // Suzuki (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-12.png", h: 90 }, // Mazda (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-13.png", h: 68 }, // Subaru (semi-cuadrado)
  { src: "/assets/clientes/trim/cliente-14.png", h: 52 }, // JAC (semi-ancho)
  { src: "/assets/clientes/trim/cliente-15.png", h: 92 }, // El Charcutero oscuro (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-16.png", h: 46 }, // Motorpark (horizontal)
  { src: "/assets/clientes/trim/cliente-17.png", h: 48 }, // GWM (horizontal)
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
