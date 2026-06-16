# Brief técnico de build — suggestion.pe
Especificación para construir el sitio en Claude Code. Stack: **Next.js (App Router) + TypeScript + Tailwind + MDX**, deploy en **Vercel**.

---

## 1. Inicialización
```bash
npx create-next-app@latest suggestion --ts --tailwind --app --eslint --src-dir --import-alias "@/*"
cd suggestion
npm i next-mdx-remote gray-matter        # blog MDX
npm i -D @tailwindcss/typography
```
Node 18+. Configurar `next.config.mjs` con `images.formats = ['image/avif','image/webp']` y MDX.

## 2. Estructura de carpetas
```
src/
├── app/
│   ├── layout.tsx                 # <html lang="es">, Header, Footer, JSON-LD Organization+WebSite
│   ├── page.tsx                   # HOME
│   ├── sitemap.ts                 # sitemap dinámico
│   ├── robots.ts                  # robots
│   ├── nosotros/page.tsx
│   ├── casos/page.tsx
│   ├── contacto/page.tsx
│   ├── servicios/
│   │   ├── page.tsx               # pilar
│   │   └── [slug]/page.tsx        # 5 categorías + 16 servicios (data-driven)
│   ├── (sectores)/                # route group, URLs a raíz
│   │   ├── marketing-inmobiliario/page.tsx
│   │   ├── marketing-automotriz/page.tsx
│   │   ├── marketing-turismo/page.tsx
│   │   ├── marketing-marcas-consumo/page.tsx
│   │   └── marketing-salud/page.tsx
│   ├── sectores/page.tsx          # hub de sectores
│   └── blog/
│       ├── page.tsx               # pilar
│       ├── [categoria]/page.tsx   # 8 categorías
│       └── [categoria]/[slug]/page.tsx   # entradas (MDX)
├── components/                    # ver sección 5
├── content/
│   ├── servicios.ts               # data de las 16 + 5 categorías
│   ├── sectores.ts                # data de los 5 sectores
│   ├── navegacion.ts              # menú/footer
│   └── blog/                      # 24 .mdx
├── lib/                           # seo.ts, schema.ts, utils
└── styles/                        # tokens si hace falta
```

## 3. Enfoque data-driven (clave)
No hardcodear 41 páginas. Define el contenido en `content/` y genera con `generateStaticParams`.

**`content/servicios.ts`** — cada item:
```ts
export type Servicio = {
  slug: string; tipo: 'categoria' | 'servicio'; categoria?: string;
  nombre: string; metaTitle: string; metaDescription: string;
  h1: string; keywordPrincipal: string;
  secciones: Seccion[];     // H2/H3... con copy
  faq: { q: string; a: string }[];
  enlazaA: string[];        // slugs relacionados
  noindex?: boolean;        // true en categorías que duplican head de hijo
};
```
Carga el copy desde los docs 06-09 al poblar este archivo. Igual para `sectores.ts` (copy de doc 08).

## 4. Rutas y mapeo (resumen — detalle en doc 18)
- **Servicios** `/servicios/[slug]` → genera desde `servicios.ts`. Breadcrumb lógico: Home › Servicios › Categoría › Servicio.
- **Sectores** a raíz (`/marketing-inmobiliario`, etc.) vía route group `(sectores)`. Hub en `/sectores`.
- **Blog** `/blog`, `/blog/[categoria]`, `/blog/[categoria]/[slug]` (MDX con frontmatter: title, description, keyword, category, moneyPage, date).

## 5. Componentes mínimos
`Header` (logo + mega-menú Servicios▾/Sectores▾ + CTA), `Footer` (4 columnas), `Hero`, `CtaButton`/`WhatsAppButton`, `ProofBar` (S/350K · +350 leads · 8 lotes · 7 años), `SectionHeading` (controla nivel H2-H6), `ServiceGrid`, `SectorCard`, `Faq` (accordion accesible + emite FAQPage schema), `Testimonial`, `Breadcrumbs` (+ BreadcrumbList schema), `ContactForm` (Nombre·Negocio·Email·¿Qué quieres lograr? → arma link `wa.me`), `BlogCard`, `JsonLd`, `RelatedLinks`.

## 6. SEO — implementación
**Metadata por página** (Metadata API):
```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const s = getServicio(params.slug);
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `https://suggestion.pe/servicios/${s.slug}` },
    robots: s.noindex ? { index: false, follow: true } : undefined,
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: ..., locale: 'es_PE', type: 'website' },
  };
}
```
**`<JsonLd>`** (componente que inyecta `<script type="application/ld+json">`). Plantillas en doc 12: Organization+WebSite (en layout), ProfessionalService/LocalBusiness (Home), Service (servicios), FAQPage (donde haya FAQ), BreadcrumbList (todas), BlogPosting (entradas).

**`sitemap.ts`**: incluir las 41 + entradas; excluir `noindex`.
**`robots.ts`**: permitir todo + apuntar a `/sitemap.xml`.
**Canonicals** self-referenciales; servicio hijo es canónico de su keyword.
**hreflang** `es-PE` global.

## 7. Performance (Core Web Vitals)
- `next/image` con width/height, AVIF/WebP, `priority` solo en hero.
- `next/font` para fuentes (display swap).
- Lazy-load de secciones bajo el fold; evitar JS innecesario (la mayoría son Server Components).
- Objetivo: LCP < 2.5s, INP < 200ms, CLS < 0.1, Lighthouse ≥ 90.

## 8. Formulario y conversión
- `ContactForm` arma un mensaje y abre `https://wa.me/51937770159?text=...` (sin backend al inicio).
- Opcional fase 2: endpoint `/api/contacto` + envío de email.
- Eventos GA4: `whatsapp_click`, `form_submit`, `agenda_click`.

## 9. Analítica
- GA4 + Google Search Console (verificar dominio).
- Google Business Profile aparte (Ica) — no es del sitio pero es prioridad SEO local (doc 12).

## 10. Roadmap de build (orden)
1. **Setup** + `layout.tsx` (Header/Footer/JSON-LD global) + tokens de diseño (doc 17).
2. **Componentes base** (sección 5).
3. **Home** (`06`) — referencia de estilo.
4. **Datos + páginas de servicios** (16+5) desde `servicios.ts` (`06`,`07`,`09`).
5. **Sectores** (5 + hub) (`08`).
6. **Categorías + pilar + raíz** Nosotros/Casos/Contacto (`09`).
7. **Blog**: pilar, categorías, y 24 MDX (`13`,`14`,`15`).
8. **SEO técnico**: sitemap, robots, todos los JSON-LD, canonicals, noindex categorías.
9. **QA**: Rich Results Test, Lighthouse, responsive, enlazado interno, 404.
10. **Deploy Vercel** + dominio suggestion.pe + Search Console.

## 11. Checklist de aceptación (por página)
- [ ] Title ≤60 / description ≤155, únicos.
- [ ] H1 único + jerarquía exacta del doc 04/05.
- [ ] Copy literal del doc correspondiente.
- [ ] JSON-LD válido.
- [ ] CTA agenda + WhatsApp operativos.
- [ ] Responsive + Lighthouse SEO/Perf ≥ 90.
- [ ] Enlazado interno (categoría, sectores, blog) según silo.
