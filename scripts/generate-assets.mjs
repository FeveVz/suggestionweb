import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';

const ORANGE = '#FF8C00';
const CYAN = '#00BFFF';

// Marca: la "i" de Suggestion con el punto cian (elemento distintivo del wordmark)
const markSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000"/>
  <rect x="224" y="208" width="64" height="200" rx="14" fill="#FFFFFF"/>
  <circle cx="256" cy="136" r="42" fill="${CYAN}"/>
  <rect x="0" y="496" width="512" height="16" fill="${ORANGE}"/>
</svg>`;

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="0" y="0" width="1200" height="8" fill="${ORANGE}"/>
  <rect x="80" y="150" width="56" height="6" fill="${CYAN}"/>
  <text x="80" y="190" font-family="Arial, Helvetica, sans-serif" font-size="26" letter-spacing="8" fill="#FFFFFF" fill-opacity="0.55">AGENCIA DE MARKETING DIGITAL</text>
  <text x="74" y="330" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="120" letter-spacing="-2" fill="#FFFFFF">SUGGESTION<tspan fill="${ORANGE}">.</tspan></text>
  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="44" fill="${ORANGE}">MARKETING DIGITAL QUE</text>
  <text x="80" y="478" font-family="Arial, Helvetica, sans-serif" font-weight="bold" font-size="44" fill="#FFFFFF">GENERA CLIENTES.</text>
  <text x="80" y="560" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#FFFFFF" fill-opacity="0.5">suggestion.pe</text>
  <rect x="1080" y="0" width="120" height="630" fill="${ORANGE}"/>
  <rect x="1120" y="240" width="40" height="150" rx="10" fill="#000000" fill-opacity="0.85"/>
  <circle cx="1140" cy="190" r="26" fill="#000000" fill-opacity="0.85"/>
</svg>`;

// ICO moderno: contenedor con PNG embebido (válido en todos los navegadores actuales)
function pngToIco(pngBuf, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: icono
  header.writeUInt16LE(1, 4); // 1 imagen
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // ancho
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // alto
  entry.writeUInt8(0, 2);  // sin paleta
  entry.writeUInt8(0, 3);  // reservado
  entry.writeUInt16LE(1, 4);  // planos
  entry.writeUInt16LE(32, 6); // bits por pixel
  entry.writeUInt32LE(pngBuf.length, 8);  // tamaño de datos
  entry.writeUInt32LE(22, 12); // offset de datos
  return Buffer.concat([header, entry, pngBuf]);
}

mkdirSync('public', { recursive: true });

const logo = await sharp(Buffer.from(markSvg(512))).png().toBuffer();
writeFileSync('public/logo.png', logo);

const fav32 = await sharp(Buffer.from(markSvg(512))).resize(32, 32).png().toBuffer();
writeFileSync('public/favicon.ico', pngToIco(fav32, 32));

const og = await sharp(Buffer.from(ogSvg)).png().toBuffer();
writeFileSync('public/og-image.png', og);

console.log('Assets generados: logo.png, favicon.ico, og-image.png');
