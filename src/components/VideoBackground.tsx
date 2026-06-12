"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    // Ensure videos are loaded
    videoA.load();
    videoB.load();

    // Play Video A (truck moving to center) on load
    videoA.play().catch((err) => console.log("Video A autoplay blocked: ", err));

    // Create a GSAP timeline for scroll transition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "800px top",
        scrub: true,
        onUpdate: (self) => {
          // Play Video B when it starts fading in
          if (self.progress > 0.1) {
            if (videoB.paused) {
              videoB.play().catch((err) => console.log("Video B play blocked: ", err));
            }
          } else {
            if (!videoB.paused) {
              videoB.pause();
              videoB.currentTime = 0;
            }
          }

          // Restart Video A if we scroll back to top
          if (self.progress < 0.05) {
            if (videoA.paused) {
              videoA.play().catch((err) => console.log("Video A play blocked: ", err));
            }
          }
        },
      },
    });

    // Animate opacity transition (soft cross-fade)
    tl.to(videoA, { opacity: 0, ease: "power1.inOut" }, 0)
      .to(videoB, { opacity: 1, ease: "power1.inOut" }, 0);

    return () => {
      if (videoA) videoA.pause();
      if (videoB) videoB.pause();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 bg-brand-navy overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {/* Dark tint overlay for modern tech-luxury contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/20 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0F172A_90%)] z-10" />

      {/* Video A: Truck Centers */}
      <video
        ref={videoARef}
        src="/video/A.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-100 will-change-opacity"
        style={{ filter: "brightness(0.85) contrast(1.1)" }}
      />

      {/* Video B: Truck Exits */}
      <video
        ref={videoBRef}
        src="/video/B.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-0 will-change-opacity"
        style={{ filter: "brightness(0.8) contrast(1.1)" }}
      />
    </div>
  );
}
