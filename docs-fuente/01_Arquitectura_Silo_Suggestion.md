# Arquitectura Silo — Web de Suggestion
**Dominio:** suggestion.pe · **Posicionamiento:** agencia de performance, Ica + alcance nacional · **Conversión:** reunión agendada (WhatsApp/llamada como secundarios).

Basado en el sitio actual (suggestionweb.vercel.app). Mantenemos la voz de marca: *"Convertimos atención en ventas. No es lo que ves."*

---

## Principio rector: 3 silos + páginas raíz

Un **silo** es un grupo temático cerrado: una página pilar manda autoridad a sus hijas, las hijas enlazan entre sí y de vuelta al pilar. El enlazado **fuerte vive dentro del silo**; entre silos solo se cruza de forma controlada (sector → servicio, blog → servicio/sector).

```
suggestion.pe
├── HOME
├── Páginas raíz: Nosotros · Casos · Contacto
├── SILO 1 — SERVICIOS      (qué hacemos · estandarizado por precio/proceso)
├── SILO 2 — SECTORES       (rubros · captura demanda vertical)
└── SILO 3 — BLOG           (autoridad · clusters que alimentan los silos)
```

**La regla que resuelve tu duda:** Servicios y Sectores son silos distintos.
- El servicio "Meta Ads" se vende a los 5 sectores → 1 sola página, sin duplicar.
- El sector "Inmobiliario" enlaza a los servicios que ese rubro consume (Meta Ads, Desarrollo web, CRM, Producción audiovisual).
- Esto es una **matriz Servicio × Sector**: máxima cobertura SEO, cero canibalización.

---

## SILO 1 — SERVICIOS (16 reales + 5 categorías + 1 pilar)

> **Fuente de verdad:** los 16 servicios públicos del sitio en vivo. Cada servicio está estandarizado por precio y proceso. **Una página por servicio.** Uso los **nombres exactos de la web** y los agrupo en 5 categorías de cara al cliente.

Pilar: **/servicios** — keyword pilar: *agencia de marketing / servicios de marketing digital*.

### Categoría A — Estrategia y datos · `/servicios/estrategia`
*(keyword cat.: consultoría de marketing / estudio de mercado)*
1. **Consultoría** — `/servicios/consultoria` *(asesoría estratégica personalizada)*
2. **Investigación de Mercado** — `/servicios/investigacion-de-mercado` *(datos e insights para decisiones)*

### Categoría B — Marketing y publicidad digital · `/servicios/marketing-digital-publicidad`
*(keyword cat.: agencia de marketing digital / pauta)*
3. **Marketing Digital** — `/servicios/marketing-digital` *(estrategia integral / paquete 360)*
4. **Publicidad Digital** — `/servicios/publicidad-digital` *(Meta Ads, Google Ads y más, con ROI medible)*
5. **Redes Sociales** — `/servicios/redes-sociales` *(gestión de comunidades y contenido)*

### Categoría C — Web, SEO y automatización · `/servicios/web-seo`
*(keyword cat.: diseño web / posicionamiento / automatización)*
6. **Desarrollo Web** — `/servicios/desarrollo-web` *(sitios optimizados, rápidos, para convertir)*
7. **SEO** — `/servicios/seo` *(posicionamiento orgánico)*
8. **CRM y Automatización** — `/servicios/crm-automatizacion` *(automatiza procesos y escala)*

### Categoría D — Marca y contenido · `/servicios/marca-contenido`
*(keyword cat.: branding / producción audiovisual)*
9. **Branding** — `/servicios/branding` *(identidad visual y estratégica)*
10. **Producción Audiovisual** — `/servicios/produccion-audiovisual` *(contenido visual de alto impacto; incluye drone)*

