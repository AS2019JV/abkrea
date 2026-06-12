"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Award, Clock, MapPin, Eye } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import CourseDetailModal from "./CourseDetailModal";

interface Course {
  id: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  modality: string;
  modules: string[];
}

export default function CoursesGrid() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const courses: Course[] = [
    {
      id: "solidworks",
      title: "SOLIDWORKS Masterclass",
      tagline: "Diseño paramétrico e ingeniería de detalle en CAD/CAM/CAE.",
      image: "/images/web/1-new.webp",
      duration: "120 horas",
      modality: "Híbrido (Presencial/Online)",
      modules: [
        "SolidWorks Básico e Intermedio (Croquizado y Operaciones)",
        "Modelado de Ensamblajes Avanzados y Planos de Detalle",
        "SolidWorks Simulation (FEA - Análisis de Esfuerzos y Tensiones)",
        "Flow Simulation (CFD - Fluidodinámica y Transferencia Térmica)",
        "Miembros Estructurales, Chapa Metálica y Estructuras de Buses",
        "Diseño de Moldes de Inyección de Plásticos y Suelas de Calzado",
      ],
    },
    {
      id: "rhinoceros",
      title: "RHINOCEROS & GRASSHOPPER",
      tagline: "Modelado 3D libre y paramétrico para diseño industrial.",
      image: "/images/web/2-new.webp",
      duration: "80 horas",
      modality: "Presencial",
      modules: [
        "Introducción a Rhinoceros y Lógica de Curvas NURBS",
        "Modelado de Superficies Orgánicas Complejas",
        "Modelado Paramétrico Avanzado con Grasshopper Engine",
        "Especialización en Moldes de Calzado y Piezas Mecánicas",
      ],
    },
    {
      id: "electricidad",
      title: "ELECTRICIDAD INDUSTRIAL",
      tagline: "Cálculos, automatización y montaje de tableros de control.",
      image: "/images/web/6-new.webp",
      duration: "90 horas",
      modality: "Presencial (Práctico)",
      modules: [
        "Fundamentos de Electricidad y Leyes del Circuito",
        "Lectura de Esquemas Eléctricos e Instrumentación",
        "Esquemas y Cableado de Tableros de Control de Motores",
        "Cálculos de Redes de Baja Tensión y Protecciones NEMA/IEC",
      ],
    },
    {
      id: "soldadura",
      title: "SOLDADURA INDUSTRIAL",
      tagline: "Talleres prácticos de soldadura estructural SMAW / GMAW.",
      image: "/images/web/10-new.webp",
      duration: "60 horas",
      modality: "Presencial (100% Práctico)",
      modules: [
        "Seguridad Ocupacional en Talleres de Metalmecánica",
        "Técnicas de Soldadura por Arco Manual (SMAW)",
        "Soldadura en Atmósfera de Gas Protector (MIG/MAG - GMAW)",
        "Ensayos y Control de Calidad de Uniones de Soldadura",
      ],
    },
    {
      id: "salud",
      title: "PREPARACIÓN HOSPITALARIA Y SALUD",
      tagline: "Seguridad industrial, primeros auxilios y salud ocupacional.",
      image: "/images/web/5-new.webp",
      duration: "40 horas",
      modality: "Híbrido",
      modules: [
        "Primeros Auxilios y Soporte Básico de Vida (SOP)",
        "Bioseguridad y Gestión de Desechos Sanitarios",
        "Prevención de Riesgos Laborales y Seguridad Industrial",
        "Salud Ocupacional y Leyes de Prevención en el Ecuador",
      ],
    },
  ];

  // Mouse Spotlight Tracker (Modern Web Guidance best practice)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = grid.querySelectorAll(".spotlight-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="cursos" className="w-full max-w-4xl mx-auto px-6 py-12 scroll-mt-20">
      
      <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">Nuestra Oferta Académica</span>
        <h2 className="text-2xl md:text-3xl font-black text-brand-silver tracking-tight">
          Cursos de Formación Profesional
        </h2>
        <p className="text-brand-silver/55 text-sm leading-relaxed max-w-xl">
          Selecciona un curso para ver los módulos detallados, duración y registrar tu solicitud de información o matrícula.
        </p>
      </div>

      {/* Grid: 3-column feed/bento grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            className="spotlight-card glass-card relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between p-5 cursor-pointer group"
          >
            {/* Top row */}
            <div className="flex justify-between items-start z-10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-amber bg-brand-amber/10 border border-brand-amber/20 px-2 py-0.5 rounded">
                SETEC
              </span>
              <div className="flex items-center gap-1 text-[10px] font-mono text-brand-silver/50">
                <Clock className="w-3.5 h-3.5" />
                <span>{course.duration}</span>
              </div>
            </div>

            {/* Middle: Course Icon overlay on hover */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            </div>

            {/* Bottom details block */}
            <div className="flex flex-col gap-1.5 z-10 mt-auto">
              <h3 className="text-base font-bold text-brand-silver group-hover:text-brand-blue transition-colors leading-tight">
                {course.title}
              </h3>
              <p className="text-[11px] text-brand-silver/65 line-clamp-2 leading-relaxed">
                {course.tagline}
              </p>
              
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-blue font-semibold mt-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Ver Módulos</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bento Trust Card 1: Graduates 7-new.webp */}
        <div className="spotlight-card glass-panel relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-5 border border-brand-silver/5">
          <div className="absolute inset-0 z-0 opacity-45">
            <Image
              src="/images/web/7-new.webp"
              alt="Egresados reales AbKrea"
              fill
              className="object-cover"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
          </div>
          <div className="flex flex-col gap-1.5 z-10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-amber font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantía de Aprendizaje</span>
            </div>
            <h4 className="text-sm font-bold text-brand-silver leading-tight">Estudiantes Reales</h4>
            <p className="text-[10px] text-brand-silver/65 leading-relaxed">
              Egresados capacitados de forma práctica con sus títulos aprobados directamente en la sede de Ambato.
            </p>
          </div>
        </div>

        {/* Bento Trust Card 2: SETEC registry 8-new.webp */}
        <div className="spotlight-card glass-panel relative rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-end p-5 border border-brand-silver/5">
          <div className="absolute inset-0 z-0 opacity-45">
            <Image
              src="/images/web/8-new.webp"
              alt="Acreditación SETEC"
              fill
              className="object-cover"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
          </div>
          <div className="flex flex-col gap-1.5 z-10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-blue font-bold mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Incentivo Tributario B2B</span>
            </div>
            <h4 className="text-sm font-bold text-brand-silver leading-tight">Deducibilidad de Impuestos</h4>
            <p className="text-[10px] text-brand-silver/65 leading-relaxed">
              Capacitación calificada SETEC que permite deducir el gasto de capacitación laboral del Impuesto a la Renta anual de su empresa.
            </p>
          </div>
        </div>

      </div>

      {/* Modal render */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
