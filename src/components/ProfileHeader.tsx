"use client";

import Image from "next/image";
import { ShieldCheck, MessageSquare, Award } from "lucide-react";

export default function ProfileHeader() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 border-b border-brand-silver/5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        
        {/* Left: Avatar Logo Container */}
        <div className="relative group">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full story-ring flex items-center justify-center p-[4px] shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-brand-navy relative overflow-hidden border-2 border-brand-navy p-4 flex items-center justify-center">
              <Image
                src="/AbKrea-logo.svg"
                alt="AbKrea Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-brand-amber text-[9px] font-mono font-bold uppercase tracking-wider text-brand-navy z-10 border border-brand-navy shadow-lg">
            Oficial
          </span>
        </div>

        {/* Right: Instagram Info Profile Metadata */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          
          {/* Row 1: Brand Identifier & Verified Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-brand-silver">
              abkrea_ingenieria
            </h2>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-xs font-mono font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>SETEC Verificado</span>
            </div>
          </div>

          {/* Row 2: Statistics counters */}
          <div className="flex items-center justify-center md:justify-start gap-8 border-y border-brand-silver/5 py-3 md:border-none md:py-0 text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <span className="font-bold text-brand-silver text-base">5</span>
              <span className="text-brand-silver/55 text-xs font-mono uppercase tracking-wider">Cursos</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <span className="font-bold text-brand-silver text-base">+500</span>
              <span className="text-brand-silver/55 text-xs font-mono uppercase tracking-wider">Egresados</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-1">
              <span className="font-bold text-brand-silver text-base">1</span>
              <span className="text-brand-silver/55 text-xs font-mono uppercase tracking-wider">Registro SETEC</span>
            </div>
          </div>

          {/* Row 3: Biography */}
          <div className="flex flex-col gap-2.5 text-sm">
            <p className="font-semibold text-brand-silver">ABKREA Ingeniería Cía. Ltda.</p>
            <p className="text-brand-silver/70 leading-relaxed max-w-xl">
              Capacitación continua y especializada de élite. Registros académicos avalados legalmente bajo la calificación del Ministerio de Trabajo en Ecuador. 
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 font-mono text-[11px] text-brand-blue">
              <a href="mailto:asistencia.abkrea@gmail.com" className="hover:underline transition-all">
                asistencia.abkrea@gmail.com
              </a>
              <span className="text-brand-silver/20 hidden sm:inline">•</span>
              <span className="text-brand-silver/55">Ambato, Ecuador</span>
            </div>
          </div>

          {/* Row 4: CTAs Button row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20matricularme%20en%20uno%20de%20sus%20cursos%20técnicos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-sm font-semibold rounded-xl transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>
            <button
              onClick={() => handleScrollToSection("certificaciones")}
              className="flex items-center gap-2 px-6 py-3 bg-brand-navy-light hover:bg-brand-navy-light/80 text-brand-silver text-sm font-semibold rounded-xl transition-all border border-brand-silver/10 hover:border-brand-silver/20 cursor-pointer"
            >
              <Award className="w-4 h-4 text-brand-amber" />
              <span>Ver Certificaciones</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
