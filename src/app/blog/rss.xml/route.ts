import { SITE_URL, site } from "@/lib/site";
import { BLOG_POSTS, getCategoria } from "@/content/blog";

/**
 * /blog/rss.xml — feed RSS 2.0 del blog (auditoría TEC-19).
 *
 * Sale del mismo blog.ts que pinta los artículos, ordenado por la fecha de
 * última revisión (`actualizado`, o la de publicación si nunca se tocó). Lo
 * anuncia el <link rel="alternate"> que buildMetadata pone en cada página.
 */
export const dynamic = "force-static";

const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** «2026-11-21» → fecha RFC 822 a mediodía de Lima, que es como la leen los lectores RSS. */
const rfc822 = (iso: string) => new Date(`${iso}T12:00:00-05:00`).toUTCString();

export function GET() {
  const posts = [...BLOG_POSTS].sort((a, b) => (b.actualizado ?? b.date).localeCompare(a.actualizado ?? a.date));
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/blog/${p.categoria}/${p.slug}`;
      const cat = getCategoria(p.categoria)?.nombre ?? p.categoria;
      return `    <item>
      <title>${esc(p.h1)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(p.description)}</description>
      <category>${esc(cat)}</category>
      <pubDate>${rfc822(p.date)}</pubDate>
    </item>`;
    })
    .join("\n");
  const ultima = posts[0] ? rfc822(posts[0].actualizado ?? posts[0].date) : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de ${esc(site.name)}</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Estrategias de marketing que sí venden: publicidad digital, inmobiliario, automotriz, imprenta y BTL, desde Ica para todo el Perú.</description>
    <language>es-PE</language>
    <lastBuildDate>${ultima}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
