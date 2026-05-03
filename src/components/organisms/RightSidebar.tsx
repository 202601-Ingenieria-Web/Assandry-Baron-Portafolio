// src/components/organisms/RightSidebar.tsx
// Sidebar derecho fijo: íconos de redes sociales estilo círculo amarillo como en Figma

import IconSVG from "@/components/atoms/IconSVG";
import { redesSociales } from "@/data/portfolioData";

/** RightSidebar — panel derecho con "Links" y botones circulares de redes sociales. */
export default function RightSidebar() {
  return (
    <aside className="sidebar-right flex flex-col items-center py-8 gap-4">
      <p className="font-heading font-bold text-gray-700 text-xs tracking-widest uppercase mb-1">Links</p>
      {redesSociales.map((red) => (
        <a
          key={red.nombre}
          href={red.url}
          target="_blank"
          rel="noopener noreferrer"
          title={red.nombre}
          className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white hover:bg-brand-dark transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-transform"
        >
          <IconSVG nombre={red.icono} className="w-4 h-4" />
        </a>
      ))}
    </aside>
  );
}
