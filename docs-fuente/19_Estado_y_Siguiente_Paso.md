# Estado del proyecto y siguiente paso — suggestion.pe
_Última revisión: 2026-06-16 (chequeo automático)_

## Veredicto
La **fase de research/copy/SEO está cerrada y es consistente**. El cuello de botella ahora es **el build en código**, que no ha empezado (no hay proyecto Next.js en la carpeta).

## Qué está listo (verificado)
- **Playbook + arquitectura silo + mapa del sitio** (docs 00–02).
- **Keyword Master** (`03_…xlsx`): 4 hojas — Matriz (26 clusters), Detalle (1.041 kw), Long-tail/blog (484), Descartados (401).
- **On-page** meta + jerarquía H1–H6 de las 41 páginas (docs 04–05).
- **Copy aprobado** Home + 16 servicios + 5 sectores + categorías/blog/raíz (docs 06–09).
- **Canibalización resuelta** (doc 10): **0 keywords principales duplicadas** entre páginas. Verificado.
- **Plan de 24 entradas de blog + entradas redactadas** (docs 11, 13–15).
- **Schema JSON-LD + SEO técnico** (doc 12).
- **Brief de build + sistema de diseño + índice ruta→contenido** (docs 16–18).
- Total mapeado: **41 páginas estructurales + 24 entradas = 65 rutas**, todas con estructura, copy y schema asignados.

## Hallazgos del chequeo
- Sin canibalización en keyword principal. ✔
- Cada ruta del índice (doc 18) tiene fuente de estructura, copy y schema. ✔
- Pendiente menor: hay un lockfile temporal de Excel `~$03_Keywords_Master_Suggestion.xlsx` en la carpeta (basura, se puede borrar).

## Siguiente paso (1 solo gate)
**Arrancar el build Next.js** siguiendo el roadmap del doc 16:
1. `create-next-app` (TS + Tailwind + App Router + src-dir) + MDX.
2. `layout.tsx` (Header/Footer + JSON-LD Organization/WebSite) + tokens del doc 17.
3. Componentes base (doc 16 §5).
4. **Home como referencia de estilo** (copy doc 06).
5. Poblar `content/servicios.ts` y `content/sectores.ts` con el copy de docs 06–09 → generar 16+5 páginas data-driven.

> Decisión pendiente para Abraham: **¿dónde vive el repo del código?** Conviene una carpeta/repo aparte (p. ej. `suggestion-web/`), no esta de research, y conectarla a Vercel + GitHub. Una vez definido, el build puede ejecutarse por bloques del roadmap (1→10).

## Recomendación de orden de ataque
Home → servicios (mayor volumen: Marketing Digital 50k, Merchandising 50k) → sectores → blog → SEO técnico → QA Lighthouse/Rich Results → deploy.
