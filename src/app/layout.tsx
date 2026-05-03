// src/app/layout.tsx
// Layout principal de la aplicación — define metadata y estructura base

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assandry-Baron-Portafolio",
  description:
    "Portafolio profesional de Assandry Enrique Barón Rodriguez, Ingeniero de Sistemas en formación en la Universidad de Antioquia.",
  keywords: [
    "portafolio",
    "ingeniería de sistemas",
    "desarrollador web",
    "Assandry Barón",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
