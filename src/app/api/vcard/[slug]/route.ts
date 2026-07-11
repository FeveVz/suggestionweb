import { getTalento } from "@/content/equipo";
import { site, absoluteUrl } from "@/lib/site";

/**
 * vCard 3.0 por talento: "Guardar contacto" de un toque desde la tarjeta
 * digital (/equipo/[slug]). iOS y Android abren la ficha de contacto al
 * descargar el .vcf.
 */

export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const t = getTalento(slug);
  if (!t) return new Response("Not found", { status: 404 });

  const [nombres, ...apellidos] = t.nombre.split(" ");
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${apellidos.join(" ")};${nombres};;;`,
    `FN:${t.nombre}`,
    `ORG:${site.name}`,
    `TITLE:${t.rol}`,
    `TEL;TYPE=CELL,VOICE:${t.telefono}`,
    `EMAIL;TYPE=INTERNET,WORK:${t.email}`,
    `URL:${absoluteUrl(`/equipo/${t.slug}`)}`,
    `URL;TYPE=WORK:${site.url}`,
    `ADR;TYPE=WORK:;;${site.city};${site.region};;;${site.country}`,
    `NOTE:${site.name} — ${site.slogan}. ${t.rol}.`,
    `REV:${new Date().toISOString()}`,
    "END:VCARD",
  ].join("\r\n");

  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${t.slug}-suggestion.vcf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
