/**
 * IndexNow: avisa a Bing (y a Yandex, Naver y demás motores del protocolo) de
 * que el contenido cambió, en lugar de esperar semanas a que pasen a rastrear.
 *
 * Por qué existe: Bing tardaba semanas en revisitar el sitio —llegó a mostrar
 * un <title> con tres semanas de retraso— y de Bing depende buena parte de lo
 * que responde ChatGPT. Con esto, cada publicación llega en minutos.
 *
 * Uso:
 *   npm run indexnow            → envía todas las URLs del sitemap
 *   npm run indexnow -- /a /b   → envía solo esas rutas (más cortés tras un
 *                                 cambio pequeño; no satures el protocolo)
 *
 * La clave NO es un secreto: el protocolo exige publicarla en texto plano en
 * https://suggestion.pe/<clave>.txt para demostrar que el dominio es tuyo.
 */

const HOST = "suggestion.pe";
const KEY = "52738135fdffbdd41254add9caff5dca";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function urlsDelSitemap() {
  const r = await fetch(`https://${HOST}/sitemap.xml`);
  if (!r.ok) throw new Error(`No pude leer el sitemap (HTTP ${r.status})`);
  const xml = await r.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const main = async () => {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`))
    : await urlsDelSitemap();

  if (!urlList.length) {
    console.error("No hay URLs que enviar.");
    process.exit(1);
  }

  // Verificar que la clave está publicada antes de enviar: si falla, IndexNow
  // rechaza el lote entero y no queda constancia de por qué.
  const kr = await fetch(`https://${HOST}/${KEY}.txt`);
  if (!kr.ok) {
    console.error(`La clave no está publicada en https://${HOST}/${KEY}.txt (HTTP ${kr.status}).`);
    console.error("Despliega primero el archivo de /public y vuelve a intentarlo.");
    process.exit(1);
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });

  // 200 = aceptado; 202 = aceptado, clave pendiente de comprobar. Ambos OK.
  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow OK (HTTP ${res.status}): ${urlList.length} URLs enviadas.`);
  } else {
    console.error(`IndexNow devolvió HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
    process.exit(1);
  }
};

main().catch((e) => {
  console.error("IndexNow falló:", e.message);
  process.exit(1);
});
