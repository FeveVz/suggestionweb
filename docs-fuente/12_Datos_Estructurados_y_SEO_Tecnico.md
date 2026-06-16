# Datos estructurados (Schema) + SEO técnico — Suggestion
Las mejores técnicas, aplicadas a suggestion.pe. Todo el Schema en **JSON-LD** (formato recomendado por Google), inyectado en el `<head>` o antes de `</body>`.

---

## 1. Qué Schema lleva cada tipo de página

| Tipo de página | Schema principal | Schema de apoyo |
|---|---|---|
| **Global (todas)** | `Organization` + `WebSite` | `BreadcrumbList` |
| **Home** | `ProfessionalService` (LocalBusiness) | `Organization`, `WebSite`+SearchAction |
| **Servicios (16)** | `Service` | `BreadcrumbList`, `FAQPage`, `Offer` |
| **Categorías hub** | `CollectionPage` / `ItemList` | `BreadcrumbList` |
| **Sectores (5)** | `Service` (areaServed por rubro) | `FAQPage`, `BreadcrumbList` |
| **Casos** | `ItemList` de `CreativeWork`/`Review` | `Organization` |
| **Blog pilar** | `Blog` | `BreadcrumbList` |
| **Entradas blog** | `BlogPosting` | `FAQPage`, `BreadcrumbList`, `VideoObject` |
| **Contacto** | `ContactPage` | `Organization` |
| **Audiovisual** | `Service` + `VideoObject` | — |

---

## 2. Bloques JSON-LD listos (plantillas)

### 2.1 LocalBusiness / ProfessionalService — clave para SEO local de Ica
> El activo SEO más rentable: te hace elegible para el paquete local de Google (mapa) en "imprenta en Ica", "agencia de marketing Ica", etc. Va en Home + se refuerza con Google Business Profile.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://suggestion.pe/#org",
  "name": "Suggestion",
  "description": "Agencia de marketing de performance en Ica, Perú. Convertimos atención en ventas.",
  "url": "https://suggestion.pe",
  "logo": "https://suggestion.pe/logo.png",
  "image": "https://suggestion.pe/og-image.png",
  "telephone": "+51937770159",
  "email": "hola@suggestion.pe",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "addressLocality": "Ica", "addressRegion": "Ica", "addressCountry": "PE" },
  "areaServed": [ {"@type":"City","name":"Ica"}, {"@type":"Country","name":"Perú"} ],
  "sameAs": [
    "https://www.instagram.com/suggestion.mkt/",
    "https://www.facebook.com/Suggestion.mk"
  ]
}
```
*Completar `address` con calle y `geo` (lat/long) cuando definas dirección pública; es lo que más empuja el ranking local.*

### 2.2 WebSite + SearchAction (caja de búsqueda en Google)
```json
{
  "@context":"https://schema.org","@type":"WebSite",
  "url":"https://suggestion.pe",
  "name":"Suggestion",
  "potentialAction":{"@type":"SearchAction",
    "target":"https://suggestion.pe/buscar?q={search_term_string}",
    "query-input":"required name=search_term_string"}
}
```

### 2.3 Service — en cada página de servicio
```json
{
  "@context":"https://schema.org","@type":"Service",
  "serviceType":"Branding e identidad de marca",
  "provider":{"@id":"https://suggestion.pe/#org"},
  "areaServed":{"@type":"Country","name":"Perú"},
  "description":"Branding estratégico: naming, logotipo, manual de marca e identidad visual.",
  "url":"https://suggestion.pe/servicios/branding"
}
```

### 2.4 FAQPage — en cada página con FAQ (servicios, sectores, blog)
```json
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"¿Qué es un rebranding y cuándo conviene?",
     "acceptedAnswer":{"@type":"Answer","text":"Es renovar una marca existente. Conviene cuando ya no representa lo que eres o se ve desactualizada frente a la competencia."}}
  ]
}
```
> Webtilia usa esto y por eso aparece con FAQ desplegables en Google. **Replicar en todas las páginas con FAQ.** Las respuestas del JSON deben ser idénticas a las visibles en la página (política de Google).

### 2.5 BreadcrumbList — en todas
```json
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Inicio","item":"https://suggestion.pe"},
    {"@type":"ListItem","position":2,"name":"Servicios","item":"https://suggestion.pe/servicios"},
    {"@type":"ListItem","position":3,"name":"Branding","item":"https://suggestion.pe/servicios/branding"}
  ]
}
```

### 2.6 BlogPosting — en cada entrada
```json
{
  "@context":"https://schema.org","@type":"BlogPosting",
  "headline":"Cómo crear un logo: gratis, con IA o profesional",
  "datePublished":"2026-07-01","dateModified":"2026-07-01",
  "author":{"@type":"Organization","name":"Suggestion"},
  "publisher":{"@id":"https://suggestion.pe/#org"},
  "image":"https://suggestion.pe/blog/crear-logo.jpg",
  "mainEntityOfPage":"https://suggestion.pe/blog/marca/como-crear-logo"
}
```

### 2.7 Reseñas / Casos — con honestidad
Tus testimonios (Rosario, Jorge, Roberto) se marcan como `Review` dentro de la `Organization`. **Importante y honesto:** desde 2023 Google **no muestra estrellas (rich snippet)** para reseñas que la propia empresa se pone (self-serving) en su web. Sí ayuda a contexto/E-E-A-T, pero no esperes estrellas en el buscador con esto. Las estrellas reales vienen de **reseñas en Google Business Profile**. Acción: marca los testimonios como `Review` para E-E-A-T, y trabaja reseñas en Google Maps para las estrellas.

### 2.8 VideoObject — páginas/entradas con video
```json
{"@context":"https://schema.org","@type":"VideoObject",
 "name":"Spot — Suggestion","thumbnailUrl":"https://suggestion.pe/...jpg",
 "uploadDate":"2026-07-01","contentUrl":"https://...","description":"..."}
