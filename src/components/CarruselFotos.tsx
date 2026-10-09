"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FotoCarrusel = {
  src: string;
  /** Variante de media altura, para pantallas y densidades pequeñas. */
  srcChica: string;
  alt: string;
  w: number;
  h: number;
};

/**
 * Carrusel de fotos de una activación.
 *
 * ── Por qué un escenario fijo y `object-fit: contain` ─────────────────────
 * El archivo del portafolio es 62 % vertical: son fotos de celular tomadas en
 * el evento. Cualquier marco apaisado con `cover` les corta la cabeza o los
 * pies, que es justo donde está la gente trabajando. Aquí el marco es casi
 * cuadrado y la foto entra entera; las apaisadas dejan franja arriba y abajo,
 * las verticales a los lados. Se ve la foto que se tomó, no la que cabía.
 *
 * ── Por qué el scroll es nativo ───────────────────────────────────────────
 * La tira es un contenedor con `scroll-snap`. El deslizamiento con el dedo, la
 * rueda horizontal del trackpad, las flechas del teclado y la barra de
 * desplazamiento funcionan sin JavaScript: si el bundle no carga o falla la
 * hidratación, el carrusel sigue siendo usable. Lo que añade este componente
 * son las flechas y el contador, que son ayudas, no el mecanismo.
 *
 * `overscroll-behavior-x: contain` es obligatorio: sin eso, deslizar la
 * última foto hacia la izquierda dispara el "atrás" del navegador en iOS.
 */
export default function CarruselFotos({
  fotos,
  titulo,
}: {
  fotos: FotoCarrusel[];
  titulo: string;
}) {
  const pista = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);
  const [enInicio, setEnInicio] = useState(true);
  const [enFin, setEnFin] = useState(false);

  /**
   * Posición comprometida, no la que se ve.
   *
   * Todas las fotos ocupan exactamente el ancho del marco, así que el índice
   * es `scrollLeft / clientWidth`. El problema es que durante el
   * desplazamiento suave ese cociente devuelve valores intermedios: si el
   * usuario pulsa la flecha dos veces seguidas, la segunda pulsación lee una
   * posición a medio camino y vuelve a apuntar a la foto que ya estaba
   * buscando. Por eso el índice se guarda aquí y solo se reconcilia con el
   * scroll real cuando lo ha movido el usuario.
   */
  const indice = useRef(0);
  const ultimoSalto = useRef(0);

  const sincronizar = useCallback(() => {
    const el = pista.current;
    if (!el || !el.clientWidth) return;
    const n = Math.min(fotos.length - 1, Math.max(0, Math.round(el.scrollLeft / el.clientWidth)));
    if (Date.now() - ultimoSalto.current > 500) indice.current = n;
    setActual(n);
    setEnInicio(el.scrollLeft <= 4);
    setEnFin(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, [fotos.length]);

  useEffect(() => {
    // Una sola medición al montar: deja el contador y las flechas en su sitio
    // antes de que el usuario toque nada.
    sincronizar();
  }, [sincronizar]);

  const alScroll = useCallback(() => {
    requestAnimationFrame(sincronizar);
  }, [sincronizar]);

  const mover = (dir: 1 | -1) => {
    const el = pista.current;
    const n = Math.min(fotos.length - 1, Math.max(0, indice.current + dir));
    const hijo = el?.children[n] as HTMLElement | undefined;
    if (!el || !hijo) return;

    indice.current = n;
    ultimoSalto.current = Date.now();
    setActual(n);

    // El destino se mide sobre la foto; no se calcula como n × ancho.
    // Con proporciones libres el ancho del marco sale fraccionario (468,0375
    // px cuando clientWidth dice 468), y un múltiplo redondeado cae fuera del
    // punto de anclaje. Sumar el desplazamiento real del hijo da la posición
    // exacta, y es independiente de dónde esté el scroll en ese instante.
    const desde = el.scrollLeft;
    const destino = desde + (hijo.getBoundingClientRect().left - el.getBoundingClientRect().left);

    // scrollTo sobre la propia pista: a diferencia de scrollIntoView, no puede
    // arrastrar la página en vertical ni tocar otros contenedores.
    el.scrollTo({
      left: destino,
      // El valor de CSS no gana a este parámetro, así que la preferencia de
      // movimiento reducido hay que leerla aquí.
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });

    // Red de seguridad. Hay navegadores y configuraciones de sistema —Windows
    // con las animaciones desactivadas, por ejemplo— que no solo ignoran
    // "smooth": descartan el desplazamiento entero y dejan el carrusel donde
    // estaba. Si a los 350 ms no se ha movido NADA, se hace el salto directo,
    // que esos navegadores sí ejecutan. Si la animación sí corre, a los 350 ms
    // la posición ya cambió y esto no toca nada.
    window.setTimeout(() => {
      if (el.scrollLeft === desde && Math.abs(destino - desde) > 2) el.scrollLeft = destino;
      sincronizar();
    }, 350);
  };

  const varias = fotos.length > 1;

  return (
    <div className="hk-car">
      <div
        ref={pista}
        onScroll={alScroll}
        className="hk-car-pista"
        role="group"
        aria-label={`Fotos de ${titulo}`}
        tabIndex={0}
      >
        {fotos.map((f) => (
          <div key={f.src} className="hk-car-slot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={f.src}
              srcSet={`${f.srcChica} ${Math.round(f.w / 2)}w, ${f.src} ${f.w}w`}
              sizes="(max-width: 859px) calc(100vw - 2.5rem), 560px"
              alt={f.alt}
              width={f.w}
              height={f.h}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {varias && (
        <>
          <button
            type="button"
            className="hk-car-nav hk-car-ant"
            onClick={() => mover(-1)}
            disabled={enInicio}
            aria-label={`Foto anterior de ${titulo}`}
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            className="hk-car-nav hk-car-sig"
            onClick={() => mover(1)}
            disabled={enFin}
            aria-label={`Foto siguiente de ${titulo}`}
          >
            <ChevronRight size={20} aria-hidden />
          </button>
          <p className="hk-car-cuenta">
            <span className="hk-sr">Foto </span>
            {actual + 1}
            <span aria-hidden> / </span>
            <span className="hk-sr"> de </span>
            {fotos.length}
          </p>
        </>
      )}

    </div>
  );
}
