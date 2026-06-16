# CLAUDE.md — Repo de código del sitio web Suggestion (suggestion.pe)

> Este archivo va en la **raíz del repo de código**. Renómbralo a `CLAUDE.md`.
> El research, copy, SEO y plan ya están hechos y viven en `docs-fuente/`. Tu trabajo es **implementarlos en código**, no reinventarlos.

## Qué estamos construyendo
Sitio corporativo de 41 páginas + blog (24 entradas), orientado a SEO y a una sola conversión: **agendar una llamada** (WhatsApp/agenda como secundarios). Research, copy, estructura on-page, schema y plan **ya están hechos** en `docs-fuente/`.

## Stack (decidido)
- **Next.js (App Router) + TypeScript** — SSG/SSR para SEO.
- **Tailwind CSS** — con los tokens de `docs-fuente/17_Sistema_de_Diseno.md`.
- **MDX** para las entradas de blog.
- **Deploy: Vercel.**
- Sin librerías de UI pesadas; componentes propios y accesibles.

## Documentos fuente (NO inventar contenido) — todos en `docs-fuente/`
| Necesitas… | Archivo |
|---|---|
| Arquitectura/silos | `docs-fuente/01_Arquitectura_Silo_Suggestion.md` |
| Mapa de rutas y jerarquía | `docs-fuente/02_Mapa_del_Sitio_Completo.md` |
| Meta títulos + estructura H1-H6 (6 páginas top) | `docs-fuente/04_OnPage_SEO_Estructura.md` |
| Meta + estructura (35 páginas restantes) | `docs-fuente/05_OnPage_SEO_Resto_Paginas.md` |
| Copy Home + 5 servicios top | `docs-fuente/06_Copy_Home_y_Top6.md` |
| Copy 11 servicios | `docs-fuente/07_Copy_Resto_Servicios.md` |
| Copy 5 sectores + hub | `docs-fuente/08_Copy_Sectores.md` |
| Copy categorías, blog, raíz | `docs-fuente/09_Copy_Categorias_Blog_Raiz.md` |
| Análisis competidores y canibalización | `docs-fuente/10_Analisis_Competidores_y_Canibalizacion.md` |
| Plan de blog (24) | `docs-fuente/11_Plan_24_Entradas_Blog.md` |
| Schema JSON-LD + SEO técnico | `docs-fuente/12_Datos_Estructurados_y_SEO_Tecnico.md` |
| Entradas de blog redactadas | `docs-fuente/13`, `14`, `15_Blog_Entradas_*.md` |
| **Brief técnico de build** | `docs-fuente/16_Brief_Tecnico_Build.md` |
| **Sistema de diseño** | `docs-fuente/17_Sistema_de_Diseno.md` |
| **Índice ruta → contenido** | `docs-fuente/18_Indice_Contenido_y_Rutas.md` |
| Keywords (matriz por página) | `docs-fuente/03_Keywords_Master_Suggestion.xlsx` |

## Reglas de oro
1. **Una keyword principal por página**; respeta la asignación de `docs-fuente/10_…md` (Home = "agencia de marketing digital"; Marketing Digital = head del servicio; Publicidad Digital = "google ads/pauta").
2. **Un solo H1 por página.** Jerarquía H2-H6 exactamente como en docs 04/05, sin saltar niveles.
3. **Categorías de servicio = páginas hub.** Si una solo duplica el head de un hijo, márcala `noindex` (ver doc 10).
4. **Cada página lleva su Schema JSON-LD** (doc 12) vía un componente `<JsonLd>`.
5. **CTA primario en toda página:** "Agenda una llamada". Secundario: WhatsApp `+51 937 770 159`.
6. **Mobile-first, Core Web Vitals primero.** `next/image` (AVIF/WebP), fuentes optimizadas, lazy loading.
7. **Voz de marca:** directa, anti-vanidad, transparente. "Convertimos atención en ventas. No es lo que ves." No agregar relleno ni cambiar el copy aprobado.
8. **Idioma:** español Perú. `lang="es"`, `hreflang="es-PE"`.

## Datos de contacto / marca
- Marca: **Suggestion** · Dominio: **suggestion.pe** · Base: **Ica, Perú** (atención nacional).
- WhatsApp: **+51 937 770 159** · Email: **hola@suggestion.pe**
- Instagram: `suggestion.mkt` · Facebook: `Suggestion.mk`
- Colores: naranja `#F26A21` + cian (ver doc 17).

## Orden de trabajo
Sigue el roadmap de `docs-fuente/16_Brief_Tecnico_Build.md` (setup → layout/componentes → Home → servicios → sectores → blog → SEO técnico → QA → deploy). Build guiado por datos (`content/servicios.ts`, `content/sectores.ts`) en vez de páginas hardcodeadas.

## Definición de "terminado" por página
Meta title/description correctos · H1 único + jerarquía exacta · copy del doc correspondiente · Schema válido (Rich Results Test) · CTA funcionando · responsive · Lighthouse ≥ 90 en SEO y Performance.

## Flujo de git
Trabaja en la rama `feat/web-suggestion`. La página de prueba actual queda intacta en `main` hasta que el sitio esté listo para reemplazarla. Haz commits descriptivos por bloque del roadmap.
