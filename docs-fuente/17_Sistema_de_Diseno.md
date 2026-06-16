# Sistema de diseño — suggestion.pe
Tokens y componentes para Tailwind. Basado en el sitio actual (suggestionweb.vercel.app): minimalista, fondo claro, acentos **naranja + cian**, formas tipo "mancha" (blots) y texturas topográficas. Voz visual: directa, premium, sin ruido.

> Si el manual de marca define otros valores exactos (HEX, fuentes), priorízalos sobre estos. Estos son el punto de partida coherente con el sitio actual.

---

## 1. Color
| Token | HEX | Uso |
|---|---|---|
| `brand` (naranja) | `#F26A21` | CTA, acentos, énfasis |
| `brand-cyan` | `#15B5C4` | acento secundario, detalles |
| `ink` (negro) | `#121212` | texto principal, fondos oscuros |
| `bg` | `#FFFFFF` | fondo |
| `bg-soft` | `#F6F5F2` | secciones alternas |
| `muted` | `#6B6B6B` | texto secundario |
| `border` | `#E5E3DE` | bordes/divisores |

Tailwind (`tailwind.config.ts`):
```ts
theme: { extend: { colors: {
  brand: { DEFAULT: '#F26A21', cyan: '#15B5C4' },
  ink: '#121212', muted: '#6B6B6B',
  bg: { DEFAULT:'#FFFFFF', soft:'#F6F5F2' }, border: '#E5E3DE',
}}}
```
Reglas: el **naranja se reserva para CTAs y énfasis** (no fondos extensos). Contraste AA mínimo. Botón primario = fondo `brand`, texto blanco.

## 2. Tipografía
- **Display/Headlines:** fuente sans geométrica de carácter (sugerido **Space Grotesk** o **Sora**), peso 600-700, tracking ajustado.
- **Cuerpo:** sans neutra y legible (sugerido **Inter**), 400/500.
- Cargar con `next/font` (display swap).
- Escala (móvil → desktop): H1 36→60px · H2 28→40 · H3 22→28 · H4 18→20 · body 16→18 · small 14.
- Line-height: títulos 1.1, cuerpo 1.6. Medida de lectura: máx ~70ch.

## 3. Espaciado y layout
- Grid base 4px. Secciones: padding vertical 64px móvil / 96-120px desktop.
- Contenedor máx 1200px, padding lateral 20px móvil.
- Radius: `md` 10px (tarjetas), `full` para botones/píldoras.
- Sombra sutil solo en tarjetas elevadas; estética flat.

## 4. Motivos de marca
- **Blots / manchas** (tinta orgánica naranja y cian) como elemento decorativo del concepto "No es lo que ves" (Rorschach). Usar como acento puntual, no saturar. SVG/PNG optimizados, decorativos (`aria-hidden`).
- **Textura topográfica** sutil en algunas secciones de fondo.
- Estilo general: mucho aire, jerarquía tipográfica fuerte, una sola idea por sección.

## 5. Componentes (estilo)
- **Botón primario:** fondo `brand`, texto blanco, radius full, hover oscurece 8%. Ej. "Agenda una llamada".
- **Botón secundario:** borde `ink`, texto `ink`, fondo transparente. Ej. "Ver casos".
- **WhatsApp:** verde de WhatsApp o `ink` con ícono; texto "Escríbenos por WhatsApp".
- **ProofBar:** banda con 3-4 métricas grandes (número en `brand`, label en `muted`).
- **Tarjetas (servicios/sectores/blog):** fondo `bg`, borde `border`, radius `md`, título + 1 línea + enlace.
- **FAQ:** accordion accesible (`button` + `aria-expanded`), divisores `border`.
- **Header:** fondo `bg` translúcido al hacer scroll, mega-menú de Servicios (5 categorías → servicios) y Sectores; CTA naranja siempre visible. Sticky.
- **Footer:** fondo `ink`, texto claro, 4 columnas (Servicios · Sectores · Agencia · Contacto) + redes.

## 6. Accesibilidad
- Contraste AA, foco visible, navegación por teclado en menú y accordions.
- Un solo H1; jerarquía semántica real (no usar tamaños para fingir niveles).
- `alt` descriptivo en imágenes de contenido; decorativas `alt=""`/`aria-hidden`.

## 7. Tono visual del copy (recordatorio)
Titulares cortos y punzantes; nada de relleno; números reales (S/350K, 8 lotes, 75 reservas). El diseño debe dejar respirar al mensaje, no competir con él.
