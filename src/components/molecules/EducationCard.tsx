// src/components/molecules/EducationCard.tsx
// Card de educación estilo tabla como en el diseño Figma

interface EducationCardProps {
  institucion: string;
  titulo: string;
  fechas: string;
  descripcion: string;
  tipo: string;
}

/** EducationCard — fila de educación con columna izquierda (institución) y derecha (descripción). */
export default function EducationCard({ institucion, titulo, fechas, descripcion, tipo }: EducationCardProps) {
  const tipoBg: Record<string, string> = {
    Universidad: "bg-brand text-white",
    Certificación: "bg-gray-800 text-white",
    Técnico: "bg-brand text-white",
  };
  return (
    <div className="edu-card flex flex-col md:flex-row gap-6 border-b border-gray-100 last:border-0">
      {/* Columna izquierda */}
      <div className="md:w-44 flex-shrink-0">
        <p className="font-heading font-semibold text-gray-800 text-sm leading-snug mb-2">{institucion}</p>
        <div className="flex flex-wrap gap-1">
          <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded ${tipoBg[tipo] ?? tipoBg["Técnico"]}`}>
            {tipo}
          </span>
        </div>
        <p className="text-xs text-gray-400 font-body mt-1">{fechas}</p>
      </div>

      {/* Columna derecha */}
      <div className="flex-1">
        <h3 className="font-heading font-semibold text-gray-800 text-sm mb-2 leading-snug">{titulo}</h3>
        <p className="text-xs text-gray-500 font-body leading-relaxed">{descripcion}</p>
      </div>
    </div>
  );
}
