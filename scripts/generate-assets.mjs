import sharp from 'sharp';
import { writeFileSync, readFileSync } from 'fs';

const ORANGE = '#FF8C00';
const CYAN = '#00BFFF';

// ---- OG image 1200x630 (mensaje nuevo + mancha real) ----
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="0" y="0" width="1200" height="8" fill="${ORANGE}"/>
  <rect x="80" y="150" width="56" height="5" fill="${CYAN}"/>
  <text x="80" y="188" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="6" fill="#FFFFFF" fill-opacity="0.55">AGENCIA DE PERFORMANCE · ICA, PERÚ</text>
  <text x="74" y="330" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="130" letter-spacing="-3" fill="#FFFFFF">No es lo</text>
  <text x="74" y="450" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="130" letter-spacing="-3" fill="#FFFFFF">que ves<tspan fill="${CYAN}">.</tspan></text>
  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="${ORANGE}">Convertimos atención en ventas.</text>
  <text x="80" y="588" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#FFFFFF" fill-opacity="0.5">suggestion.pe</text>
</svg>`;

const blot = readFileSync('public/assets/blots/blot-3-orange.png');
const blotResized = await sharp(blot).resize(560).png().toBuffer();

const og = await sharp(Buffer.from(ogSvg))
  .composite([{ input: blotResized, left: 760, top: 150 }])
  .png()
  .toBuffer();
writeFileSync('public/og-image.png', og);

// logo.png para datos estructurados (wordmark real sobre fondo)
const logoBlack = readFileSync('public/assets/logos/suggestion-logo-black.png');
writeFileSync('public/logo.png', logoBlack);

// ---- favicon.ico desde la mancha (recortada cuadrada) ----
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8); entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, pngBuf]);
}
const fav = await sharp(blot)
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png().toBuffer();
writeFileSync('public/favicon.ico', pngToIco(fav, 64));

console.log('Assets regenerados: og-image.png, logo.png, favicon.ico');
