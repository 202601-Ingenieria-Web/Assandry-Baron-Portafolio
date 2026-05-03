// src/components/atoms/SkillBar.tsx
// Barra de progreso para idiomas y lenguajes de programación

interface SkillBarProps {
  nombre: string;
  porcentaje: number;
}

/** SkillBar — barra de habilidad con porcentaje. Reutilizado en sidebar izquierdo. */
export default function SkillBar({ nombre, porcentaje }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-700 font-body">{nombre}</span>
        <span className="text-xs text-brand font-heading font-semibold">{porcentaje}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${porcentaje}%` }} />
      </div>
    </div>
  );
}
