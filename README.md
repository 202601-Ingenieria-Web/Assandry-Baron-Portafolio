# Portafolio Personal — Assandry Baron Rodriguez

Proyecto evaluativo #1 de la materia **Ingeniería Web** (Juan Pablo Arango).  
Portafolio personal desarrollado con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Demo

**Vercel:** [assandry-baron.vercel.app](https://assandry-baron.vercel.app)  
**Repositorio:** [github.com/tu-usuario/assandry-baron-rodriguez-portafolio](https://github.com)

---

## 🛠 Tecnologías usadas

| Tecnología | Versión | Propósito |
|---|---|---|
| Next.js | 14.2.3 | Framework React con App Router |
| TypeScript | ^5 | Tipado estático del código |
| TailwindCSS | ^3.3 | Estilos utilitarios |
| React | ^18 | Biblioteca de UI |

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── layout.tsx         # Layout raíz con metadata SEO
│   └── page.tsx           # Página principal (ensamblaje de secciones)
├── components/
│   ├── atoms/             # Componentes atómicos (reutilizables mínimos)
│   │   ├── Badge.tsx          → Etiqueta pill para tecnologías
│   │   ├── IconSVG.tsx        → Librería centralizada de íconos SVG
│   │   ├── SectionTitle.tsx   → Encabezado de sección con acento visual
│   │   └── SkillBar.tsx       → Barra de progreso para habilidades
│   ├── molecules/         # Componentes moleculares (combinan átomos)
│   │   ├── EducationCard.tsx  → Card de historial educativo con timeline
│   │   ├── KnowledgeCard.tsx  → Card de conocimiento con ícono
│   │   └── ProjectCard.tsx    → Card de portafolio con modal
│   └── organisms/         # Componentes organismo (secciones completas)
│       ├── LeftSidebar.tsx    → Panel izquierdo fijo (info personal)
│       ├── ProfileSection.tsx → Sección hero con modal
│       └── RightSidebar.tsx   → Panel derecho fijo (redes sociales)
└── data/
    └── portfolioData.ts   # Datos centralizados del portafolio
```

---

## 🎨 Atomic Design

El proyecto implementa **Atomic Design** con 3 niveles:

- **Átomos** (`atoms/`): Componentes mínimos e indivisibles — `SkillBar`, `Badge`, `SectionTitle`, `IconSVG`. Cada uno se reutiliza en más de 2 partes del código.
- **Moléculas** (`molecules/`): Combinan átomos — `KnowledgeCard` usa `IconSVG`, `EducationCard` usa `IconSVG` y `Badge`, `ProjectCard` usa `Badge` e `IconSVG`.
- **Organismos** (`organisms/`): Secciones completas — `LeftSidebar` usa `SkillBar` e `IconSVG`, `ProfileSection` usa `Badge` e `IconSVG`, `RightSidebar` usa `IconSVG`.

**Total de componentes reutilizados:** 7 (supera el mínimo de 6 requerido).

---

## 📦 Cómo ejecutar localmente

### Prerrequisitos
- Node.js >= 18
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/assandry-baron-rodriguez-portafolio.git
cd assandry-baron-rodriguez-portafolio

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

### Build de producción

```bash
npm run build
npm start
```

---

## 🌐 Despliegue en Vercel

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Importar el repositorio de GitHub
3. Vercel detecta automáticamente Next.js — sin configuración adicional
4. El dominio queda en: `assandry-baron.vercel.app`

---

## 📐 Secciones del portafolio

| Sección | Componente | Descripción |
|---|---|---|
| Sidebar izquierdo | `LeftSidebar` | Foto, nombre, contacto, idiomas, lenguajes, habilidades |
| Perfil | `ProfileSection` | Hero con foto en fondo blanco + modal informativo |
| Conocimientos | `KnowledgeCard` | 6 cards con ícono, título y descripción |
| Educación | `EducationCard` | Timeline de estudios formales y certificaciones |
| Portafolio | `ProjectCard` | Scroll horizontal de proyectos con modal de detalle |
| Footer | `page.tsx` | Footer de diseño libre con stack tecnológico |
| Sidebar derecho | `RightSidebar` | Íconos de GitHub, LinkedIn y email |

---

## ✨ Características adicionales

- **Animaciones CSS** — fade-in, slide-up en modales, hover con elevación
- **Modales** — perfil extendido y detalle de proyectos con backdrop blur
- **Scroll horizontal** — sección de portafolio con snap scrolling
- **Dark mode** — tema oscuro con paleta vibrante
- **Barras de habilidades** — con gradiente animado
- **Íconos SVG propios** — librería centralizada de trazados originales
- **Totalmente responsivo** — adaptado a móvil, tablet y escritorio
- **Google Fonts** — Syne + DM Sans + JetBrains Mono

---

## 👤 Autor

**Assandry Enrique Baron Rodriguez**  
Ingeniería de Sistemas — Universidad de Antioquia (Nivel 9)  
📧 a.baron17029@gmail.com  
📍 Marinilla, Antioquia, Colombia

---

*Proyecto evaluativo #1 — Ingeniería Web — 2026*
