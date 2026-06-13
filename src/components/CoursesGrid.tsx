"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, MessageSquare, Award, Clock, MapPin, Eye, Heart, Send, Bookmark } from "lucide-react";
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
      id: "iron_queens",
      title: "IRON QUEENS: Soldadura para Mujeres",
      tagline: "Procesos SMAW, GMAW y GTAW para soldadoras industriales.",
      image: "/images/web/iron_queens.webp",
      duration: "40 horas",
      modality: "Presencial",
      modules: [
        "Introducción a la Soldadura y Procesos SMAW (Arco Manual)",
        "Procesos Semiautomáticos GMAW (MIG/MAG) y GTAW (TIG)",
        "Normas de Seguridad Ocupacional y Equipos de Protección",
        "Prácticas de Soldadura en Ángulo y Juntas Estructurales",
        "Certificación Opcional de Competencias en Soldadura MDT"
      ],
    },
    {
      id: "disoluciones_quimicas",
      title: "Preparación de Disoluciones Químicas",
      tagline: "Preparación y manejo seguro de disoluciones en limpieza hospitalaria.",
      image: "/images/web/disoluciones_quimicas.webp",
      duration: "40 horas",
      modality: "Virtual",
      modules: [
        "Fundamentos de las Disoluciones Químicas en Limpieza Hospitalaria",
        "Normativa y Seguridad Química (Fichas Técnicas y HDS)",
        "Equipos de Protección Personal (EPP) y Medidas de Seguridad",
        "Preparación Correcta y Técnica de Disoluciones Desinfectantes",
        "Manejo, Almacenamiento, Control de Derrames y Emergencias"
      ],
    },
    {
      id: "procesos_higienizacion",
      title: "Procesos de Higienización Hospitalaria",
      tagline: "Limpieza y desinfección clínica con gestión integral de bioseguridad.",
      image: "/images/web/procesos_higienizacion.webp",
      duration: "40 horas",
      modality: "Híbrido",
      modules: [
        "Procesos de Contratación en Instituciones de Salud Públicas y Privadas",
        "Limpieza e Higienización en Áreas Asociadas a la Atención de Salud",
        "Manipulación y Disolución de Productos Químicos de Limpieza",
        "Eliminación y Gestión de Desechos Hospitalarios (Leyes y Normas)",
        "Utilización y Mantenimiento de Equipos de Limpieza Especializada",
        "Certificación de Competencias MDT: Operaciones de Limpieza en Salud (Opcional)"
      ],
    },
    {
      id: "metalmecanica",
      title: "Mantenimiento Preventivo y Correctivo Industrial",
      tagline: "Gestión de máquinas y equipos en la industria metalmecánica.",
      image: "/images/web/metalmecanica.webp",
      duration: "40 horas académicas",
      modality: "Virtual Grabado",
      modules: [
        "Mantenimiento Preventivo y Correctivo de Compresores",
        "Mantenimiento de Herramientas Eléctricas (Amoladoras, Taladros, Cortadoras)",
        "Mantenimiento de Tornos Paralelos Industriales",
        "Mantenimiento de Fresadoras y Mandrinadoras",
        "Mantenimiento de Equipos de Soldadura SMAW y GMAW"
      ],
    },
    {
      id: "soldadura",
      title: "Inspección de Calidad de Soldadura",
      tagline: "Ensayos no destructivos (NDT) y control de calidad en uniones soldadas.",
      image: "/images/web/soldadura.webp",
      duration: "40 horas académicas",
      modality: "Virtual Grabado",
      modules: [
        "Introducción al Control de Calidad e Inspección Visual (VT)",
        "Ensayos por Tintas Penetrantes (PT) y Principios Físicos",
        "Ensayos por Partículas Magnéticas (MT) y Equipamientos",
        "Ensayos por Ultrasonido (UT) y Calibración de Equipos",
        "Principios de Radiografía Industrial (RT) y Seguridad Radiológica"
      ],
    },
    {
      id: "solidworks",
      title: "Aplicaciones de Ingeniería: SOLIDWORKS",
      tagline: "Modelado paramétrico, ensamblaje, validación estructural y simulación CAM/CNC.",
      image: "/images/web/solidworks.webp",
      duration: "40 horas académicas",
      modality: "Virtual Grabado",
      modules: [
        "Modelado y Diseño de Elementos y Piezas de Máquinas",
        "Ensamblaje Avanzado y Simulación de Movimiento de Máquinas",
        "Generación de Planos Constructivos y de Detalle Normalizados",
        "Validación de Elementos Estructurales y Análisis de Esfuerzos (FEA)",
        "Diseño, Cálculo y Simulación de Estructuras Metálicas",
        "Simulación de Llenado de Moldes de Inyección y CAM-CNC"
      ],
    },
  ];

  // Mouse Spotlight Tracker & 3D Tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation limits based on mouse offsets (symmetrical)
    const rx = ((y / rect.height) - 0.5) * -12; // tilt angle X
    const ry = ((x / rect.width) - 0.5) * 12;   // tilt angle Y

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--ty", `-6px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
    card.style.setProperty("--ty", `0px`);
  };

  return (
    <div id="cursos" className="w-full max-w-4xl mx-auto px-6 py-12 scroll-mt-20">
      
      <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-blue font-bold">Nuestra Oferta Académica</span>
        <h2 className="text-2xl sm:text-3xl font-black text-brand-silver tracking-tight">
          Cursos de Formación Profesional
        </h2>
        <p className="text-brand-silver/60 text-xs sm:text-sm leading-relaxed max-w-xl">
          Selecciona un curso para ver los módulos detallados, duración y registrar tu solicitud de información o matrícula.
        </p>
      </div>

      {/* Grid: Desktop 3-column / Mobile: Instagram feed cards */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {courses.map((course) => (
          <div key={course.id} className="contents">
            
            {/* 1. Desktop 3D Card (hidden on mobile) */}
            <div
              onClick={() => setSelectedCourse(course)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="hidden md:flex spotlight-card glass-card tilt-card relative rounded-2xl overflow-hidden aspect-[4/5] flex-col justify-between p-5 cursor-pointer group hover:border-brand-blue/30"
              style={{
                transform: "translateY(var(--ty, 0px)) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
              }}
            >
              {/* Top row */}
              <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-amber bg-brand-amber/10 border border-brand-amber/20 px-2.5 py-0.5 rounded">
                  SETEC
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-silver/60">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Background with desaturation that turns on on hover */}
              <div className="absolute inset-0 z-0 transition-opacity duration-300">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover grayscale brightness-50 opacity-40 group-hover:grayscale-0 group-hover:brightness-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent group-hover:from-brand-navy/80 group-hover:via-transparent transition-all duration-500" />
              </div>

              {/* Spotlight cursor radial gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(37,99,235,0.4)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Bottom details block - fades out on hover in desktop mode to show full card image */}
              <div className="flex flex-col gap-1.5 z-10 mt-auto tilt-inner transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-base font-bold text-brand-silver leading-tight drop-shadow-sm">
                  {course.title}
                </h3>
                <p className="text-xs text-brand-silver/70 line-clamp-2 leading-relaxed">
                  {course.tagline}
                </p>
                
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-brand-blue font-semibold mt-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Módulos</span>
                </div>
              </div>
            </div>

            {/* 2. Mobile Instagram-feel post (hidden on desktop) */}
            <div
              onClick={() => setSelectedCourse(course)}
              className="flex md:hidden flex-col bg-brand-navy-light/35 border border-brand-silver/5 rounded-2xl overflow-hidden mb-6 shadow-lg cursor-pointer"
            >
              {/* Instagram Header */}
              <div className="flex items-center justify-between p-3.5 border-b border-brand-silver/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full story-ring flex items-center justify-center p-[2px]">
                    <div className="w-full h-full rounded-full bg-brand-navy overflow-hidden p-1 flex items-center justify-center">
                      <Image
                        src="/AbKrea-logo.svg"
                        alt="Logo"
                        width={24}
                        height={10}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-brand-silver flex items-center gap-1">
                      abkrea_ingenieria
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-blue fill-brand-blue/10" />
                    </span>
                    <span className="text-[10px] text-brand-silver/50 font-mono">Calificación SETEC</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-brand-amber bg-brand-amber/10 px-2 py-0.5 rounded border border-brand-amber/20 font-bold uppercase">
                  {course.modality}
                </span>
              </div>

              {/* Instagram Post Image */}
              <div className="relative aspect-square w-full bg-brand-navy-light/20 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between p-3.5 border-t border-brand-silver/5 text-[11px]">
                <span className="font-mono font-bold uppercase tracking-wider text-brand-blue">
                  Curso Calificado SETEC
                </span>
                <div className="flex items-center gap-1.5 text-brand-silver/60 font-mono">
                  <Clock className="w-4 h-4 text-brand-amber" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Caption details block */}
              <div className="px-4 pb-4 flex flex-col gap-1.5 text-xs">
                <p className="text-brand-silver leading-relaxed">
                  <span className="font-bold mr-1.5 text-brand-silver">abkrea_ingenieria</span>
                  <span className="font-bold text-brand-blue">{course.title}</span> • {course.tagline}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-blue font-bold mt-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Toca para ver los módulos e inscribirte</span>
                </div>
              </div>
            </div>

          </div>
        ))}


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
