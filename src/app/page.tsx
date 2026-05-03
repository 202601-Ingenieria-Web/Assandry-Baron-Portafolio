// src/app/page.tsx
// Página principal — layout de tres columnas con todas las secciones

import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import SectionTitle from "@/components/atoms/SectionTitle";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import EducationCard from "@/components/molecules/EducationCard";
import ProjectCard from "@/components/molecules/ProjectCard";
import { conocimientos, educacion, proyectos } from "@/data/portfolioData";

/**
 * Page — componente raíz.
 * Layout: sidebar izquierdo fijo | contenido central con scroll | sidebar derecho fijo
 */
export default function Home() {
  return (
    <div className="layout-grid">

      {/* ——— Sidebar Izquierdo ——— */}
      <LeftSidebar />

      {/* ——— Contenido Central ——— */}
      <main className="main-content">

        {/* Perfil / Hero */}
        <ProfileSection />

        <div className="h-3 bg-gray-100" />

        {/* Conocimientos */}
        <section className="bg-gray-50 px-8 md:px-12 py-12">
          <SectionTitle
            titulo="Mis Conocimientos"
            descripcion="Tecnologías y habilidades que he desarrollado a lo largo de mi formación académica y experiencia laboral."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {conocimientos.map((item) => (
              <KnowledgeCard key={item.titulo} titulo={item.titulo} descripcion={item.descripcion} icono={item.icono} />
            ))}
          </div>
        </section>

        <div className="h-3 bg-gray-100" />

        {/* Educación */}
        <section className="bg-white px-8 md:px-12 py-12">
          <SectionTitle
            titulo="Educación"
            descripcion="Mi trayectoria académica y certificaciones que respaldan mi perfil profesional."
          />
          <div className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm divide-y divide-gray-50">
            {educacion.map((item) => (
              <EducationCard
                key={item.titulo}
                institucion={item.institucion}
                titulo={item.titulo}
                fechas={item.fechas}
                descripcion={item.descripcion}
                tipo={item.tipo}
              />
            ))}
          </div>
        </section>

        <div className="h-3 bg-gray-100" />

        {/* Portafolio */}
        <section className="bg-white px-8 md:px-12 py-12">
          <SectionTitle
            titulo="Portafolio"
            descripcion="Proyectos y trabajos que evidencian mis habilidades técnicas en desarrollo de software."
          />
          <div className="scroll-horizontal">
            {proyectos.map((p) => (
              <ProjectCard
                key={p.titulo}
                titulo={p.titulo}
                descripcion={p.descripcion}
                gradiente={p.gradiente}
                emoji={p.emoji}
                descripcionDetallada={p.descripcionDetallada}
                tecnologias={p.tecnologias}
                github={p.github}
                demo={p.demo}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 px-8 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-heading font-bold text-white text-sm">
              Assandry Baron Rodriguez
            </p>
            <p className="text-xs text-gray-400 font-body">
              {new Date().getFullYear()} · Todos los derechos reservados
            </p>
          </div>
        </footer>

      </main>

      {/* ——— Sidebar Derecho ——— */}
      <RightSidebar />

    </div>
  );
}
