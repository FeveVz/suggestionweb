import { redirect } from "next/navigation";

/** /equipo sin slug → la sección de equipo en Nosotros (evita 404 intuido). */
export default function EquipoIndex() {
  redirect("/nosotros");
}
