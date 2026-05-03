// src/components/molecules/KnowledgeCard.tsx
// Card de conocimiento con ícono amarillo, título y descripción

import IconSVG from "@/components/atoms/IconSVG";

interface KnowledgeCardProps {
  titulo: string;
  descripcion: string;
  icono: string;
}

/** KnowledgeCard — card de conocimiento estilo Figma con ícono outline amarillo. */
export default function KnowledgeCard({ titulo, descripcion, icono }: KnowledgeCardProps) {
  return (
    <div className="knowledge-card">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-brand flex items-center justify-center">
          <IconSVG nombre={icono} className="w-7 h-7 text-brand" />
        </div>
      </div>
      <h3 className="font-heading font-semibold text-gray-800 text-base mb-1">{titulo}</h3>
      <p className="text-xs text-gray-500 font-body leading-relaxed">{descripcion}</p>
    </div>
  );
}
