// Imágenes para compartir (1200×630) de las páginas que usaban la genérica.
// Se ven al pegar el enlace en WhatsApp. Usa el Chrome local para que salgan con
// las fuentes del sitio: node scripts/og-paginas.mjs
//
// En los casos no va ninguna cifra a propósito: fuera de la página, sin su fecha
// de corte, incumplirían docs-fuente/21.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const PAGINAS = [
  ["consultoria-cero", "Consultoría cero:", "30 minutos, gratis"],
  ["nosotros", "La agencia de performance", "de Ica"],
  ["metodo", "Cómo medimos", "una campaña"],
  ["portafolio", "22 activaciones,", "documentadas"],
  ["caso-ceinys-septiembre-2026", "Caso Ceinys:", "septiembre 2026"],
  ["caso-ceinys-agosto-2026", "Caso Ceinys:", "agosto 2026"],
  ["caso-inmobiliaria-ceinys", "Caso:", "Inmobiliaria Ceinys"],
  ["caso-granjas-bonanza", "Caso:", "Granjas Bonanza"],
  ["caso-hoteles-senor-de-luren", "Caso:", "Hoteles Señor de Luren"],
  ["caso-autoniza-eventos", "Caso:", "Autoniza, eventos"],
];

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
if (!CHROME) throw new Error("No encontré Chrome ni Edge");

const raiz = process.cwd();
const fuente = pathToFileURL(path.join(raiz, "public/fonts/Geomanist-Bold.woff2")).href;
const mancha = pathToFileURL(path.join(raiz, "public/assets/blots/blot-3-cyan.png")).href;
const tmp = mkdtempSync(path.join(tmpdir(), "og-"));

for (const [archivo, l1, l2] of PAGINAS) {
  const html = `<!doctype html><meta charset="utf-8"><style>
    @font-face { font-family: G; src: url("${fuente}"); font-weight: 700; }
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; background: #080808; color: #fff; font: 700 76px/1.14 G; position: relative; overflow: hidden; padding: 96px 72px; }
    .m { position: absolute; right: -60px; bottom: -80px; width: 560px; opacity: .16; }
    .r { width: 61px; height: 8px; background: #ff8c00; }
    .k { font-size: 30px; letter-spacing: .01em; color: #9a9ea3; margin: 34px 0 34px; }
    .c { color: #00bfff; }
    .u { position: absolute; left: 72px; bottom: 62px; font-size: 30px; display: flex; align-items: center; gap: 14px; }
    .u i { width: 16px; height: 16px; border-radius: 50%; background: #00bfff; }
  </style><img class="m" src="${mancha}" alt=""><div class="r"></div>
  <div class="k">SUGGESTION · AGENCIA DE MARKETING EN ICA</div>
  <div>${l1}<br><span class="c">${l2}</span></div>
  <div class="u"><i></i>suggestion.pe</div>`;
  const entrada = path.join(tmp, `${archivo}.html`);
  const captura = path.join(tmp, `${archivo}.png`);
  writeFileSync(entrada, html);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--force-device-scale-factor=1", "--window-size=1200,630", `--screenshot=${captura}`, pathToFileURL(entrada).href], { stdio: "ignore", timeout: 60000 });
  await sharp(captura).resize(1200, 630).png({ compressionLevel: 9, palette: true }).toFile(path.join(raiz, `public/assets/og/${archivo}.png`));
  console.log("ok", archivo);
}
