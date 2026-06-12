"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-brand-navy/60 backdrop-blur-md border-b border-brand-silver/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-amber p-[2px] flex items-center justify-center shadow-lg shadow-brand-blue/20">
            <div className="w-full h-full bg-brand-navy rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-brand-silver">
              AK
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-brand-silver group-hover:text-brand-blue transition-colors duration-300">
                ABKREA
              </span>
              <div className="relative group/badge">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-amber fill-brand-amber/15" />
                <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-brand-navy-light text-brand-amber text-[10px] font-mono font-semibold py-1 px-2.5 rounded-md border border-brand-amber/20 opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover/badge:opacity-100 group-hover/badge:scale-100 z-50 whitespace-nowrap">
                  SETEC-CAL-2018-092
                </div>
              </div>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-silver/50">
              Ingeniería
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["cursos", "nosotros", "certificaciones", "contacto"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-brand-silver/70 hover:text-brand-silver transition-colors relative py-1 capitalize cursor-pointer after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/593996511463?text=Hola%20AbKrea,%20quiero%20más%20información%20sobre%20sus%20capacitaciones."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-sm font-semibold rounded-xl transition-all shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/35 hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-brand-silver hover:text-brand-blue transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bottom-0 bg-brand-navy/95 backdrop-blur-lg border-t border-brand-silver/5 flex flex-col justify-between p-8 z-40 animate-fade-in">
          <nav className="flex flex-col gap-6 text-lg font-semibold">
            {["cursos", "nosotros", "certificaciones", "contacto"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left py-2 border-b border-brand-silver/5 text-brand-silver/80 hover:text-brand-blue capitalize transition-colors cursor-pointer"
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/593996511463?text=Hola%20AbKrea,%20quiero%20más%20información%20sobre%20sus%20capacitaciones."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver font-semibold rounded-xl transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chatear por WhatsApp</span>
            </a>
            <span className="text-center text-xs font-mono text-brand-silver/40">
              SETEC-CAL-2018-092 • Ambato
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