### Categoría E — Activación y medios físicos (BTL / OOH) · `/servicios/btl-medios`
*(keyword cat.: BTL / publicidad exterior / merchandising)*
11. **BTL y Activaciones** — `/servicios/btl` *(experiencias presenciales que conectan)*
12. **Publicidad Móvil** — `/servicios/publicidad-movil` *(tu marca en movimiento; bicivallas, volanteo)*
13. **Estructuras Publicitarias** — `/servicios/estructuras-publicitarias` *(billboards, espectaculares, tótems, módulos)*
14. **Material POP** — `/servicios/material-pop` *(destaca en el punto de venta)*
15. **Imprenta Corporativa** — `/servicios/imprenta` *(material impreso de calidad)*
16. **Merchandising** — `/servicios/merchandising` *(artículos promocionales que refuerzan tu marca)*

> **Tensión de marca resuelta:** el home lidera con performance ("convertimos atención en ventas"); el catálogo de servicios cubre toda tu operación (digital + BTL + impresión + merch). El copy de cada página rankea por su keyword, pero siempre devuelve al método y empuja a la reunión. Performance es la punta de lanza; lo físico/BTL es el músculo operativo que pocas agencias de Ica tienen.
>
> **Notas de mapeo:** "Google Ads" y "TikTok Ads" no son servicios sueltos: viven dentro de **Publicidad Digital** (keywords secundarias o landing SEO si el research lo justifica). "Drone" vive dentro de **Producción Audiovisual**. "Marketing Digital" es el paquete integral; su página debe diferenciarse de las específicas para no canibalizar (apunta a *agencia de marketing digital*, no a *meta ads*).

---

## SILO 2 — SECTORES / RUBROS (5 landings · URLs a raíz)

Hub: **/sectores** (página que lista los rubros). **Las landings van a raíz** (URL corta y con keyword exacta), conectadas por el hub, breadcrumbs y enlazado interno. Cada landing captura la keyword vertical y **enlaza hacia adentro** a 3-5 servicios clave de ese rubro. Aquí viven inmobiliario y automotriz.

1. **Marketing inmobiliario** — `/marketing-inmobiliario`
   → enlaza a: Meta Ads, Desarrollo web, CRM y automatización, Producción audiovisual (drone).
2. **Marketing automotriz** — `/marketing-automotriz`
   → enlaza a: Meta Ads, CRM y automatización, Redes sociales, BTL / activaciones.
3. **Marketing turístico / hotelero** — `/marketing-turismo`
   → enlaza a: Meta Ads, Redes sociales, Producción audiovisual, Mantenimiento web & SEO.
4. **Marketing para marcas y consumo** — `/marketing-marcas-consumo`
   → enlaza a: Meta Ads, Branding, Producción audiovisual, Material POP / Merchandising.
5. **Marketing para salud** (clínicas, policlínicos, profesionales de la salud) — `/marketing-salud`
   → enlaza a: Meta Ads, Desarrollo web, Mantenimiento web & SEO, CRM y automatización.

> **Nota URL:** rubros a raíz = URLs más cortas y con keyword exacta (`/marketing-inmobiliario`). El silo no se sostiene por el anidado de carpeta sino por el hub `/sectores` + breadcrumbs + enlazado interno controlado.

---

## SILO 3 — BLOG (1 pilar + 8 categorías + entradas)

Pilar: **/blog**. Cada **categoría = un cluster** alineado a un silo, para que el enlazado interno empuje autoridad hacia las money pages (servicios y sectores).

| Categoría blog | URL | Alimenta a | Ejemplos de entradas |
|---|---|---|---|
| Performance & pauta | `/blog/performance` | Publicidad digital | "¿Cuánto invertir en Meta Ads en Perú?", "CPL vs ROAS: qué mirar de verdad" |
| Conversión & CRO | `/blog/conversion` | Conversión web | "Anatomía de una landing que agenda citas", "5 fugas del embudo que matan tu venta" |
| Marca & contenidos | `/blog/marca` | Marca y contenido | "Branding que vende vs branding bonito", "Copywriting persuasivo para servicios" |
| IA y automatización | `/blog/ia-automatizacion` | CRM y Automatización, Marketing Digital | "IA aplicada al marketing: qué sí funciona", "Automatiza tu seguimiento de leads en WhatsApp" |
| Psicología de mercado | `/blog/psicologia-de-mercado` | Branding, Publicidad Digital, Marketing Digital | "Por qué la gente compra: 6 gatillos de decisión", "Segmentación por estilos de vida (Arellano)" |
| Marketing inmobiliario | `/blog/inmobiliario` | Sector inmobiliario | "Cómo llenar tu pipeline de citas en preventa", "Drone para proyectos: qué vende" |
| Marketing automotriz | `/blog/automotriz` | Sector automotriz | "Del clic al test drive: campañas para concesionarios", "Leads de autos que sí cierran" |
| Turismo, consumo y salud | `/blog/sectores` | Sectores turismo/consumo/salud | "Reservas en temporada baja con performance", "Marketing para clínicas sin quemar presupuesto" |

