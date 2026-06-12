"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Award, Flame, Cpu, Wrench, Award as CertificateIcon, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Highlight {
  id: string;
  title: string;
  icon: React.ReactNode;
  thumbnail: string;
  slides: {
    url: string;
    caption: string;
  }[];
}

export default function StoriesHighlights() {
  const [activeHighlight, setActiveHighlight] = useState<Highlight | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const highlights: Highlight[] = [
    {
      id: "acreditacion",
      title: "Aval SETEC",
      icon: <CertificateIcon className="w-5 h-5 text-brand-amber" />,
      thumbnail: "/images/web/badgage.webp",
      slides: [
        {
          url: "/images/web/badgage.webp",
          caption: "Acreditación Oficial SETEC-CAL-2018-092 emitida por el Ministerio de Trabajo y Senescyt.",
        },
        {
          url: "/images/web/badgage.webp",
          caption: "Validación de horas curriculares para la deducibilidad tributaria de su empresa.",
        },
      ],
    },
    {
      id: "solidworks",
      title: "SolidWorks",
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      thumbnail: "/images/web/2-new.webp",
      slides: [
        {
          url: "/images/web/2-new.webp",
          caption: "Diseño y simulación de carrocerías de buses / camiones con SolidWorks Flow Simulation.",
        },
        {
          url: "/images/web/4-new.webp",
          caption: "Modelado paramétrico avanzado e ingeniería inversa de componentes industriales.",
        },
      ],
    },
    {
      id: "soldadura",
      title: "Soldadura",
      icon: <Flame className="w-5 h-5 text-brand-amber" />,
      thumbnail: "/images/web/10-new.webp",
      slides: [
        {
          url: "/images/web/10-new.webp",
          caption: "Talleres prácticos de soldadura industrial y preparación de uniones estructurales.",
        },
      ],
    },
    {
      id: "electricidad",
      title: "Electricidad",
      icon: <Award className="w-5 h-5 text-brand-blue" />,
      thumbnail: "/images/web/6-new.webp",
      slides: [
        {
          url: "/images/web/6-new.webp",
          caption: "Diseño de redes eléctricas industriales, tableros de control y normativas NEMA.",
        },
      ],
    },
    {
      id: "mecanica",
      title: "Mecánica",
      icon: <Wrench className="w-5 h-5 text-brand-amber" />,
      thumbnail: "/images/web/5-new.webp",
      slides: [
        {
          url: "/images/web/5-new.webp",
          caption: "Ajuste mecánico y diagnóstico de sistemas de transmisión de potencia industrial.",
        },
      ],
    },
  ];

  // Story Auto-Advance and Progress Bar Logic
  useEffect(() => {
    if (!activeHighlight) return;

    setProgress(0);
    const intervalTime = 50; // Update progress every 50ms
    const totalDuration = 5000; // 5 seconds per slide
    const steps = totalDuration / intervalTime;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Time's up: go to next slide or close
          if (currentSlideIndex < activeHighlight.slides.length - 1) {
            setCurrentSlideIndex((prevIndex) => prevIndex + 1);
            return 0;
          } else {
            // End of highlight: close story modal
            setActiveHighlight(null);
            return 0;
          }
        }
        return prev + 100 / steps;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeHighlight, currentSlideIndex]);

  const handleHighlightClick = (highlight: Highlight) => {
    setActiveHighlight(highlight);
    setCurrentSlideIndex(0);
    setProgress(0);
  };

  const handleNext = () => {
    if (!activeHighlight) return;
    if (currentSlideIndex < activeHighlight.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setProgress(0);
    } else {
      setActiveHighlight(null);
    }
  };

  const handlePrev = () => {
    if (!activeHighlight) return;
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setProgress(0);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8">
      {/* Highlights Circle Carousel */}
      <div className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-brand-navy-light scrollbar-track-transparent">
        {highlights.map((item) => (
          <div
            key={item.id}
            onClick={() => handleHighlightClick(item)}
            className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0"
          >
            {/* Circle Ring */}
            <div className="relative w-20 h-20 rounded-full story-ring flex items-center justify-center p-[3px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-brand-navy relative overflow-hidden border-2 border-brand-navy">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:brightness-90 transition-all"
                  sizes="80px"
                  priority
                />
                <div className="absolute inset-0 bg-brand-navy/30 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
            <span className="text-xs font-medium tracking-tight text-brand-silver/85 group-hover:text-brand-silver">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Full-Screen Slideshow Modal */}
      <AnimatePresence>
        {activeHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Close trigger */}
            <button
              onClick={() => setActiveHighlight(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-brand-navy-light/60 backdrop-blur-md text-brand-silver hover:text-brand-blue border border-brand-silver/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main story box */}
            <div className="relative w-full max-w-md aspect-[9/16] bg-brand-navy rounded-3xl overflow-hidden shadow-2xl border border-brand-silver/5 flex flex-col justify-between p-6">
              
              {/* Top: Progress Indicators */}
              <div className="absolute top-4 left-6 right-6 z-20 flex gap-1.5">
                {activeHighlight.slides.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 flex-1 bg-brand-silver/20 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-brand-blue rounded-full transition-all duration-[50ms]"
                      style={{
                        width:
                          index < currentSlideIndex
                            ? "100%"
                            : index === currentSlideIndex
                            ? `${progress}%`
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Top info badge */}
              <div className="absolute top-8 left-6 right-6 z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-navy-light border border-brand-silver/10 relative overflow-hidden flex items-center justify-center p-1.5">
                  <Image
                    src="/AbKrea-logo.svg"
                    alt="AbKrea Logo"
                    width={24}
                    height={8}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-brand-silver">
                    {activeHighlight.title}
                  </span>
                  <span className="text-[10px] text-brand-silver/60">
                    Hace un momento
                  </span>
                </div>
              </div>

              {/* Center: Story Slide Image */}
              <div className="absolute inset-0 z-10">
                {activeHighlight.slides[currentSlideIndex] && (
                  <Image
                    src={activeHighlight.slides[currentSlideIndex]?.url || ""}
                    alt={activeHighlight.title || ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/60" />
              </div>

              {/* Bottom: Story Caption */}
              <div className="relative z-20 mt-auto pt-4 flex flex-col gap-4 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent p-4 rounded-2xl">
                <p className="text-sm text-brand-silver leading-relaxed font-medium">
                  {activeHighlight.slides[currentSlideIndex]?.caption || ""}
                </p>
                
                {/* Instant Link CTA */}
                <a
                  href={`https://wa.me/593996511463?text=Hola%20AbKrea,%20estoy%20viendo%20el%20destacado%20de%20${activeHighlight.title}%20y%20quiero%20más%20detalles.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-brand-silver text-xs font-semibold rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Mensaje Rápido</span>
                </a>
              </div>

              {/* Slide Navigation Triggers (Left / Right overlays) */}
              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 backdrop-blur-sm text-brand-silver hover:text-brand-blue transition-opacity cursor-pointer ${
                  currentSlideIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 backdrop-blur-sm text-brand-silver hover:text-brand-blue cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
