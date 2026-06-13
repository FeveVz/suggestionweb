'use client';

import { MotionConfig } from 'framer-motion';

/**
 * Hace que todas las animaciones de framer-motion respeten la preferencia
 * "prefers-reduced-motion" del usuario (accesibilidad y confort de lectura).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
