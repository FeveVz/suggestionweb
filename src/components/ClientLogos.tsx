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
const LOGOS: { src: string; h: number; alt: string }[] = [
  { src: "/assets/clientes/trim/cliente-1.webp", h: 80, alt: "Logo de Corplogistics Perú" }, // Corplogistics Perú
  { src: "/assets/clientes/trim/cliente-2.webp", h: 52, alt: "Logo de Aura Andina" }, // Aura Andina (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-3.webp", h: 54, alt: "Logo de Ceinys" }, // Ceinys (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-4.webp", h: 46, alt: "Logo de yonda" }, // yonda (horizontal)
  { src: "/assets/clientes/trim/cliente-5.webp", h: 58, alt: "Logo de El Charcutero" }, // El Charcutero (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-6.webp", h: 84, alt: "Logo de CGH" }, // CGH (recortado)
  { src: "/assets/clientes/trim/cliente-7.webp", h: 46, alt: "Logo de Changan, marca atendida vía concesionario" }, // Changan (horizontal)
  { src: "/assets/clientes/trim/cliente-8.webp", h: 52, alt: "Logo de Renault, marca atendida vía concesionario" }, // Renault (semi-ancho)
  { src: "/assets/clientes/trim/cliente-9.webp", h: 46, alt: "Logo de Landini, marca atendida vía concesionario" }, // Landini (horizontal)
  { src: "/assets/clientes/trim/cliente-10.webp", h: 48, alt: "Logo de Citroën, marca atendida vía concesionario" }, // Citroën (horizontal)
  { src: "/assets/clientes/trim/cliente-11.webp", h: 55, alt: "Logo de Suzuki, marca atendida vía concesionario" }, // Suzuki (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-12.webp", h: 83, alt: "Logo de Mazda, marca atendida vía concesionario" }, // Mazda (tarjeta, +caja)
  { src: "/assets/clientes/trim/cliente-13.webp", h: 50, alt: "Logo de Subaru, marca atendida vía concesionario" }, // Subaru (semi-cuadrado)
  { src: "/assets/clientes/trim/cliente-14.webp", h: 52, alt: "Logo de JAC, marca atendida vía concesionario" }, // JAC (semi-ancho)
  { src: "/assets/clientes/trim/cliente-16.webp", h: 46, alt: "Logo de Motorpark" }, // Motorpark (horizontal)
  { src: "/assets/clientes/trim/cliente-17.webp", h: 48, alt: "Logo de GWM, marca atendida vía concesionario" }, // GWM (horizontal)
];

// Desde el 21-nov-2026 los logos van sin caja: se les quitó el fondo gris claro
// (o el oscuro, en Aura Andina, que pasó a un tono oscuro) y el margen
// transparente, así que las alturas de arriba ya son las del logo visible
// (auditoría UX-16). Originales en el respaldo de la sesión, no en el repo.
// El Charcutero en versión oscura salió: repetía la marca en la misma franja.
export default function ClientLogos() {
  // Duplicado para el loop continuo. Solo la primera copia lleva alt: la
  // segunda es decoración repetida y va oculta a lectores (auditoría TEC-10).
  // Las marcas de vehículos se nombran como «atendidas vía concesionario», no
  // como clientes directos.
  const row = [...LOGOS.map((l) => ({ ...l, copia: false })), ...LOGOS.map((l) => ({ ...l, copia: true }))];
  return (
    <section id="marcas" style={{ background: "var(--surface-raised)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", scrollMarginTop: 80 }} aria-label="Clientes">
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,4vw,3.5rem) 0" }}>
        <div style={{ padding: "0 var(--gutter)", marginBottom: 28 }}>
          <Label>Más de 50 marcas confían en nosotros</Label>
        </div>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          {/* 32s, no 55. La fila duplicada mide ~5.400 px en escritorio, así que
              translateX(-50%) recorre ~2.700: a 55s eran 49 px/s, 3,2 segundos
              por logo, y la banda parecía quieta. A 32s van ~84 px/s, menos de
              dos segundos por logo. Sigue pausándose al pasar el mouse y sigue
              apagada con prefers-reduced-motion. */}
          <div className="hk-marquee hk-anima" style={{ display: "inline-flex", alignItems: "center", gap: "clamp(2rem,4vw,3.75rem)", whiteSpace: "nowrap", padding: "8px 0", animation: "hk-marquee 32s linear infinite", willChange: "transform" }}>
            {row.map((logo, i) => (
              // Altura balanceada por logo (área visual pareja), ancho natural.
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={logo.src} alt={logo.copia ? "" : logo.alt} aria-hidden={logo.copia || !logo.alt ? true : undefined} className="hk-logo" style={{ height: `calc(${logo.h}px * var(--logo-scale, 1))`, width: "auto", flexShrink: 0 }} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
