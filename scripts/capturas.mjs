// Capturas para revisar el diseño sin depender del navegador de la app ni de la
// extensión: abre el Chrome local en modo headless por CDP, emula un ancho
// (390 = celular con toque; 1440 = escritorio), recorre la página con scroll
// para que se revelen los bloques y guarda tramos JPEG. Marca el navegador como
// interno (sg_interno) para no contar visitas. Mejor contra el servidor local.
//
// Uso: node scripts/capturas.mjs <url> <ancho> <salida-prefijo> [alto-tramo=1600] [max-tramos=12]
// Ej.: node scripts/capturas.mjs http://localhost:3100/ 390 ./tmp/home-m 1700 10
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const [url, anchoStr, salida, tramoStr = "1600", maxStr = "12"] = process.argv.slice(2);
const ancho = Number(anchoStr), tramo = Number(tramoStr), maxTramos = Number(maxStr);
const movil = ancho < 768;
const alto = movil ? 844 : 900;
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const perfil = mkdtempSync(path.join(tmpdir(), "cap-"));
const puerto = 9300 + Math.floor(Math.random() * 500);
const ch = spawn(CHROME, ["--headless=new", "--disable-gpu", "--no-first-run", "--no-proxy-server", "--hide-scrollbars", `--remote-debugging-port=${puerto}`, `--user-data-dir=${perfil}`, "about:blank"], { stdio: "ignore" });
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

let ws, id = 0;
const pendientes = new Map();
const cdp = (method, params = {}) => new Promise((res, rej) => {
  const i = ++id;
  pendientes.set(i, { res, rej });
  ws.send(JSON.stringify({ id: i, method, params }));
});

try {
  let objetivo;
  for (let k = 0; k < 40 && !objetivo; k++) {
    await espera(250);
    try {
      const lista = await (await fetch(`http://127.0.0.1:${puerto}/json/list`)).json();
      objetivo = lista.find((t) => t.type === "page");
    } catch { /* aún arrancando */ }
  }
  if (!objetivo) throw new Error("Chrome no arrancó");
  ws = new WebSocket(objetivo.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener("open", r));
  ws.addEventListener("message", (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pendientes.has(m.id)) {
      const p = pendientes.get(m.id); pendientes.delete(m.id);
      m.error ? p.rej(new Error(m.error.message)) : p.res(m.result);
    }
  });
  await cdp("Page.enable");
  await cdp("Runtime.enable");
  await cdp("Emulation.setDeviceMetricsOverride", { width: ancho, height: alto, deviceScaleFactor: 1, mobile: movil });
  if (movil) await cdp("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
  // No medir: marca el navegador como interno antes de cargar.
  await cdp("Page.addScriptToEvaluateOnNewDocument", { source: "try{localStorage.setItem('sg_interno','1')}catch(e){}" });
  await cdp("Page.navigate", { url });
  await espera(4500);
  const evalua = async (expr) => (await cdp("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result.value;
  await evalua("document.documentElement.style.scrollBehavior='auto'");
  // Recorre la página para disparar revelados y cargas diferidas.
  const total = await evalua("document.documentElement.scrollHeight");
  for (let y = 0; y < total; y += Math.round(alto * 0.6)) {
    await evalua(`window.scrollTo(0, ${y})`);
    await espera(260);
  }
  await evalua("window.scrollTo(0, 0)");
  await espera(900);
  const altoTotal = Math.min(await evalua("document.documentElement.scrollHeight"), tramo * maxTramos);
  const info = await evalua(`JSON.stringify({ancho: document.documentElement.scrollWidth, alto: document.documentElement.scrollHeight, titulo: document.title})`);
  console.log(info);
  let n = 0;
  for (let y = 0; y < altoTotal; y += tramo) {
    const h = Math.min(tramo, altoTotal - y);
    const r = await cdp("Page.captureScreenshot", { format: "jpeg", quality: 62, captureBeyondViewport: true, clip: { x: 0, y, width: ancho, height: h, scale: ancho > 1000 ? 0.6 : 1 } });
    const f = `${salida}-${String(++n).padStart(2, "0")}.jpg`;
    writeFileSync(f, Buffer.from(r.data, "base64"));
    console.log(f);
  }
} catch (e) {
  console.error("ERROR", e.message);
} finally {
  try { ws?.close(); } catch {}
  ch.kill();
}
