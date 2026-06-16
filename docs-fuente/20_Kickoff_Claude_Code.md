# Cómo arrancar el build en Claude Code — paso a paso

## Paso 0 — Meter la info en el repo (clave)
Claude Code solo "ve" lo que está dentro de la carpeta del repo. Antes de pedirle nada:

1. En tu repo (el de GitHub con la página de prueba), crea una rama nueva:
   ```bash
   git checkout -b feat/web-suggestion
   ```
2. Crea una carpeta `docs-fuente/` en la raíz del repo y **copia ahí todos** los archivos de esta carpeta de research:
   `00`…`18` (.md) + `03_Keywords_Master_Suggestion.xlsx`.
3. Copia también el `CLAUDE.md` de research a la raíz del repo (Claude Code lo lee automáticamente como contexto), pero ajusta una línea: donde dice "estos archivos en esta carpeta", cámbialo por "en `docs-fuente/`".
4. Borra el archivo basura `~$03_Keywords_Master_Suggestion.xlsx`.

> Sobre la página de prueba: el nuevo sitio Next.js la reemplaza. No la borres aún — quédate en la rama `feat/web-suggestion` y la fusionas a `main` cuando esté lista. Dile a Claude Code qué es la página de prueba (HTML estático / otro Next / etc.) para que sepa si la archiva o la sobrescribe.

---

## Paso 1 — Primer prompt (péstalo tal cual en Claude Code)

```
Vas a construir el sitio web de Suggestion (suggestion.pe). NO inventes contenido:
todo el research, copy, estructura on-page, schema y plan ya están hechos y son la
única fuente de verdad. Están en la carpeta docs-fuente/ y el resumen de reglas en
el CLAUDE.md de la raíz.

Antes de escribir una sola línea de código:
1. Lee CLAUDE.md y estos docs de docs-fuente/: 16 (brief técnico de build),
   17 (sistema de diseño), 18 (índice ruta→contenido), 01, 02, 04, 06, 12.
2. Resúmeme en 10 líneas: stack, estructura de carpetas, enfoque data-driven,
   y el roadmap de build en orden.
3. Dime qué hay hoy en el repo (incluida la página de prueba) y cómo propones
   integrar el nuevo sitio sin romper nada (rama feat/web-suggestion).

NO ejecutes create-next-app todavía. Primero confírmame que entendiste el plan.
```

Esto evita que arranque a ciegas. Cuando te devuelva el resumen y veas que entendió, sigues por bloques.

---

## Paso 2 — Construir por bloques (un mensaje por bloque, en este orden)

Sigue el roadmap del doc 16. No le pidas "construye todo" de una; va por etapas para poder revisar cada una:

1. **Setup + layout global**
   `Ejecuta el setup del doc 16 §1 (create-next-app TS+Tailwind+App Router+src-dir, MDX). Configura next.config, los tokens de diseño del doc 17, y el layout.tsx con Header, Footer y JSON-LD Organization+WebSite. Aún sin contenido de páginas.`

2. **Componentes base**
   `Crea los componentes del doc 16 §5 (Header con mega-menú, Footer, Hero, CtaButton/WhatsAppButton, ProofBar, SectionHeading, Faq con FAQPage schema, Breadcrumbs, ContactForm a wa.me, JsonLd, etc.). Accesibles, Server Components donde se pueda.`

3. **Home** (referencia de estilo)
   `Construye la Home con el copy literal del doc 06 §1, estructura H del doc 04 §1 y schema del doc 12. CTA primario "Agenda una llamada", secundario WhatsApp +51 937 770 159.`

4. **Datos + páginas de servicios (16+5)**
   `Crea content/servicios.ts poblado con el copy de los docs 06, 07 y 09 y la estructura/meta de docs 04-05. Genera /servicios/[slug] data-driven con generateStaticParams. Respeta keyword principal única por página (doc 10) y noindex en categorías que dupliquen al hijo.`

5. **Sectores (5 + hub)** → `content/sectores.ts` con copy del doc 08.

6. **Categorías + pilar + raíz** (Nosotros/Casos/Contacto) → doc 09.

7. **Blog** → pilar, 8 categorías y 24 MDX desde docs 13-15 (frontmatter: title, description, keyword, category, moneyPage, date).

8. **SEO técnico** → sitemap.ts, robots.ts, todos los JSON-LD, canonicals self-ref, hreflang es-PE, noindex donde toque.

9. **QA** → Lighthouse ≥90 SEO/Perf, Rich Results Test, responsive, enlazado interno por silo, 404.

10. **Deploy** → push a la rama, PR, merge a main, Vercel + dominio suggestion.pe + Search Console.

---

## Reglas que conviene recordarle al inicio (ya están en CLAUDE.md, pero refuérzalas)
- Una keyword principal por página; copy literal de los docs, sin relleno.
- Un solo H1 por página; jerarquía H2-H6 exacta de docs 04/05.
- Cada página con su Schema (doc 12) vía `<JsonLd>`.
- CTA primario "Agenda una llamada" + WhatsApp +51 937 770 159 en toda página.
- Mobile-first, Core Web Vitals primero, `next/image`.
- Voz de marca: directa, anti-vanidad. Español Perú (`lang="es"`, hreflang `es-PE`).

## Tip de control
Después de cada bloque, pídele: *"corre `npm run build` y muéstrame que compila sin errores antes de seguir"*. Y revisa tú la Home (bloque 3) antes de dejar que genere las 41 páginas — esa define el estilo de todo lo demás.
```
