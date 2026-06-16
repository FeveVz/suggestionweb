# Análisis de competidores + Revisión de canibalización — Suggestion
Fecha: jun-2026 · URL final del proyecto: **suggestion.pe**

---

## 1. Competidores analizados

### 1.1 Asuntos Digitales — `asuntosdigitales.com` · NO es competidor
Es una **escuela de negocios online** española (plataforma Kajabi), enfocada en formación y capacitación en IA para empresas. No es agencia de marketing y no compite por tus keywords de servicio. **Acción:** descartarlo del set competitivo (no perdemos tiempo ahí). Útil solo como referencia de cómo posicionan contenido de IA.

### 1.2 marketingdigital.pe — Competidor directo (débil)
- **Fortaleza única:** dominio de concordancia exacta (`marketingdigital.pe`) → empuja para "marketing digital" / "agencia de marketing digital".
- **Estructura:** un servicio por página (silo correcto): marketing-digital, diseno-de-paginas-web, gestion-de-redes-sociales, posicionamiento-seo, tiendas-online, social-media, branding, publicidad-online, campanas-sem, marketing-sms, diseno-de-logotipos, videos-corporativos.
- **Debilidades (oportunidad para ti):** web desactualizada (tema 2021, WordPress placeholder), home con copy pobre y genérico, promesas de vanidad ("ya son #1 en Google"), **sin prueba de resultados**, **sin sectores**, **sin servicios físicos**.
- **Cómo ganarles:** copy de performance con números reales, sectores, y todo tu bloque físico (imprenta/BTL/merch) que ellos no tienen.

### 1.3 Webtilia — Competidor fuerte (benchmark)
- **Autoridad:** 20 años, Lima, Google Premier Partner + HubSpot partner, clientes grandes (Aceros Arequipa, Yamaha, OXXO, Fridays, Castrol).
- **Servicios:** SEO, CRO, Creatividad, Desarrollo Web, Audiovisuales (WTL Studio), Planeamiento, Email Marketing, Branding, Growth Marketing, Publicidad Digital, Gestión de CRM, Social Media.
- **SEO a imitar:** bloque de **FAQ extenso con FAQPage schema** ("¿qué hace una agencia?", "¿cuánto cobran?", "¿cómo trabajan?", "ventajas de una agencia en Lima") + sección de **ventajas locales (Lima)**. Blog activo ("Tendencias") con contenido de IA, growth y keyword research.
- **Debilidades (tu oportunidad):** **cero servicios físicos** (BTL, imprenta, estructuras, POP, merch, publicidad móvil), foco 100% Lima/digital, no atacan Ica.
- **Cómo competir:** no pelees su autoridad de marca de frente; gánale en **Ica (local)**, en **servicios físicos** y en **sectores con casos concretos**. Copia su disciplina de FAQ + schema.

### 1.4 Marca Lima — Competidor adyacente (nicho social)
- **Posicionamiento:** "agencia de comunicación con **valor social**". Branding, comunicación estratégica, producción audiovisual, creación de contenido, diseño web, gestión y publicidad digital. Clientes institucionales (Google, Pepsico, Natura, BRECA, ONGs).
- **No es agencia de performance/leads:** juega en branding y comunicación con propósito.
- **Solapa contigo solo en:** branding, audiovisual, publicidad digital. **No compite** en performance comercial, sectores ni físico.

---

## 2. Mapa competitivo y foso de Suggestion

| Eje | marketingdigital.pe | Webtilia | Marca Lima | **Suggestion** |
|---|---|---|---|---|
| Performance / leads medibles | Promesa, sin prueba | Sí (growth) | No | **Sí, con números reales** |
| Foco local **Ica** | No (Lima) | No (Lima) | No (Lima) | **Sí — espacio libre** |
| Servicios físicos (BTL, imprenta, POP, estructuras, merch, pub. móvil) | No | No | No | **Sí — moat exclusivo** |
| Sectores con casos | No | Casos sueltos | Casos sociales | **Sí (5 sectores + casos)** |
| FAQ + Schema | No | **Sí (referente)** | Parcial | A implementar (ver doc 11) |
| Autoridad de dominio | Media (EMD) | **Alta** | Media-alta | Nueva (a construir) |

