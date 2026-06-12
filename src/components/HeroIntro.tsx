"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageSquare, ShieldCheck, ArrowDown } from "lucide-react";

export default function HeroIntro() {
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animations for panels framing the center video
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(leftPanel, { x: -80, opacity: 0 });
      gsap.set(rightPanel, { x: 80, opacity: 0 });
      gsap.set(scrollIndicator, { y: 20, opacity: 0 });

      // Trigger animations with a slight delay to let Video A load
      gsap.to(leftPanel, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.to(rightPanel, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: 1.0,
        ease: "power3.out",
      });

      gsap.to(scrollIndicator, {
        y: 0,
        opacity: 0.7,
        duration: 1,
        delay: 1.6,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen max-w-7xl mx-auto px-6 flex flex-col justify-center items-between pt-24 pb-12 overflow-hidden pointer-events-none">
      
      {/* Central content frame: Left and Right floating sideboards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center my-auto">
        
        {/* Left Side: Pitch and Primary Conversion */}
        <div
          ref={leftPanelRef}
          className="lg:col-span-5 flex flex-col gap-6 text-left pointer-events-auto bg-brand-navy/30 backdrop-blur-[2px] p-6 lg:p-0 rounded-3xl"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-brand-amber/10 border border-brand-amber/25 text-brand-amber font-mono text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Código: SETEC-CAL-2018-092</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-brand-silver tracking-tight leading-[1.15]">
            Capacitación <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-amber">
              Técnica de Elite
            </span>
          </h1>

          <p className="text-brand-silver/70 text-base leading-relaxed max-w-sm">
            Potenciamos el perfil técnico de ingenieros, profesionales y empresas en Ecuador con metodologías avanzadas de CAD/CAM, Soldadura, Mecánica y más.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20más%20información%20sobre%20sus%20cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver font-semibold rounded-2xl transition-all shadow-xl shadow-brand-blue/30 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Center Buffer: Left Empty to Showcase Center Truck Video */}
        <div className="hidden lg:block lg:col-span-2 h-10 pointer-events-none" />

        {/* Right Side: Trust Metrics and Micro-statements */}
        <div
          ref={rightPanelRef}
          className="lg:col-span-5 flex flex-col gap-6 lg:items-end pointer-events-auto bg-brand-navy/30 backdrop-blur-[2px] p-6 lg:p-0 rounded-3xl"
        >
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="glass-card p-4 rounded-2xl border-l-2 border-l-brand-blue">
              <span className="block text-2xl font-black text-brand-silver">+500</span>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/50">
                Graduados
              </span>
            </div>
            <div className="glass-card p-4 rounded-2xl border-l-2 border-l-brand-amber">
              <span className="block text-2xl font-black text-brand-silver">100%</span>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/50">
                Deductible IS
              </span>
            </div>
          </div>

          {/* Micro Mission Quote */}
          <div className="glass-panel p-6 rounded-2xl w-full max-w-sm text-left lg:text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber block mb-2">
              Nuestra Misión
            </span>
            <p className="text-brand-silver/80 text-sm italic leading-relaxed">
              &ldquo;Brindar capacitación continua con docentes certificados para ampliar el perfil profesional técnico en el centro del país.&rdquo;
            </p>
          </div>

          <div className="text-left lg:text-right max-w-sm">
            <span className="text-xs font-mono text-brand-silver/40">
              Sede Principal: Av. Pedro Vásconez Sevilla y Puerto Barrios, Izamba, Ambato.
            </span>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="w-full flex justify-center items-center gap-2 text-xs font-mono tracking-widest text-brand-silver/40 pt-6 animate-bounce"
      >
        <span>Desliza para ver más</span>
        <ArrowDown className="w-4 h-4 text-brand-blue" />
      </div>
    </section>
  );
}
