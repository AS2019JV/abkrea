"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Mail, Phone, MapPin, MessageSquare, Clock, Send, Globe } from "lucide-react";

export default function CompanyInfo() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      console.log("[NEWSLETTER SUBSCRIPTION]:", newsletterEmail);
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }
  };

  return (
    <div className="w-full bg-brand-navy-light/10 py-16 border-t border-brand-silver/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
        
        {/* Section 1: Quiénes Somos / Misión / Visión */}
        <div id="nosotros" className="flex flex-col gap-10 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-blue font-bold">Quiénes Somos</span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-silver tracking-tight">ABKREA Ingeniería</h3>
              <p className="text-sm text-brand-silver/70 leading-relaxed">
                Somos una empresa de capacitación técnica profesional basada en la ciudad de Ambato, Ecuador. Nos enfocamos en la capacitación continua en ingenierías clave como Mecánica, Mecatrónica, Industrial, Civil y Electrónica.
              </p>
            </div>
            {/* Symmetrical divider column */}
            <div className="md:col-span-5 hidden md:block border-l border-brand-silver/5 pl-8 py-2">
              <span className="text-xs font-mono text-brand-silver/45 uppercase tracking-widest block mb-2">Valores</span>
              <p className="text-xs text-brand-silver/55 leading-relaxed">
                Nuestra enseñanza combina rigor técnico y experiencia práctica en talleres, asegurando que cada egresado adquiera habilidades de alta demanda en la industria.
              </p>
            </div>
          </div>

          {/* Misión & Visión Cards - Symmetrical Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Misión Card */}
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-blue flex flex-col sm:flex-row items-center gap-5 hover:border-l-brand-blue-hover transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-blue font-bold">Misión</span>
                </div>
                <p className="text-xs text-brand-silver/85 leading-relaxed">
                  Brindar capacitación continua en la zona centro del país con perfiles curriculares avalados y docentes certificados, logrando ampliar el perfil profesional y laboral de quienes optan por nuestros servicios.
                </p>
              </div>
              {/* Sized-down live zoom classroom image */}
              <div className="relative w-36 h-24 rounded-xl overflow-hidden border border-brand-silver/5 shadow-md flex-shrink-0">
                <Image
                  src="/images/web/capacitacion.webp"
                  alt="Capacitación Misión"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            </div>

            {/* Visión Card */}
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-brand-amber flex flex-col sm:flex-row items-center gap-5 hover:border-l-brand-amber transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-amber font-bold">Visión</span>
                </div>
                <p className="text-xs text-brand-silver/85 leading-relaxed">
                  Incrementar la oferta de cursos certificados abarcando especialidades de formación académica clave, y expandir nuestros servicios de capacitación de elite en las principales zonas de desarrollo del país.
                </p>
              </div>
              {/* Sized-down graduates certificates image */}
              <div className="relative w-36 h-24 rounded-xl overflow-hidden border border-brand-silver/5 shadow-md flex-shrink-0">
                <Image
                  src="/images/web/certificados.webp"
                  alt="Certificaciones de Graduados"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Acreditación Legal SETEC */}
        <div id="certificaciones" className="flex flex-col gap-8 scroll-mt-20 border-t border-brand-silver/5 pt-12">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-amber font-bold">Acreditación Legal</span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-silver tracking-tight">
              Acreditación Legal SETEC
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: legal details & badge info */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-brand-silver/70 text-xs sm:text-sm leading-relaxed">
                Nuestra calificación oficial como Operador de Capacitación Profesional bajo la resolución <strong>SETEC-CAL-2018-092</strong> puede ser verificada en los registros del Ministerio del Trabajo. Nuestros certificados cuentan con el aval legal de la Secretaría Técnica del Sistema Nacional de Cualificaciones Profesionales (SETEC) y el Ministerio de Trabajo, permitiendo el registro formal de horas de capacitación técnica en el portal del gobierno y facilitando ascensos y procesos de licitación pública y privada para empresas (Incentivo B2B).
              </p>
              {/* Premium ministerial resolution tag */}
              <div className="flex items-center gap-3 py-2 px-4 bg-brand-amber/5 border border-brand-amber/15 rounded-xl w-fit">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-amber font-bold">
                  Resolución Ministerial SETEC-CAL-2018-092
                </span>
              </div>
            </div>

            {/* Right side: Composite Trust Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[4/3] flex items-center justify-center">
                {/* Main Graduates Photo Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-silver/10 shadow-xl">
                  <Image
                    src="/images/web/certificados.webp"
                    alt="Certificaciones de Capacitación"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent pointer-events-none" />
                </div>
                
                {/* Overlapping SETEC Trust Seal Badge */}
                <div className="absolute -bottom-4 -left-4 w-24 h-32 rounded-2xl border border-brand-amber/25 bg-brand-navy/95 backdrop-blur-md flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.15)] transition-transform hover:scale-105 z-10 p-2">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/web/badgage.png"
                      alt="Sello SETEC"
                      fill
                      className="object-contain"
                      sizes="90px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-conversion Verification CTA Box */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-amber/15 border border-brand-amber/30 flex items-center justify-center text-brand-amber mt-1 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm sm:text-base font-bold text-brand-silver">¿Deseas validar la autenticidad de tu certificado?</h4>
                <p className="text-xs text-brand-silver/60 leading-relaxed max-w-md">
                  Envía el código de registro o número de identificación directamente a nuestro departamento de registro vía WhatsApp para una consulta inmediata.
                </p>
              </div>
            </div>
            
            <a
              href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20validar%20un%20certificado%20académico."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] flex-shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Validar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Section 3: Luxury Footer & Contact Details (I) */}
        <div id="contacto" className="border-t border-brand-silver/5 pt-12 flex flex-col gap-12 scroll-mt-20">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-sm">
            
            {/* Column 1: Phones */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-silver/40">Teléfonos de contacto</span>
                <a href="tel:+593996511463" className="text-brand-silver font-medium hover:text-brand-blue transition-colors text-sm sm:text-base">
                  Celular: +593 996511463
                </a>
                <a href="tel:+59332854983" className="text-brand-silver/70 hover:text-brand-blue transition-colors">
                  Teléfono Fijo: (03) 2854983
                </a>
              </div>
            </div>

            {/* Column 2: Emails */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-silver/40">Correos de soporte</span>
                <a href="mailto:asistencia.abkrea@gmail.com" className="text-brand-silver font-medium hover:text-brand-blue transition-colors text-sm sm:text-base break-all">
                  asistencia.abkrea@gmail.com
                </a>
                <a href="https://www.abkrea.com" target="_blank" rel="noopener noreferrer" className="text-brand-silver/55 hover:text-brand-blue transition-colors flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <span>www.abkrea.com</span>
                </a>
              </div>
            </div>

            {/* Column 3: Location */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-silver/40">Dirección de Sede</span>
                <a 
                  href="https://maps.google.com/?q=Av.+Pedro+Vásconez+Sevilla+y+Puerto+Barrios,+Izamba,+Ambato,+Ecuador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-silver/80 leading-relaxed hover:text-brand-blue transition-colors"
                >
                  Av. Pedro Vásconez Sevilla y Puerto Barrios, sector Izamba (cerca del colegio Tirso de Molina), Ambato, Ecuador.
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter / Cotizaciones Corporativas card (luxury best practice) */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-silver/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5 text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold text-brand-silver">Cotizaciones e Información de Cursos</h4>
              <p className="text-xs text-brand-silver/65 max-w-md">
                Suscríbete a nuestro boletín mensual para recibir cronogramas de inicio de clases y descuentos especiales de preventa.
              </p>
            </div>
            {newsletterStatus === "success" ? (
              <div className="px-6 py-3 bg-brand-blue/15 border border-brand-blue/30 rounded-xl text-brand-blue text-xs font-semibold">
                ¡Gracias por suscribirte!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto items-center max-w-sm bg-brand-navy-light/60 rounded-xl border border-brand-silver/10 p-1.5">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent text-xs text-brand-silver placeholder:text-brand-silver/35 px-3 py-2 focus:outline-none flex-grow"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Social Row & copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-silver/5 pt-8 gap-4 text-xs font-mono text-brand-silver/40">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span>© {new Date().getFullYear()} ABKREA Ingeniería Cía. Ltda. Todos los derechos reservados.</span>
              <span>Centro de Capacitación calificado SETEC-CAL-2018-092.</span>
            </div>
            
            {/* Social icons row */}
            <div className="flex items-center gap-5 text-brand-silver/50">
              <a href="https://wa.me/593996511463" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-1.5" title="WhatsApp">
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
              <a href="mailto:asistencia.abkrea@gmail.com" className="hover:text-brand-blue transition-colors flex items-center gap-1.5" title="Correo">
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a href="https://www.abkrea.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-1.5" title="Sitio Web">
                <Globe className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
