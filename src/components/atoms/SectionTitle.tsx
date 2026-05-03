// src/components/atoms/SectionTitle.tsx
// Encabezado centrado para secciones del contenido central

interface SectionTitleProps {
  titulo: string;
  descripcion?: string;
}

/** SectionTitle — título y descripción de sección, estilo centrado como en el Figma. */
export default function SectionTitle({ titulo, descripcion }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-heading text-3xl font-bold text-gray-900 mb-3">{titulo}</h2>
      {descripcion && (
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed font-body">
          {descripcion}
        </p>
      )}
    </div>
  );
}
