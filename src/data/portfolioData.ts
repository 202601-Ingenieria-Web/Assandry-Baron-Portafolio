// src/data/portfolioData.ts
// Datos centralizados del portafolio de Assandry Baron Rodriguez

export const personalInfo = {
  nombre: "Assandry Barón",
  nombreCompleto: "Assandry Enrique Barón Rodriguez",
  titulo: "Ingeniero de Sistemas en Formación",
  ciudad: "Marinilla, Antioquia",
  telefono: "301 549 3547",
  correo: "a.baron17029@gmail.com",
  foto: "/foto.png",
  perfil:
    "Me considero una persona capaz de afrontar nuevos retos tanto personales como laborales, respetuoso con los demás, honrado y responsable. Siempre dispuesto a enfrentar los desafíos que se me asignen, me gusta estar en la búsqueda constante de nuevos conocimientos y aprender de las nuevas experiencias que nos aporta cada día.",
};

export const contacto = [
  { icono: "location", label: "Ciudad",    valor: "Marinilla, Antioquia" },
  { icono: "phone",    label: "Teléfono",  valor: "301 549 3547" },
  { icono: "email",    label: "Correo",    valor: "a.baron17029@gmail.com" },
];

export const idiomas = [
  { nombre: "Español", porcentaje: 100 },
  { nombre: "Inglés",  porcentaje: 70  },
];

export const lenguajes = [
  { nombre: "Java",       porcentaje: 100 },
  { nombre: "HTML",       porcentaje: 70  },
  { nombre: "CSS",        porcentaje: 65  },
  { nombre: "JavaScript", porcentaje: 55  },
  { nombre: "TypeScript", porcentaje: 40  },
  { nombre: "Linux/Bash", porcentaje: 50  },
];

export const habilidades = [
  "Liderazgo y gestión de equipos",
  "Resolución de problemas",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Gestión de inventarios",
  "Adaptabilidad",
  "Manejo de SIIGO y Excel",
  "Aprendizaje continuo",
];

export const conocimientos = [
  {
    titulo: "Desarrollo Web",
    descripcion:
      "Conocimientos en HTML, CSS, JavaScript y TypeScript para construir interfaces modernas y responsivas.",
    icono: "web",
  },
  {
    titulo: "Java & Spring Boot",
    descripcion:
      "Desarrollo de aplicaciones backend robustas con Java y Spring Boot, creando APIs REST escalables y seguras.",
    icono: "java",
  },
  {
    titulo: "Contenedores & DevOps",
    descripcion:
      "Curso certificado en Red Hat OpenShift y fundamentos de contenedores con Podman para despliegue de aplicaciones.",
    icono: "container",
  },
  {
    titulo: "Linux",
    descripcion:
      "Certificación en Linux Fundamentals 9.1 con Red Hat. Manejo de terminal, gestión de archivos y scripting básico.",
    icono: "linux",
  },
  {
    titulo: "Machine Learning",
    descripcion:
      "Formación en sistemas de ML en producción con Google Skills, entendiendo el ciclo de vida de modelos de IA.",
    icono: "ml",
  },
  {
    titulo: "Gestión Empresarial",
    descripcion:
      "Experiencia en administración, manejo de inventarios, compras, coordinación de personal y gestión de proveedores.",
    icono: "business",
  },
];

