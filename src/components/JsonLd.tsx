/**
 * Inyecta uno o varios bloques JSON-LD como <script type="application/ld+json">.
 * Server Component. Usa las plantillas de lib/schema.ts (doc 12).
 */

type Json = Record<string, unknown>;

export default function JsonLd({ data }: { data: Json | Json[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