```

---

## 3. Checklist de SEO técnico (las mejores prácticas)

### 3.1 Indexación y rastreo
- `robots.txt` que permita rastreo y apunte al sitemap.
- `sitemap.xml` dinámico con las 41 páginas + entradas; enviarlo en Search Console.
- **Categorías hub `noindex`** si solo duplican el head de un hijo (ver canibalización, doc 10).
- **Canonical** en cada URL hacia sí misma; servicio hijo = canónica de su keyword.
- URLs limpias, en minúscula, sin parámetros (ya definidas en el mapa).

### 3.2 On-page (ya cubierto en docs 04/05)
- **Un solo H1** por página · jerarquía H2-H6 sin saltos.
- Keyword principal en: H1, primer párrafo, meta title, URL, alt de imagen principal.
- Meta title ≤ 60 / description ≤ 155, únicos por página.
- Enlazado interno con anchor descriptivo (no "clic aquí").

### 3.3 Core Web Vitals y rendimiento (Vercel ayuda)
- LCP < 2,5 s · INP < 200 ms · CLS < 0,1.
- Imágenes en **WebP/AVIF**, con `width/height` y `loading="lazy"`.
- Fuentes con `font-display:swap`; CSS/JS crítico en línea, resto diferido.

### 3.4 Mobile e internacionalización
- **Mobile-first** (Google indexa la versión móvil).
- `lang="es"` + `hreflang="es-PE"` (mercado Perú).
- HTTPS en todo (Vercel lo da por defecto).

### 3.5 Local SEO (tu quick win con Ica)
- **Google Business Profile** verificado y optimizado: categoría "Agencia de marketing"/"Imprenta", servicios, fotos, horario, reseñas.
- **NAP consistente** (Nombre, Dirección, Teléfono) idéntico en web, GBP y directorios.
- `LocalBusiness` schema (2.1) + página con dirección/mapa embebido.
- Reseñas en Google Maps (campaña de pedido de reseñas a clientes).

### 3.6 Medición
- **GA4** + **Search Console** + eventos de conversión (clic WhatsApp, envío de formulario, agenda).
- Marcado de eventos para medir CRO real (no solo tráfico).

---

## 4. Prioridad de implementación
1. **LocalBusiness + GBP + NAP** (impacto local inmediato; tu ventaja sobre los de Lima).
2. **FAQPage schema** en todas las páginas con FAQ (lo que hace destacar a Webtilia).
3. **Service + BreadcrumbList** en los 16 servicios.
4. **Core Web Vitals** (Vercel facilita el 90%).
5. **BlogPosting** al publicar las 24 entradas.
6. `noindex`/canonical para resolver canibalización de categorías.
