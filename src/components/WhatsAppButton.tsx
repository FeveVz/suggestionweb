import { Btn } from "@/components/brand/parts";
import { whatsappLink } from "@/lib/site";

/**
 * CTA secundario: WhatsApp (+51 937 770 159) con mensaje pre-rellenado
 * opcional (doc 16 §5, CLAUDE.md regla 5).
 */

export default function WhatsAppButton({
  message,
  children = "Escríbenos por WhatsApp",
  variant = "secondary",
  size = "md",
}: {
  message?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "insight" | "ghostDark";
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Btn as="a" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" variant={variant} size={size}>
      {children}
    </Btn>
  );
}
