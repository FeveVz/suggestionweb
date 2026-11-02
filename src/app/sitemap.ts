import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/content/blog";
import { CASOS_DETALLE } from "@/content/casos";
import { PORTAFOLIO, fotosDe } from "@/content/portafolio";
import { EQUIPO } from "@/content/equipo";
import { allCiudadSlugs, ciudadHref } from "@/content/ciudades";

/**
 * Sitemap dinámico: raíz + servicios (pilar/5 categorías/16 hijas) + sectores
 * (hub + los que haya en SECTORS) + blog (pilar/categorías/entradas). Las
 * categorías hub son indexables (copy único); si alguna se marca noindex,
 * excluirla aquí. /gracias queda fuera a propósito (noindex, post-conversión).
 *
 * Sobre `lastModified`: NUNCA la fecha de compilación. Antes se sellaban así
 * las 66 páginas, de modo que cada despliegue le decía a Google que todas
 * habían cambiado —fuera cierto o no—, y una señal que miente se acaba
 * ignorando.
 *
 * `CAMBIO_GLOBAL` es otra cosa: la fecha de un cambio real que SÍ tocó las 92
 * páginas. El 2026-09-27 cambió el teléfono de la empresa, que sale en el pie
 * de todas. Por eso es legítimo —y útil— pedirle a Google que las revisite.
 *
 * ⚠️ Solo se toca esta constante cuando vuelva a haber un cambio que afecte
 * de verdad a TODO el sitio (el teléfono, la razón social, el dominio). Si el
 * cambio es de una página, su fecha va en ACTUALIZADA.
 */
const CAMBIO_GLOBAL = "2026-09-27";
const GLOBAL = new Date(`${CAMBIO_GLOBAL}T12:00:00Z`);

/**
 * Última vez que cambió el contenido principal de cada página, sacado del
 * historial de git (auditoría del 2026-11-01). Antes todas decían 27-sep, incluso
 * /consultoria-cero, que se creó el 15-oct. Cambiar un botón, un enlace o el pie
 * no cuenta: al cambiar el texto de una página, se anota aquí su fecha.
 */
