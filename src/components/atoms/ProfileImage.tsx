// src/components/atoms/ProfileImage.tsx
"use client";

interface ProfileImageProps {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
}

/** ProfileImage — imagen con fallback. Client Component por usar onError. */
export default function ProfileImage({ src, alt, fallbackText = "AB", className = "w-full h-full object-cover" }: ProfileImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = "none";
        const p = t.parentElement;
        if (p) p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#fef3dc,#f5a623);"><span style="font-family:Poppins,sans-serif;font-size:2rem;font-weight:700;color:#fff;">${fallbackText}</span></div>`;
      }}
    />
  );
}
