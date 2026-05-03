// src/components/organisms/ProfileSection.tsx
// Sección hero con foto grande, nombre, título amarillo, descripción, botón y modal

"use client";

import { useState } from "react";
import IconSVG from "@/components/atoms/IconSVG";
import ProfileImage from "@/components/atoms/ProfileImage";
import { personalInfo } from "@/data/portfolioData";

/** ProfileSection — hero principal. Foto a la derecha, texto a la izquierda, botón con modal. */
export default function ProfileSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="hero-section bg-white px-8 md:px-12 py-12 relative overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-brand/5 rounded-full translate-y-1/2 pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texto izquierdo */}
          <div className="flex-1 max-w-lg">
            <p className="text-sm text-gray-500 font-body mb-2">Hola, soy</p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-1">
              {personalInfo.nombre}
            </h2>
            <h3 className="font-heading text-3xl md:text-4xl font-extrabold mb-5">
              <span className="text-brand">{personalInfo.titulo.split(" ").slice(0, 2).join(" ")}</span>{" "}
              <span className="text-gray-900">{personalInfo.titulo.split(" ").slice(2).join(" ")}</span>
            </h3>
            <p className="text-sm text-gray-500 font-body leading-relaxed mb-7 max-w-sm">
              {personalInfo.perfil}
            </p>
            <button onClick={() => setOpen(true)} className="btn-yellow">
              CONTÁCTAME <IconSVG nombre="arrow" className="w-4 h-4" />
            </button>
          </div>

          {/* Foto derecha */}
          <div className="flex-shrink-0">
            <div className="w-52 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <ProfileImage src={personalInfo.foto} alt={personalInfo.nombre} fallbackText="AB" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Modal de perfil */}
      {open && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="modal-box bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <IconSVG nombre="close" className="w-4 h-4 text-gray-600" />
            </button>

            <div className="w-8 h-1 bg-brand rounded mb-4" />
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Sobre mí</h3>
            <p className="text-xs font-heading text-brand font-semibold mb-4">{personalInfo.titulo}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 leading-relaxed font-body">{personalInfo.perfil}</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Nombre", valor: personalInfo.nombreCompleto },
                  { label: "Ciudad", valor: personalInfo.ciudad },
                  { label: "Correo", valor: personalInfo.correo },
                  { label: "Universidad", valor: "Universidad de Antioquia — Nivel 9" },
                  { label: "Freelance", valor: "Disponible" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-xs text-gray-400 font-body">{item.label}</span>
                    <span className={`text-xs font-body font-medium ${item.label === "Freelance" ? "text-green-500" : "text-gray-700"}`}>{item.valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
