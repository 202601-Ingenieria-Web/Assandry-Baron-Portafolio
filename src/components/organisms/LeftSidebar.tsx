// src/components/organisms/LeftSidebar.tsx
// Sidebar izquierdo fijo: foto circular, info personal, contacto, idiomas, lenguajes, habilidades

import SkillBar from "@/components/atoms/SkillBar";
import IconSVG from "@/components/atoms/IconSVG";
import ProfileImage from "@/components/atoms/ProfileImage";
import { personalInfo, contacto, idiomas, lenguajes, habilidades } from "@/data/portfolioData";

/** LeftSidebar — panel izquierdo fijo. Organismo que combina múltiples átomos y moléculas. */
export default function LeftSidebar() {
  return (
    <aside className="sidebar-left flex flex-col">

      {/* Foto circular y nombre */}
      <div className="px-5 pt-8 pb-6 text-center border-b border-gray-100">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md mx-auto mb-3">
          <ProfileImage
            src={personalInfo.foto}
            alt={personalInfo.nombre}
            fallbackText="AB"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-heading font-bold text-gray-900 text-sm leading-snug">
          {personalInfo.nombreCompleto}
        </h1>
        <p className="text-xs text-brand font-heading font-medium mt-0.5">
          {personalInfo.titulo}
        </p>
      </div>

      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">

        {/* Datos personales — cada dato en su propia fila para que no se corte */}
        <div>
          <div className="space-y-3">
            {contacto.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-400 font-body mb-0.5">{item.label}:</p>
                <p className="text-xs text-gray-700 font-body font-medium break-all leading-snug">
                  {item.valor}
                </p>
              </div>
            ))}
            <div>
              <p className="text-xs text-gray-400 font-body mb-0.5">Freelance:</p>
              <p className="text-xs text-green-500 font-heading font-semibold">Disponible</p>
            </div>
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <h2 className="font-heading font-bold text-gray-800 text-sm mb-3">Idiomas</h2>
          {idiomas.map((i) => (
            <SkillBar key={i.nombre} nombre={i.nombre} porcentaje={i.porcentaje} />
          ))}
        </div>

        {/* Lenguajes de programación */}
        <div>
          <h2 className="font-heading font-bold text-gray-800 text-sm mb-3">
            Lenguajes de Programación
          </h2>
          {lenguajes.map((l) => (
            <SkillBar key={l.nombre} nombre={l.nombre} porcentaje={l.porcentaje} />
          ))}
        </div>

        {/* Habilidades extra */}
        <div>
          <h2 className="font-heading font-bold text-gray-800 text-sm mb-3">
            Habilidades Extra
          </h2>
          <div className="space-y-1.5">
            {habilidades.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <IconSVG nombre="bullet" className="w-3 h-3 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600 font-body leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
