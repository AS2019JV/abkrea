"use client";

import Image from "next/image";
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
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-brand-navy/60 backdrop-blur-md border-b border-brand-silver/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer group"
        >
          <div className="relative h-8 w-32 md:h-9 md:w-36 transition-opacity duration-300 opacity-90 hover:opacity-100">
            <Image
              src="/AbKrea-logo.svg"
              alt="AbKrea Logo"
              fill
              className="object-contain"
              priority
            />
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
