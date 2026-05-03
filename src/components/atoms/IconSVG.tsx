// src/components/atoms/IconSVG.tsx
// Librería de íconos SVG — estilo outline amarillo como en el diseño Figma

interface IconSVGProps {
  nombre: string;
  className?: string;
}

/** IconSVG — íconos SVG outline. Reutilizado en conocimientos, contacto y redes sociales. */
export default function IconSVG({ nombre, className = "w-5 h-5" }: IconSVGProps) {
  const icons: Record<string, JSX.Element> = {
    location: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.652-.048.854-.162a1.5 1.5 0 00.53-.548C21 20.04 21 19.7 21 19.02v-2.88c0-.58 0-.87-.1-1.1a1.5 1.5 0 00-.77-.86c-.22-.1-.5-.13-1.06-.17l-3.1-.28c-.43-.04-.64-.06-.83.01a1.5 1.5 0 00-.65.5c-.12.17-.18.38-.3.8L13.5 17c-2.52-1.15-4.35-2.98-5.5-5.5l1.88-.69c.42-.12.63-.18.8-.3a1.5 1.5 0 00.5-.65c.07-.19.05-.4.01-.83l-.28-3.1c-.04-.56-.07-.84-.17-1.06a1.5 1.5 0 00-.86-.77C9.65 4 9.36 4 8.78 4H5.9C5.2 4 4.86 4 4.63 4.068a1.5 1.5 0 00-.548.53C3.96 4.8 3.944 5.017 3.913 5.452A15.56 15.56 0 003 5.5z"/>
      </svg>
    ),
    email: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path strokeLinecap="round" d="M2 7l10 7 10-7"/>
      </svg>
    ),
    java: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 3C9.5 3 8 7.5 10 9.5c2 2-2 3.5-2 3.5s3.5-.5 5-2.5c1-1.5-.5-3-1-4C11.5 5 9.5 3 9.5 3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14s-1.5 1-1 2.5c.5 1.5 2.5 2 5 2s4.5-.5 5-1.5c.5-1-1-2-1-2"/>
        <path strokeLinecap="round" d="M6.5 18.5s-1 .5-.5 1.5c.5 1 5 1.5 7 1s2.5-1.5 2-2"/>
        <path strokeLinecap="round" d="M15 10.5s2 1 1.5 2.5c-.5 1-2 1.5-4 1.5"/>
      </svg>
    ),
    react: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
    web: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path strokeLinecap="round" d="M3 7h18M7 3v4M9 21h6M12 17v4"/>
        <path strokeLinecap="round" d="M8 11h2M13 11h3M8 14h5"/>
      </svg>
    ),
    container: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path strokeLinecap="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4"/>
      </svg>
    ),
    linux: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="13" rx="2"/>
        <path strokeLinecap="round" d="M3 16h18M8 20h8M12 16v4M7 9l2 2-2 2M14 13h3"/>
      </svg>
    ),
    ml: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/>
        <circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/>
        <path strokeLinecap="round" d="M6 6.5l4.5 4M17.5 6.5L13 10.5M6 17.5l4.5-4M17.5 17.5L13 13.5"/>
      </svg>
    ),
    business: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" d="M3 21V9l9-6 9 6v12M9 21v-6h6v6"/>
        <path strokeLinecap="round" d="M3 9h18"/>
      </svg>
    ),
    database: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path strokeLinecap="round" d="M3 5v5c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path strokeLinecap="round" d="M3 10v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5"/>
        <path strokeLinecap="round" d="M3 15v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
      </svg>
    ),
    github: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    linkedin: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    close: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12"/>
      </svg>
    ),
    externalLink: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    ),
    university: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M12 3L2 9l10 6 10-6-10-6zM6 11v7M18 11v7M10 13v5M14 13v5"/>
      </svg>
    ),
    certificate: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    arrow: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    bullet: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="10" width="4" height="4" rx="1"/>
      </svg>
    ),
  };
  return icons[nombre] ?? (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  );
}
