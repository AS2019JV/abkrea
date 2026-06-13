"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, MessageSquare, Mail, Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Course {
  id: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  modality: string;
  modules: string[];
}

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Perform simple validation check
    if (!formData.fullName || !formData.email || !formData.phone || !formData.consent) {
      setFormStatus("error");
      return;
    }

    try {
      // Mock API call to simulate lead capture storage
      // In Phase 2, this will hit `api/leads` (Supabase insertion with active RLS)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      const leadPayload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        courseInterest: course.title,
        status: "new",
        consentLopdp: formData.consent,
        submittedAt: new Date().toISOString(),
      };

      // Output to console to demonstrate mock database storage
      console.log("[MOCK LEAD STORAGE SUCCESS]:", leadPayload);

      // Trigger automatic backup email trigger log using env configuration
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "asistencia.abkrea@gmail.com";
      console.log(`[CRM TRIGGER]: Programmatic notification scheduled to: ${adminEmail}`);

      setFormStatus("success");
      setFormData({ fullName: "", email: "", phone: "", consent: false });
      setTouched({ fullName: false, email: false, phone: false });
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  // Field validation helpers for client feedback (Modern Web Guidance best practice)
  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (phone: string) => /^[0-9+() -]{9,15}$/.test(phone);

  const errors = {
    fullName: touched.fullName && !formData.fullName,
    email: touched.email && (!formData.email || !isEmailValid(formData.email)),
    phone: touched.phone && (!formData.phone || !isPhoneValid(formData.phone)),
  };

  const waLink = `https://wa.me/593996511463?text=Hola%20AbKrea,%20deseo%20más%20información%20y%20precios%20sobre%20el%20curso%20de%20${encodeURIComponent(
    course.title
  )}.`;

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex justify-center items-start md:items-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-4xl bg-brand-navy rounded-3xl overflow-hidden shadow-2xl border border-brand-silver/5 grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Side: Dynamic Media showcase */}
        <div className="relative h-56 md:h-full min-h-[220px] md:min-h-[450px] bg-brand-navy-light/40 overflow-hidden flex items-center justify-center">
          {/* Blurred duplicate background to fill spaces with premium aesthetics */}
          <Image
            src={course.image}
            alt=""
            fill
            className="object-cover blur-2xl opacity-20 scale-110"
            sizes="10vw"
            priority
          />
          
          {/* Clean Foreground containment displaying the entire flyer without cuts */}
          <div className="relative w-full h-full min-h-[180px] md:min-h-[380px] p-4 flex items-center justify-center z-10">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/60 z-20 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-1.5 pointer-events-none">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold px-2 py-0.5 rounded bg-brand-amber/10 border border-brand-amber/25 w-fit">
              SETEC Certificado
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-brand-silver drop-shadow-md">{course.title}</h3>
            <p className="text-xs text-brand-silver/80 drop-shadow">{course.tagline}</p>
          </div>
        </div>

        {/* Right Side: Syllabus details & lead form */}
        <div className="p-5 md:p-8 flex flex-col gap-5 md:max-h-[85vh] md:overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-brand-silver/55 uppercase tracking-wider">Detalles del curso</span>
              <span className="text-sm text-brand-silver/80">Modalidad: {course.modality} • Duración: {course.duration}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-brand-navy-light hover:bg-brand-silver/10 text-brand-silver/60 hover:text-brand-silver border border-brand-silver/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Syllabus Modules Accordion */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-amber font-semibold">Temario / Módulos de estudio</h4>
            <div className="flex flex-col gap-2 max-h-[160px] overflow-y-auto pr-2 border-y border-brand-silver/5 py-3">
              {course.modules.map((mod, index) => (
                <div key={index} className="flex gap-2.5 items-start text-sm text-brand-silver/85">
                  <div className="w-4 h-4 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-[10px] text-brand-blue mt-0.5 font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Conversion WhatsApp direct CTA */}
          <div className="flex flex-col gap-2.5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver font-semibold rounded-2xl transition-all shadow-xl shadow-brand-blue/25 hover:shadow-brand-blue/35 hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Preguntar en WhatsApp Directo</span>
            </a>
            <span className="text-[10px] text-center text-brand-silver/40 font-mono">
              Inicia una conversación directa para cotizaciones corporativas o cupos
            </span>
          </div>

          {/* Separator / Alternative Form */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-brand-silver/5"></div>
            <span className="flex-shrink mx-4 text-[10px] font-mono text-brand-silver/40 uppercase">O deja tus datos</span>
            <div className="flex-grow border-t border-brand-silver/5"></div>
          </div>

          {/* Lead capture form */}
          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center p-6 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl gap-2.5"
            >
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-blue shadow-lg">
                <Check className="w-6 h-6" />
              </div>
              <span className="font-bold text-brand-silver">¡Datos Recibidos con éxito!</span>
              <p className="text-xs text-brand-silver/70 max-w-xs leading-relaxed">
                Nos comunicaremos contigo en las próximas horas. También hemos enviado una alerta de seguimiento a <strong className="text-brand-blue">{process.env.NEXT_PUBLIC_ADMIN_EMAIL || "asistencia.abkrea@gmail.com"}</strong>.
              </p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Row: Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-brand-silver/60">Nombre Completo</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Ej. Juan Pérez"
                  className={`w-full px-4 py-3 bg-brand-navy-light/40 rounded-xl border text-sm text-brand-silver placeholder:text-brand-silver/30 focus:outline-none focus:border-brand-blue transition-colors ${
                    errors.fullName ? "border-red-500/50 focus:border-red-500" : "border-brand-silver/10"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    El nombre completo es requerido.
                  </span>
                )}
              </div>

              {/* Row: Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-brand-silver/60">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Ej. juan.perez@gmail.com"
                  className={`w-full px-4 py-3 bg-brand-navy-light/40 rounded-xl border text-sm text-brand-silver placeholder:text-brand-silver/30 focus:outline-none focus:border-brand-blue transition-colors ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-brand-silver/10"
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Por favor, ingresa un correo electrónico válido.
                  </span>
                )}
              </div>

              {/* Row: Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono uppercase tracking-widest text-brand-silver/60">WhatsApp / Celular</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Ej. 0996511463"
                  className={`w-full px-4 py-3 bg-brand-navy-light/40 rounded-xl border text-sm text-brand-silver placeholder:text-brand-silver/30 focus:outline-none focus:border-brand-blue transition-colors ${
                    errors.phone ? "border-red-500/50 focus:border-red-500" : "border-brand-silver/10"
                  }`}
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Ingresa un número de celular válido (ej. 0996511463).
                  </span>
                )}
              </div>

              {/* Row: LOPDP Consent */}
              <div className="flex items-start gap-2.5 mt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="w-4.5 h-4.5 rounded border-brand-silver/15 bg-brand-navy-light text-brand-blue focus:ring-0 mt-0.5 cursor-pointer"
                />
                <label htmlFor="consent" className="text-[10px] leading-relaxed text-brand-silver/50 select-none cursor-pointer">
                  Acepto el uso de mis datos exclusivamente para enviarme información de la capacitación, en cumplimiento de la Ley Orgánica de Protección de Datos Personales (LOPDP) en Ecuador.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-3 bg-brand-navy-light hover:bg-brand-navy-light/80 text-brand-silver text-sm font-semibold rounded-xl transition-all border border-brand-silver/10 hover:border-brand-silver/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Mail className="w-4 h-4 text-brand-silver/80" />
                <span>{formStatus === "submitting" ? "Enviando..." : "Enviar Solicitud"}</span>
              </button>
            </form>
          )}

        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