const ACTUALIZADA: Record<string, string> = {
  "/": "2026-10-15",
  "/nosotros": "2026-10-15",
  "/metodo": "2026-10-10",
  "/casos": "2026-10-10",
  "/portafolio": "2026-10-09",
  "/consultoria-cero": "2026-11-02",
  "/contacto": "2026-11-02",
  "/auditoria-gratis": "2026-10-15",
  "/privacidad": "2026-10-15",
  "/servicios/publicidad-digital": "2026-10-10",
  "/servicios/seo": "2026-10-10",
  "/servicios/marketing-digital": "2026-10-04",
  "/servicios/redes-sociales": "2026-10-04",
  "/servicios/desarrollo-web": "2026-10-04",
  "/servicios/crm-automatizacion": "2026-10-04",
  "/servicios/produccion-audiovisual": "2026-10-09",
  "/servicios/btl": "2026-10-09",
  "/servicios/publicidad-movil": "2026-10-09",
  "/servicios/estructuras-publicitarias": "2026-10-09",
  "/servicios/material-pop": "2026-10-09",
  "/servicios/imprenta": "2026-11-02",
  "/marketing-inmobiliario": "2026-10-15",
  "/marketing-automotriz": "2026-10-09",
  "/marketing-turismo": "2026-10-09",
  "/marketing-marcas-consumo": "2026-10-09",
  "/marketing-salud": "2026-10-09",
  "/marketing-agroexportacion": "2026-10-09",
  "/marketing-pisco-vino": "2026-10-04",
  "/casos/ceinys-septiembre-2026": "2026-10-09",
  "/casos/ceinys-agosto-2026": "2026-10-10",
  "/casos/inmobiliaria-ceinys": "2026-10-09",
  "/casos/autoniza-eventos": "2026-10-09",
  "/equipo/carolina": "2026-10-13",
  "/blog/imprenta-btl/gigantografias-medidas-materiales-precios": "2026-11-02",
};
const fecha = (path: string) => (ACTUALIZADA[path] ? new Date(`${ACTUALIZADA[path]}T12:00:00Z`) : GLOBAL);
/** Los artículos con fotos propias se ilustraron el 13-oct. */
const FOTOS_BLOG = new Date("2026-10-13T12:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${SITE_URL}${path}`;

  const root: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: fecha("/"), changeFrequency: "weekly", priority: 1 },
    { url: u("/nosotros"), lastModified: fecha("/nosotros"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/metodo"), lastModified: fecha("/metodo"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/casos"), lastModified: fecha("/casos"), changeFrequency: "monthly", priority: 0.7 },
    {
      url: u("/portafolio"),
      lastModified: fecha("/portafolio"),
      changeFrequency: "monthly",
      priority: 0.7,
      // Las 164 fotos declaradas aquí. Es el mecanismo estándar para que
      // Google Imágenes las descubra: en la página viven dentro de un
      // carrusel con carga diferida, así que un rastreador que no ejecute
      // JavaScript solo ve las primeras.
      images: PORTAFOLIO.flatMap((p) => fotosDe(p).map((f) => u(f.src))),
    },
    { url: u("/consultoria-cero"), lastModified: fecha("/consultoria-cero"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/auditoria-gratis"), lastModified: fecha("/auditoria-gratis"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/privacidad"), lastModified: fecha("/privacidad"), changeFrequency: "yearly", priority: 0.2 },
    { url: u("/terminos"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/libro-de-reclamaciones"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/contacto"), lastModified: fecha("/contacto"), changeFrequency: "yearly", priority: 0.6 },
    { url: u("/servicios"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/sectores"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blog"), lastModified: GLOBAL, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Las 5 categorías hub son indexables (copy y title propios): se incluyen con
  // prioridad intermedia — por debajo del pilar /servicios y por encima de nada,
  // ya que la canónica de cada keyword específica sigue siendo el servicio hijo.
  const servicios: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((c) => [
    {
      url: u(`/servicios/${c.slug}`),
      lastModified: GLOBAL,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...c.children.map((s) => ({
      url: u(s.href),
      lastModified: fecha(s.href),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  // Páginas de cobertura por ciudad: copy propio por ciudad, indexables.
  const ciudades: MetadataRoute.Sitemap = allCiudadSlugs().map((slug) => ({
    url: u(ciudadHref(slug)),
    lastModified: GLOBAL,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectores: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: u(s.href),
    lastModified: fecha(s.href),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategorias: MetadataRoute.Sitemap = BLOG_CATEGORIAS.map((c) => ({
    url: u(`/blog/${c.slug}`),
    lastModified: GLOBAL,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => {
    // Las fotos propias que ilustran el artículo, para que Google las indexe
    // asociadas a él y no solo sueltas en /portafolio.
    const fotos = p.secciones.flatMap((s) => (s.foto ? [u(s.foto.src)] : []));
    const publicado = new Date(`${p.date}T00:00:00`);
    return {
      url: u(`/blog/${p.categoria}/${p.slug}`),
      // La más reciente de: publicación, cambio global, fotos añadidas y texto revisado.
      lastModified: new Date(Math.max(publicado.getTime(), GLOBAL.getTime(), fotos.length ? FOTOS_BLOG.getTime() : 0, fecha(`/blog/${p.categoria}/${p.slug}`).getTime())),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      ...(fotos.length ? { images: fotos } : {}),
    };
  });

  const casos: MetadataRoute.Sitemap = CASOS_DETALLE.map((c) => ({
    url: u(`/casos/${c.slug}`),
    lastModified: fecha(`/casos/${c.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(c.imagenes?.length ? { images: c.imagenes.map((i) => u(i.src)) } : {}),
  }));

  const equipo: MetadataRoute.Sitemap = EQUIPO.map((t) => ({
    url: u(`/equipo/${t.slug}`),
    lastModified: fecha(`/equipo/${t.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...root, ...servicios, ...sectores, ...ciudades, ...casos, ...blogCategorias, ...blogPosts, ...equipo];
}
