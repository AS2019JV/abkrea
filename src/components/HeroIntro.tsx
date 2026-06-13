"use client";

import { ShieldCheck, MessageSquare, ArrowDown, Cpu, Sliders, TrendingUp, Clock } from "lucide-react";

export default function HeroIntro() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      
      {/* Sticky viewport overlay - pb-6 to pb-8 to lower scroll prompt into clear dark background */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-between pt-20 pb-6 md:pt-24 md:pb-8 px-6 md:px-12 overflow-hidden">
        
        {/* --- Top Spacer --- */}
        <div className="h-6" />

        {/* --- Middle Layer: Grid-cols-12 layout restoring left/right cards placement on PC --- */}
        <div className="relative w-full h-[65vh] lg:h-auto max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT SIDE: VALUE PROPOSITIONS (lg:col-span-4 - far left) */}
          <div className="w-full lg:col-span-4 absolute lg:relative top-[2vh] sm:top-[3vh] lg:top-auto left-0 right-0 px-4 lg:px-0 flex justify-center lg:block z-30">
            {/* Height wrapper to hold cards stacked in the exact same position */}
            <div className="relative w-full max-w-[340px] sm:max-w-sm lg:max-w-md h-[140px] sm:h-[160px] lg:h-[350px]">
              
              {/* Card Set 1 - Left: Capacitación de Elite */}
              <div
                id="left-card-1"
                className="absolute lg:relative inset-x-0 top-0 lg:top-auto glass-card p-5 lg:p-7 rounded-3xl w-full border-l-4 border-l-brand-blue opacity-0 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                    <Cpu className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
                  </div>
                  <span className="font-black text-xs sm:text-sm lg:text-base tracking-tight text-brand-silver">Capacitación de Elite</span>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-brand-silver/75 leading-relaxed">
                  Domina herramientas como SOLIDWORKS y RHINOCEROS con instructores calificados y metodología 100% práctica orientada a proyectos.
                </p>
              </div>

              {/* Card Set 2 - Left: Talleres Prácticos */}
              <div
                id="left-card-2"
                className="absolute lg:relative inset-x-0 top-0 lg:top-auto glass-card p-5 lg:p-7 rounded-3xl w-full border-l-4 border-l-brand-amber opacity-0 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-brand-amber/15 border border-brand-amber/25 flex items-center justify-center text-brand-amber">
                    <Sliders className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
                  </div>
                  <span className="font-black text-xs sm:text-sm lg:text-base tracking-tight text-brand-silver">Talleres Prácticos</span>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-brand-silver/75 leading-relaxed">
                  Aprende de forma presencial en Ambato con laboratorios equipados de Soldadura, Ajuste Mecánico y Redes Eléctricas.
                </p>
              </div>

            </div>
          </div>

          {/* CENTER BUFFER: PHRASE MORPHING COMPONENT (lg:col-span-4 - middle center) */}
          <div className="w-full lg:col-span-4 absolute lg:relative top-[36%] -translate-y-1/2 lg:translate-y-0 left-0 right-0 px-4 lg:px-0 flex justify-center lg:block z-30">
            <div 
              id="phrase-container" 
              className="relative w-full h-[150px] flex items-center justify-center text-center opacity-0 pointer-events-auto z-20"
            >
              {/* Phrase 1: SETEC Registry details */}
              <div
                id="phrase-1"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              >
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/25 text-brand-amber font-mono text-[11px] sm:text-xs uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Código: SETEC-CAL-2018-092</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-brand-silver tracking-tight uppercase leading-[1.25] text-center max-w-sm">
                  Acreditación Oficial <br />
                  <span className="text-brand-amber">MDT / Senescyt</span>
                </h3>
              </div>

              {/* Phrase 2: Final CTA Hook */}
              <div
                id="phrase-2"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 select-none"
                style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-amber tracking-tight uppercase leading-[1.25] text-center max-w-sm">
                  Tu futuro profesional <br />
                  <span>Empieza Aquí</span>
                </h3>
                <a
                  href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20más%20información%20sobre%20sus%20talleres%20y%20cursos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chatear Ahora</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: BUSINESS VALUES (lg:col-span-4 - far right) */}
          <div className="w-full lg:col-span-4 absolute lg:relative bottom-[2vh] sm:bottom-[3vh] lg:bottom-auto left-0 right-0 px-4 lg:px-0 flex justify-center lg:block z-30">
            {/* Height wrapper to hold cards stacked in the exact same position */}
            <div className="relative w-full max-w-[340px] sm:max-w-sm lg:max-w-md h-[140px] sm:h-[160px] lg:h-[350px] flex flex-col lg:items-end">
              
              {/* Card Set 1 - Right: Deducción de Impuestos */}
              <div
                id="right-card-1"
                className="absolute lg:relative inset-x-0 bottom-0 lg:bottom-auto glass-card p-5 lg:p-7 rounded-3xl w-full border-r-4 border-r-brand-blue opacity-0 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-2.5 mb-2.5 lg:justify-end">
                  <span className="font-black text-xs sm:text-sm lg:text-base tracking-tight text-brand-silver">Incentivo Tributario B2B</span>
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                    <TrendingUp className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-brand-silver/75 leading-relaxed lg:text-right">
                  Las empresas pueden deducir los gastos invertidos en capacitaciones oficiales directamente de su declaración anual de Impuesto a la Renta.
                </p>
              </div>

              {/* Card Set 2 - Right: Conexión Inmediata */}
              <div
                id="right-card-2"
                className="absolute lg:relative inset-x-0 bottom-0 lg:bottom-auto glass-card p-5 lg:p-7 rounded-3xl w-full border-r-4 border-r-brand-amber opacity-0 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-2.5 mb-2.5 lg:justify-end">
                  <span className="font-black text-xs sm:text-sm lg:text-base tracking-tight text-brand-silver">Asistencia Inmediata</span>
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-brand-amber/15 border border-brand-amber/20 flex items-center justify-center text-brand-amber">
                    <Clock className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-brand-silver/75 leading-relaxed lg:text-right">
                  Priorizamos la conversión directa de estudiantes mediante soporte inmediato en WhatsApp y un canal de asistencia simplificado.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* --- Bottom Layer: Pulsing Scroll Down Prompt & Mira Cursos Prompt --- */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Scroll Down Prompt (High-visibility setup) */}
          <div
            id="scroll-indicator"
            className="w-full flex flex-col items-center justify-center gap-3 text-center pointer-events-auto"
          >
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-brand-silver/85 font-bold uppercase select-none animate-pulse">
              Desliza hacia abajo para empezar
            </span>
            {/* Elegant Tech-Luxury scroll vertical indicator (longer and glowing) */}
            <div className="w-[2px] h-12 bg-brand-silver/20 relative overflow-hidden rounded-full shadow-[0_0_8px_rgba(248,250,252,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-brand-blue via-brand-blue/80 to-transparent rounded-full animate-scroll-line" />
            </div>
          </div>

          {/* Mira nuestros cursos prompt (appears at the center-bottom of screen at end of video) */}
          <div
            id="mira-cursos"
            className="absolute bottom-24 flex flex-col items-center justify-center gap-3 text-center pointer-events-auto opacity-0"
          >
            <button
              onClick={() => {
                const element = document.getElementById("cursos");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center gap-2 text-brand-silver/80 hover:text-brand-blue cursor-pointer transition-colors group"
            >
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-silver via-brand-silver/90 to-brand-silver/65 group-hover:from-brand-blue group-hover:to-brand-blue transition-all">
                Mira nuestros cursos
              </span>
              <div className="w-9 h-9 rounded-full bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center shadow-lg shadow-brand-blue/15 group-hover:scale-105 transition-transform">
                <ArrowDown className="w-4.5 h-4.5 text-brand-blue animate-bounce" />
              </div>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