export const educacion = [
  {
    institucion: "Universidad de Antioquia",
    titulo: "Ingeniería de Sistemas (en formación)",
    fechas: "Actualmente — Nivel 9",
    descripcion:
      "Formación profesional en ingeniería de sistemas, con énfasis en desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas.",
    tipo: "Universidad",
  },
  {
    institucion: "Red Hat",
    titulo: "Red Hat OpenShift Development I: Introducción a Contenedores con Podman 4.14",
    fechas: "2024 — Virtual",
    descripcion:
      "Curso oficial de Red Hat sobre contenedores, orquestación y despliegue de aplicaciones con OpenShift y Podman.",
    tipo: "Certificación",
  },
  {
    institucion: "Red Hat",
    titulo: "Getting Started With Linux Fundamentals 9.1",
    fechas: "2024 — Virtual",
    descripcion:
      "Fundamentos del sistema operativo Linux, manejo de terminal, gestión de usuarios, permisos y scripting básico.",
    tipo: "Certificación",
  },
  {
    institucion: "Google Skills",
    titulo: "Production Machine Learning Systems",
    fechas: "2024 — Virtual",
    descripcion:
      "Formación en sistemas de ML en producción: pipelines, monitoreo de modelos, gestión de datos y buenas prácticas.",
    tipo: "Certificación",
  },
  {
    institucion: "Instituto Técnico Compuoriente",
    titulo: "Técnico Profesional en Programación y Aplicación en Computadores",
    fechas: "2007 — Marinilla",
    descripcion:
      "Técnico profesional con bases en programación, sistemas de información y aplicaciones computacionales.",
    tipo: "Técnico",
  },
  {
    institucion: "Centro de Estudios Técnicos de América",
    titulo: "Auxiliar en Administración Microempresarial",
    fechas: "2007 — Medellín",
    descripcion:
      "Formación en administración de microempresas, contabilidad básica, gestión de recursos y operaciones empresariales.",
    tipo: "Técnico",
  },
];

export const proyectos = [
  {
    titulo: "Portafolio Personal",
    descripcion: "Sitio web personal desarrollado con Next.js, TypeScript y TailwindCSS.",
    gradiente: "from-indigo-500 via-purple-500 to-blue-600",
    emoji: "💼",
    descripcionDetallada:
      "Proyecto evaluativo de la materia Ingeniería Web. Implementación de un portafolio personal completo usando Next.js 14, TypeScript, TailwindCSS con diseño responsivo, atomic design, componentes reutilizables, modales, scroll horizontal y despliegue en Vercel.",
    tecnologias: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    github: "https://github.com/AssandryBaron/Assandry-Baron-Portafolio",
    demo: "https://assandry-baron.vercel.app/",
  },
  {
    titulo: "Gestor de Tareas Domésticas",
    descripcion: "Aplicación fullstack para gestión de tareas del hogar. Proyecto académico Fábrica Escuela — Universidad de Antioquia.",
    gradiente: "from-emerald-500 via-teal-500 to-cyan-600",
    emoji: "🏠",
    descripcionDetallada:
      "Proyecto desarrollado en la Fábrica Escuela de la Universidad de Antioquia. Sistema fullstack para la gestión de tareas domésticas: permite crear, asignar, priorizar y hacer seguimiento de tareas del hogar. El backend expone una API REST construida con Spring Boot y Java, la base de datos está gestionada con PostgreSQL, el frontend es una SPA en React con TypeScript, y el despliegue del frontend se realiza en Vercel.",
    tecnologias: ["React", "Spring Boot", "Java", "PostgreSQL", "TypeScript", "Vercel"],
    github: "https://github.com/CristianAlvarez00/sistema-domesticas-back",
    demo: "",
  },
  {
    titulo: "ScoreLab — Gestor de Torneos",
    descripcion: "Plataforma fullstack para la gestión y seguimiento de torneos deportivos. Registro de equipos, fixtures, resultados y tablas de posiciones en tiempo real.",
    gradiente: "from-orange-500 via-red-500 to-rose-600",
    emoji: "🏆",
    descripcionDetallada:
      "ScoreLab es una plataforma fullstack para la creación y gestión de torneos deportivos. Permite registrar equipos y jugadores, generar fixtures automáticos, registrar resultados de partidos y consultar tablas de posiciones actualizadas en tiempo real. El backend está construido con Spring Boot y Java, expone una API REST consumida por el frontend en React. La base de datos es PostgreSQL y el despliegue se realiza en la nube.",
    tecnologias: ["React", "Spring Boot", "Java", "PostgreSQL", "TypeScript", "REST API"],
    github: "https://github.com/AssandryBaron/scorelab-backend",
    demo: "",
  },
];

export const redesSociales = [
  {
    nombre: "GitHub",
    url: "https://github.com/assandry-baron",
    icono: "github",
  },
  {
    nombre: "LinkedIn",
    url: "https://linkedin.com/in/assandry-baron",
    icono: "linkedin",
  },
  {
    nombre: "Email",
    url: "mailto:a.baron17029@gmail.com",
    icono: "email",
  },
];