**Regla de enlazado del blog:** cada entrada enlaza ↑ al servicio o sector que monetiza el tema (con CTA a reunión), y ↔ a 1-2 entradas hermanas de la misma categoría. Nunca dejamos una entrada "huérfana".

---

## Páginas raíz (fuera de silo)

| Página | URL | Rol |
|---|---|---|
| **Home** | `/` | Posicionamiento global + reparte autoridad a los 3 silos. Keyword: *agencia de marketing de performance Perú*. |
| **Nosotros / Método** | `/nosotros` | Confianza, equipo, el método "Leemos · Moldeamos · Convertimos · Medimos". |
| **Casos de éxito** | `/casos` | Pilar de prueba social. Ceinys, Granjas Bonanza, Hoteles Señor de Luren. (Cada caso puede ser su propia página luego.) |
| **Contacto / Agenda** | `/contacto` | El destino de conversión: reunión agendada. |

---

## Conteo total de páginas (fase 1)

| Bloque | Páginas |
|---|---|
| Home | 1 |
| Raíz (Nosotros, Casos, Contacto) | 3 |
| Servicios (pilar + 5 categorías + 16 servicios reales) | 22 |
| Sectores (hub + 5 landings a raíz) | 6 |
| Blog (pilar + 8 categorías) | 9 |
| **Subtotal estructural** | **41** |
| + Entradas de blog | escalable (arrancamos con 2-3 por categoría = 12-18) |

> El copy de esta fase cubre: Home, los 16 servicios, las 5 categorías, los 5 sectores, las páginas raíz y la estructura del blog. Las entradas se redactan en tandas dentro de su cluster.

---

## Reglas de integridad del Silo (para no romperlo)

1. **Servicios anidados:** `/servicios/meta-ads` cuelga de `/servicios` (la URL refleja el silo). **Sectores a raíz:** `/marketing-inmobiliario` (el silo lo sostienen el hub + breadcrumbs + enlazado, no la carpeta).
2. **Breadcrumbs en todo:** Servicios → Home › Servicios › Performance y gestión digital › Meta Ads · Sectores → Home › Sectores › Marketing inmobiliario.
3. **Enlazado interno:** fuerte dentro del silo; cruces controlados Sector→Servicio y Blog→(Servicio/Sector). Evitar enlaces sueltos que diluyan.
4. **Una keyword principal por página.** Si dos pelean por la misma, una es principal y la otra la usa de secundaria.
5. **Cada página = 1 intención = 1 CTA primario** (agendar reunión).

---

## Decisiones cerradas (15-jun-2026)
1. ✅ **16 servicios reales** = los nombres públicos del sitio en vivo, en 5 categorías de cara al cliente.
2. ✅ **5 sectores**: inmobiliario, automotriz, turismo, marcas/consumo y **salud** (clínicas, policlínicos, profesionales).
3. ✅ **Rubros a raíz** (`/marketing-inmobiliario`); servicios anidados en `/servicios/...`.
4. Google Ads, TikTok Ads y Drone = capacidades dentro de servicios padre (Publicidad Digital / Producción Audiovisual); se vuelven landing SEO solo si el research lo justifica.

Pendiente: realinear las semillas del Keyword Planner servicio por servicio (lista de 16 final). Con eso, arrancamos extracción.
