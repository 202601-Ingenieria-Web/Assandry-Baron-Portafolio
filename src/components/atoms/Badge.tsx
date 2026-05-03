// src/components/atoms/Badge.tsx
// Etiqueta de fecha para cards de educación

interface BadgeProps {
  label: string;
  variant?: "yellow" | "gray";
}

/** Badge — etiqueta de fecha o tecnología. Reutilizado en EducationCard y ProjectCard. */
export default function Badge({ label, variant = "yellow" }: BadgeProps) {
  const styles = {
    yellow: "bg-brand text-white",
    gray:   "bg-gray-100 text-gray-600 border border-gray-200",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-heading font-semibold ${styles[variant]}`}>
      {label}
    </span>
  );
}
