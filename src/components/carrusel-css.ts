/**
 * CSS del carrusel de fotos, en un modulo propio y SIN "use client".
 *
 * Vive aparte de CarruselFotos.tsx por dos razones:
 *
 * 1. La pagina monta 22 carruseles. Si cada componente trajera su propio
 *    <style>, el HTML llevaria 22 copias identicas de estas reglas.
 * 2. Un archivo marcado con "use client" no puede exportar un valor que lea
 *    un Server Component: Next lo sustituye por una referencia de cliente. Al
 *    intentarlo, la constante se interpolo como el texto de un error DENTRO
 *    de la etiqueta <style> y la compilacion no fallo; el CSS simplemente no
 *    se aplicaba. Por eso esto es un modulo plano.
 */
export const CARRUSEL_CSS = `
.hk-car { position:relative; background:#0b0b0b; }
.hk-car-pista {
  display:flex; overflow-x:auto; scroll-snap-type:x mandatory;
  overscroll-behavior-x:contain; scrollbar-width:none;
  -webkit-overflow-scrolling:touch;
}
.hk-car-pista::-webkit-scrollbar { display:none; }
.hk-car-pista:focus-visible { outline:2px solid var(--cyan); outline-offset:-2px; }
.hk-car-slot {
  flex:0 0 100%; scroll-snap-align:start;
  aspect-ratio:1 / 1;
  display:flex; align-items:center; justify-content:center;
}
.hk-car-slot img {
  max-width:100%; max-height:100%; width:auto; height:auto;
  display:block; object-fit:contain;
}
.hk-car-nav {
  position:absolute; top:50%; transform:translateY(-50%);
  display:grid; place-items:center; width:40px; height:40px;
  border:0; border-radius:999px; cursor:pointer;
  background:rgba(10,10,10,0.55); color:var(--white);
  backdrop-filter:blur(6px);
  transition:opacity .18s ease, background .18s ease;
}
.hk-car-nav:hover:not(:disabled) { background:rgba(10,10,10,0.8); }
.hk-car-nav:disabled { opacity:0; pointer-events:none; }
.hk-car-nav:focus-visible { outline:2px solid var(--cyan); outline-offset:2px; }
.hk-car-ant { left:10px; }
.hk-car-sig { right:10px; }
.hk-car-cuenta {
  position:absolute; right:12px; bottom:12px; margin:0;
  padding:5px 11px; border-radius:999px;
  background:rgba(10,10,10,0.62); backdrop-filter:blur(6px);
  font:var(--fw-bold) var(--fs-micro)/1 var(--font-accent);
  letter-spacing:var(--tracking-label); color:var(--white);
  pointer-events:none;
}

@media (min-width: 560px) { .hk-car-slot { aspect-ratio:5 / 4; } }

/* Sin animación de desplazamiento para quien la ha desactivado. */
@media (prefers-reduced-motion: reduce) {
  .hk-car-pista { scroll-behavior:auto; }
}
`;
