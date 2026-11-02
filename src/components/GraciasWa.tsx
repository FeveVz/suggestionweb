"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Btn } from "@/components/brand/parts";
import { whatsappLink } from "@/lib/site";

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
