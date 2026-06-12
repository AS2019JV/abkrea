"use client";

import { ShieldCheck, MessageSquare, ArrowDown, Award, Flame, Zap, Wrench } from "lucide-react";

export default function HeroIntro() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      
      {/* Sticky viewport overlay */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-between py-24 px-6 md:px-12 overflow-hidden">
        
        {/* --- Top Spacer --- */}
        <div className="h-6" />

        {/* --- Middle Layer: Side Copy Panels & Phrase Morphing --- */}
        <div className="relative w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE: VALUE PROPOSITIONS */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-start">
            
            {/* Card Set 1 - Left: Capacitación de Elite */}
            <div
              id="left-card-1"
              className="glass-card p-6 rounded-3xl w-full max-w-sm border-l-4 border-l-brand-blue opacity-0 -translate-x-12 transform pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight text-brand-silver">Capacitación de Elite</span>
              </div>
              <p className="text-xs text-brand-silver/70 leading-relaxed">
                Domina herramientas como SOLIDWORKS y RHINOCEROS con instructores calificados y metodología 100% práctica orientada a proyectos.
              </p>
            </div>

            {/* Card Set 2 - Left: Talleres Prácticos */}
            <div
              id="left-card-2"
              className="glass-card p-6 rounded-3xl w-full max-w-sm border-l-4 border-l-brand-amber opacity-0 -translate-x-12 transform absolute top-0 pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-brand-amber/15 border border-brand-amber/20 flex items-center justify-center text-brand-amber">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight text-brand-silver">Talleres Prácticos</span>
              </div>
              <p className="text-xs text-brand-silver/70 leading-relaxed">
                Aprende de forma presencial en Ambato con laboratorios equipados de Soldadura, Ajuste Mecánico y Redes Eléctricas.
              </p>
            </div>

          </div>

          {/* CENTER BUFFER: PHRASE MORPHING COMPONENT */}
          <div className="lg:col-span-4 flex items-center justify-center min-h-[150px]">
            <div 
              id="phrase-container" 
              className="relative w-full h-[150px] flex items-center justify-center text-center opacity-0 scale-95 transform pointer-events-auto"
            >
              {/* Phrase 1: SETEC Registry details */}
              <div
                id="phrase-1"
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
              >
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/25 text-brand-amber font-mono text-[10px] uppercase font-bold tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Código: SETEC-CAL-2018-092</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-brand-silver tracking-tight uppercase leading-[1.25] text-center max-w-sm">
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
                <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-amber tracking-tight uppercase leading-[1.25] text-center max-w-sm">
                  Tu futuro profesional <br />
                  <span>Empieza Aquí</span>
                </h3>
                <a
                  href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20más%20información%20sobre%20sus%20talleres%20y%20cursos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-xs font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chatear Ahora</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: BUSINESS VALUES */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-end">
            
            {/* Card Set 1 - Right: Deducción de Impuestos */}
            <div
              id="right-card-1"
              className="glass-card p-6 rounded-3xl w-full max-w-sm border-r-4 border-r-brand-blue opacity-0 translate-x-12 transform pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-3 lg:justify-end">
                <span className="font-bold text-sm tracking-tight text-brand-silver">Incentivo Tributario B2B</span>
                <div className="w-8 h-8 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-brand-silver/70 leading-relaxed lg:text-right">
                Las empresas pueden deducir los gastos invertidos en capacitaciones oficiales directamente de su declaración anual de Impuesto a la Renta.
              </p>
            </div>

            {/* Card Set 2 - Right: Conexión Inmediata */}
            <div
              id="right-card-2"
              className="glass-card p-6 rounded-3xl w-full max-w-sm border-r-4 border-r-brand-amber opacity-0 translate-x-12 transform absolute top-0 pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-3 lg:justify-end">
                <span className="font-bold text-sm tracking-tight text-brand-silver">Asistencia Inmediata</span>
                <div className="w-8 h-8 rounded-xl bg-brand-amber/15 border border-brand-amber/20 flex items-center justify-center text-brand-amber">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-brand-silver/70 leading-relaxed lg:text-right">
                Priorizamos la conversión directa de estudiantes mediante soporte inmediato en WhatsApp y un canal de asistencia simplificado.
              </p>
            </div>

          </div>

        </div>

        {/* --- Bottom Layer: Pulsing Scroll Down Prompt --- */}
        <div
          id="scroll-indicator"
          className="w-full flex flex-col items-center justify-center gap-2 text-center text-xs font-mono font-bold tracking-widest text-brand-silver/60 pointer-events-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver to-brand-silver/40">
            DESLIZA HACIA ABAJO PARA EMPEZAR
          </span>
          <div className="relative w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center shadow-lg shadow-brand-blue/10 animate-bounce">
            <ArrowDown className="w-4 h-4 text-brand-blue" />
          </div>
        </div>

      </div>

    </div>
  );
}