**Tres jugadas ganadoras:**
1. **Domina "Ica".** Nadie pelea el local. "agencia de marketing Ica", "imprenta en Ica", "diseño web Ica" → con Google Business Profile son victorias rápidas.
2. **Explota el físico.** Imprenta, gigantografías, estructuras, merchandising, BTL, publicidad móvil: alta demanda y **competencia casi nula** entre estas agencias. Tráfico que ellos no capturan.
3. **Gana con prueba, no con humo.** Mientras marketingdigital.pe promete "#1 en Google", tú muestras S/350K, 8 lotes, 75 reservas. La transparencia es tu diferencial de conversión.

---

## 3. Revisión de canibalización (resuelta)

Detecté **dos focos de canibalización** en la arquitectura. Aquí la resolución para que cada keyword tenga un solo dueño.

### 3.1 Marketing Digital ↔ Publicidad Digital ↔ Home
Las tres orbitan "marketing/publicidad digital". Asignación de **dueño único de keyword**:

| Página | Keyword principal (única) | NO debe atacar |
|---|---|---|
| **Home** `/` | agencia de marketing digital (+ geo: Ica/Perú) | "marketing digital" a secas, "google ads" |
| **Marketing Digital** `/servicios/marketing-digital` | marketing digital · servicio/plan de marketing digital | "agencia de marketing digital", "google ads", "meta ads" |
| **Publicidad Digital** `/servicios/publicidad-digital` | publicidad digital · **google ads** · meta ads · pauta | "marketing digital" (head) |

Regla: la Home capta la intención de **"quiero una agencia"**; Marketing Digital, la de **"quiero el servicio integral"**; Publicidad Digital, la de **"quiero pauta/ads"**. Se enlazan entre sí, pero ninguno repite el H1 del otro.

### 3.2 Categorías hub ↔ servicios hijos (el riesgo real)
Las categorías que propuse (doc 04/05) tomaban el **mismo head** que un hijo: Categoría C ("diseño de paginas web") = Desarrollo Web; Categoría D ("branding") = Branding. Eso **canibaliza**. Resolución recomendada:

- **Las 5 categorías son páginas-hub de navegación, no de ranking.** Cada una: H1 con un término **umbrella distinto** (no el del hijo) + intro corta + enlaces a sus servicios. Ejemplos de head umbrella sin colisión:
  - A → "estrategia y consultoría de marketing" (no "estrategia de marketing" a secas).
  - B → "agencia de marketing digital" *(ojo: colisiona con Home → mejor dejar B como hub sin pelear keyword)*.
  - C → "agencia de desarrollo web y SEO" (no "diseño de páginas web").
  - D → "agencia de branding y contenido" (no "branding").
  - E → "publicidad exterior y BTL" (no el head de un hijo).
- **Si una categoría no tiene término umbrella con volumen propio, va `noindex`** (sigue existiendo para UX/navegación, pero no compite en Google). Mejor 16 money pages fuertes que 21 peleándose entre sí.
- **Canonical:** cada servicio hijo es la URL canónica de su keyword; la categoría nunca se canonicaliza sobre un hijo.

### 3.3 Otros cruces menores (vigilar)
- **SEO** (`/servicios/seo`) vs **Mantenimiento web** (ya fusionado en Desarrollo Web/SEO): ok, SEO es página propia con "agencia seo / posicionamiento web".
- **Merchandising** (servicio) vs **Marcas y Consumo** (sector) ambos tocan "merchandising para empresas": el **servicio** gana esa keyword; el **sector** la usa solo como enlace interno, no como H1.
- **Blog DIY** (crear logo, crear página web) vs **servicios** Branding/Desarrollo Web: correcto y deliberado — el blog capta el DIY informacional y deriva al servicio; no compiten porque la intención es distinta (informacional vs comercial).

---

## 4. Conclusión accionable
- Set competitivo real = **Webtilia** (benchmark a imitar en FAQ/schema/blog) y **marketingdigital.pe** (superar en performance y frescura). Marca Lima y Asuntos Digitales no son objetivo.
- Tu ventaja defendible: **Ica + servicios físicos + prueba de resultados**.
- Canibalización resuelta con **un dueño por keyword** y **categorías como hub (noindex si duplican)**.
