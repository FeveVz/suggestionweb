/**
 * Variantes de 180 px del muro de trabajos (WorkWall).
 *
 * Por qué: en móvil el muro son 4 columnas de ~85 px y se estaba sirviendo el
 * archivo de 360 px en todas. Lighthouse lo midió el 2026-09-20: 478 KB de
 * sobra en la home. Con la variante de 180 px (suficiente para 85 px en una
 * pantalla de densidad doble) el muro baja de ~517 KB a ~130 KB en móvil.
 *
 * El original de 360 px se conserva: lo sigue usando el escritorio.
 *
 * Uso: node scripts/wall-sizes.mjs
 */
import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const DIR = 'public/assets/wall';
const ANCHO = 180;

const fuentes = readdirSync(DIR).filter((f) => f.endsWith('.webp') && !f.includes(`-${ANCHO}.`));

let antes = 0;
let despues = 0;

for (const f of fuentes) {
  const entrada = join(DIR, f);
  const salida = join(DIR, f.replace(/\.webp$/, `-${ANCHO}.webp`));
  await sharp(entrada).resize(ANCHO).webp({ quality: 72 }).toFile(salida);
  antes += statSync(entrada).size;
  despues += statSync(salida).size;
}

const kb = (n) => Math.round(n / 1024);
console.log(`${fuentes.length} variantes de ${ANCHO}px generadas`);
console.log(`muro en móvil: ${kb(antes)} KB → ${kb(despues)} KB`);
