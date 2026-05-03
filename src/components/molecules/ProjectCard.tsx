// src/components/molecules/ProjectCard.tsx
// Card de portafolio con imagen visual por gradiente, título, descripción y modal de detalle

"use client";

import { useState } from "react";
import IconSVG from "@/components/atoms/IconSVG";

interface ProjectCardProps {
  titulo: string;
  descripcion: string;
  gradiente: string;   // clase Tailwind de gradiente
  emoji: string;       // emoji representativo del proyecto
  descripcionDetallada: string;
  tecnologias: string[];
  github?: string;
  demo?: string;
}

/** ProjectCard — card de portafolio con visual por gradiente y modal al presionar "Saber más". */
export default function ProjectCard({
  titulo, descripcion, gradiente, emoji,
  descripcionDetallada, tecnologias, github, demo,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="portfolio-card">
        {/* Imagen visual con gradiente y emoji */}
        <div className={`h-44 bg-gradient-to-br ${gradiente} relative overflow-hidden flex flex-col items-center justify-center`}>
          {/* Círculos decorativos de fondo */}
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/10 rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
          {/* Decoración de "pantalla de app" */}
          <div className="relative z-10 bg-white/15 backdrop-blur-sm rounded-xl p-4 w-36 shadow-lg border border-white/20">
            <div className="text-4xl text-center mb-2">{emoji}</div>
            <div className="h-2 bg-white/50 rounded mb-1.5 w-full" />
            <div className="h-2 bg-white/30 rounded mb-1.5 w-3/4" />
            <div className="h-2 bg-white/30 rounded w-1/2" />
          </div>
          {/* Badge tipo */}
          <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded px-2 py-0.5">
            <span className="text-white text-xs font-heading font-semibold">Proyecto</span>
          </div>
          <div className="absolute top-3 right-3 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-300/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-300/70" />
            <div className="w-2 h-2 rounded-full bg-green-300/70" />
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4">
          <h3 className="font-heading font-semibold text-gray-800 text-sm mb-1">{titulo}</h3>
          <p className="text-xs text-gray-500 font-body leading-relaxed mb-3">{descripcion}</p>
          {/* Tecnologías */}
          <div className="flex flex-wrap gap-1 mb-3">
            {tecnologias.slice(0, 3).map((tec) => (
              <span key={tec} className="px-2 py-0.5 bg-yellow-50 text-brand text-xs font-heading font-semibold rounded border border-yellow-200">
                {tec}
              </span>
            ))}
            {tecnologias.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs font-heading rounded">
                +{tecnologias.length - 3}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="text-brand text-xs font-heading font-semibold hover:underline flex items-center gap-1"
          >
            Saber más <IconSVG nombre="arrow" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal de detalle */}
      {open && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="modal-box bg-white rounded-2xl overflow-hidden max-w-lg w-full mx-4 relative">
            {/* Cabecera con gradiente */}
            <div className={`h-24 bg-gradient-to-br ${gradiente} flex items-center justify-center relative`}>
              <span className="text-5xl">{emoji}</span>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <IconSVG nombre="close" className="w-4 h-4 text-white" />
              </button>
            </div>
            {/* Contenido */}
            <div className="p-7">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-body mb-5">{descripcionDetallada}</p>
              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tecnologias.map((tec) => (
                  <span key={tec} className="px-2.5 py-1 bg-yellow-50 text-brand text-xs font-heading font-semibold rounded border border-yellow-200">
                    {tec}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex gap-3">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded border border-gray-200 text-xs font-heading font-semibold text-gray-600 hover:border-brand hover:text-brand transition-colors">
                    <IconSVG nombre="github" className="w-4 h-4" /> GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-yellow text-xs">
                    <IconSVG nombre="externalLink" className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
