"use client";

import Image from "next/image";
import { Award, ShieldCheck, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function CompanyInfo() {
  return (
    <div className="w-full bg-brand-navy-light/20 py-16 border-t border-brand-silver/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
        
        {/* Section 1: Quiénes Somos / Misión / Visión */}
        <div id="nosotros" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start scroll-mt-20">
          {/* Left: Who We Are & Mission */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-blue font-bold">Quiénes Somos</span>
              <h3 className="text-2xl font-black text-brand-silver tracking-tight">ABKREA Ingeniería</h3>
            </div>
            <p className="text-sm text-brand-silver/70 leading-relaxed">
              Somos una empresa de capacitación técnica profesional basada en la ciudad de Ambato, Ecuador. Nos enfocamos en la capacitación continua en ingenierías como Mecánica, Mecatrónica, Industrial, Civil y Electrónica. 
            </p>
            <div className="glass-panel p-5 rounded-2xl border-l-2 border-l-brand-blue">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold block mb-1">Misión</span>
              <p className="text-xs text-brand-silver/80 leading-relaxed">
                Brindar capacitación continua en la zona centro del país con perfiles curriculares avalados y docentes certificados, logrando ampliar el perfil profesional y laboral de quienes optan por nuestros servicios.
              </p>
            </div>
          </div>

          {/* Right: Vision & Why SETEC matters */}
          <div className="flex flex-col gap-6 md:pt-10">
            <div className="glass-panel p-5 rounded-2xl border-l-2 border-l-brand-amber">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-amber font-bold block mb-1">Visión</span>
              <p className="text-xs text-brand-silver/80 leading-relaxed">
                Incrementar la oferta de cursos certificados abarcando especialidades de formación académica clave, y expandir nuestros servicios de capacitación de elite en las principales zonas de desarrollo del país.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-brand-amber font-semibold uppercase tracking-wider">Acreditación SETEC-CAL-2018-092</span>
              <p className="text-xs text-brand-silver/70 leading-relaxed">
                Nuestros certificados cuentan con el aval oficial del Ministerio de Trabajo (MDT) y Senescyt, permitiendo el registro formal de horas de capacitación en la plataforma estatal y facilitando procesos de licitación pública y privada para empresas.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Certificaciones Oficiales (Static Images) */}
        <div id="certificaciones" className="flex flex-col gap-8 scroll-mt-20">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">Certificaciones Oficiales</span>
            <h3 className="text-2xl font-black text-brand-silver tracking-tight">
              Acreditación Legal SETEC
            </h3>
            <p className="text-brand-silver/55 text-sm leading-relaxed max-w-xl">
              Nuestra calificación como Centro de Capacitación puede ser comprobada mediante los registros oficiales.
            </p>
          </div>

          {/* Static Certificates layout grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Banner Certificate-1.webp */}
            <div className="md:col-span-2 relative glass-panel rounded-2xl overflow-hidden aspect-[1237/312] border border-brand-silver/5 shadow-xl transition-all hover:scale-[1.01] hover:border-brand-silver/10">
              <Image
                src="/images/web/Certificate-1.webp"
                alt="Registro de Calificación SETEC Banner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            {/* Badge Certificate-2.webp */}
            <div className="relative glass-panel rounded-2xl overflow-hidden aspect-[407/482] border border-brand-silver/5 shadow-xl max-w-[260px] mx-auto md:max-w-none w-full transition-all hover:scale-[1.01] hover:border-brand-silver/10">
              <Image
                src="/images/web/Certificate-2.webp"
                alt="Acreditación Oficial Sello SETEC"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>

          </div>

          {/* High-conversion Verification CTA Box */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-amber/15 border border-brand-amber/30 flex items-center justify-center text-brand-amber mt-1 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-brand-silver">¿Deseas validar la autenticidad de tu certificado?</h4>
                <p className="text-xs text-brand-silver/60 leading-relaxed max-w-md">
                  Envía el código de registro o número de identificación directamente a nuestro departamento de registro vía WhatsApp para una consulta inmediata.
                </p>
              </div>
            </div>
            
            <a
              href="https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20validar%20un%20certificado%20académico."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-xs font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] flex-shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Validar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Section 3: Contact details & footer */}
        <div id="contacto" className="border-t border-brand-silver/5 pt-12 flex flex-col gap-8 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Column 1: Phones */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/45">Teléfonos de contacto</span>
                <span className="text-brand-silver font-medium hover:text-brand-blue transition-colors">
                  Celular: +593 996511463
                </span>
                <span className="text-brand-silver/70">
                  Teléfono Fijo: (03) 2854983
                </span>
              </div>
            </div>

            {/* Column 2: Emails */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/45">Correos de soporte</span>
                <a href="mailto:asistencia.abkrea@gmail.com" className="text-brand-silver font-medium hover:text-brand-blue transition-colors">
                  asistencia.abkrea@gmail.com
                </a>
                <span className="text-brand-silver/50">www.abkrea.com</span>
              </div>
            </div>

            {/* Column 3: Location */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-light flex items-center justify-center text-brand-blue flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver/45">Dirección de Sede</span>
                <span className="text-brand-silver leading-relaxed">
                  Av. Pedro Vásconez Sevilla y Puerto Barrios, sector Izamba (cerca del colegio Tirso de Molina), Ambato, Ecuador.
                </span>
              </div>
            </div>
          </div>

          {/* Core Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-silver/5 pt-6 text-[10px] font-mono text-brand-silver/40 gap-4">
            <span>© {new Date().getFullYear()} ABKREA Ingeniería Cía. Ltda. Todos los derechos reservados.</span>
            <span>Centro de Capacitación calificado SETEC-CAL-2018-092.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
