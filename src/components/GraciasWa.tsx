"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { MessageCircle } from "lucide-react";
import { Btn } from "@/components/brand/parts";
import { site, whatsappLink } from "@/lib/site";

/**
 * Si el formulario se guardó en el servidor (/gracias?g=1, tarea 2.01), lo
 * dice: aunque no envíe el WhatsApp, ya tenemos sus datos y le escribimos.
 * Se lee en el navegador para que la página siga siendo estática.
 */
const sinSuscripcion = () => () => {};

export function GraciasGuardado() {
  const guardado = useSyncExternalStore(
    sinSuscripcion,
    () => new URLSearchParams(window.location.search).get("g") === "1",
    () => false,
  );
  const fuerte = { fontWeight: 700, color: "var(--text-strong)" } as const;
  if (!guardado) return <strong style={fuerte}>Hasta que lo envíes no nos llega.</strong>;
  return (
    <>
      <strong style={fuerte}>Ya guardamos tus datos:</strong> si no llegas a enviarlo, te escribimos nosotros de {site.horario}.
    </>
  );
}

/** Reabre WhatsApp con el mensaje que la persona escribió en el formulario. */
export default function GraciasWa() {
  const [href, setHref] = useState(() => whatsappLink("Hola Suggestion, quiero agendar mi consultoría cero."));
  useEffect(() => {
    try {
      const guardado = sessionStorage.getItem("sg_wa");
      if (guardado) setHref(guardado);
    } catch {
      /* sin almacenamiento queda el mensaje general */
    }
  }, []);
  return (
    <Btn as="a" href={href} target="_blank" rel="noopener noreferrer" size="lg">
      <MessageCircle size={18} /> Abrir WhatsApp
    </Btn>
  );
}
