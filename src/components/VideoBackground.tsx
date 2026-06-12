"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const video = videoRef.current;
    if (!video) return;

    // Force load video
    video.load();

    // Set initial states to prevent flash of content
    gsap.set("#main-header", { y: "-100%", opacity: 0 });
    gsap.set("#phrase-container", { opacity: 0, scale: 0.95 });

    const videoState = { time: 0 };

    // GSAP ScrollTrigger Timeline
    // Maps the scroll of #cinematic-container to the video playback and overlay animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cinematic-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.15, // Responsive, low-latency scrubbing for smooth keyframe-every-frame playback
      },
    });

    // Segment 1: Scroll 0% to 22.2% (Video 0s to 6s, duration 2.0) - Truck moves to front
    tl.to(videoState, {
      time: 6,
      duration: 2.0,
      ease: "none",
      onUpdate: () => {
        if (video.duration) {
          video.currentTime = videoState.time;
        }
      },
    }, 0)
    // Scale down the video from 1.0 to 0.8 to counteract the truck sizing up (driving forward)
    .to(videoRef.current, {
      scale: 0.8,
      duration: 2.0,
      ease: "power1.out",
    }, 0)

    // Segment 2: Scroll 22.2% to 61.1% (Video frozen at 6s, duration 3.5) - Sidebars fade in/out
    .to(videoState, {
      time: 6,
      duration: 3.5,
      ease: "none",
      onUpdate: () => {
        if (video.duration) {
          video.currentTime = 6;
        }
      },
    }, 2.0)

    // Segment 3: Scroll 61.1% to 77.8% (Video 6s to 10s, duration 1.5) - Truck moves to side
    .to(videoState, {
      time: 10,
      duration: 1.5,
      ease: "none",
      onUpdate: () => {
        if (video.duration) {
          video.currentTime = videoState.time;
        }
      },
    }, 5.5)

    // Segment 4: Scroll 77.8% to 100% (Video 10s to 13s, duration 2.0) - Truck exits to right
    .to(videoState, {
      time: 13,
      duration: 2.0,
      ease: "none",
      onUpdate: () => {
        if (video.duration) {
          video.currentTime = videoState.time;
        }
      },
    }, 7.0);

    // --- COORDINATED TIMELINE ANIMATIONS ---

    // 1. Scroll Indicator fades out immediately
    tl.to("#scroll-indicator", { opacity: 0, y: -20, duration: 0.5 }, 0.1);

    // 2. Header slides down at virtual t = 1.0 (video ~3s)
    tl.to("#main-header", { y: "0%", opacity: 1, duration: 0.5 }, 1.0);

    // 3. First set of Left/Right sideboards fade in/out during freeze (virtual t = 2.2 to 3.9)
    tl.to("#left-card-1", { x: 0, opacity: 1, duration: 0.5 }, 2.2)
      .to("#right-card-1", { x: 0, opacity: 1, duration: 0.5 }, 2.2)
      .to("#left-card-1", { y: -20, opacity: 0, duration: 0.4 }, 3.5)
      .to("#right-card-1", { y: -20, opacity: 0, duration: 0.4 }, 3.5);

    // 4. Second set of Left/Right sideboards fade in/out during freeze (virtual t = 3.9 to 5.4)
    tl.to("#left-card-2", { x: 0, opacity: 1, duration: 0.5 }, 3.9)
      .to("#right-card-2", { x: 0, opacity: 1, duration: 0.5 }, 3.9)
      .to("#left-card-2", { y: -20, opacity: 0, duration: 0.4 }, 5.0)
      .to("#right-card-2", { y: -20, opacity: 0, duration: 0.4 }, 5.0);

    // 5. Phrase Morphing container fades in (virtual t = 5.3)
    tl.to("#phrase-container", { opacity: 1, scale: 1, duration: 0.4 }, 5.3);

    // 6. Text-Clipping Mask Transition as truck moves right (virtual t = 7.0 to 8.3, video 10s to 12s)
    // Phrase 1 clips out to the right (left-to-right wipe), Phrase 2 reveals from the left (left-to-right reveal)
    tl.to("#phrase-1", { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", ease: "none", duration: 1.3 }, 7.0)
      .to("#phrase-2", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none", duration: 1.3 }, 7.0);

    // 7. Phrase Container fades out as truck exits (virtual t = 8.4)
    tl.to("#phrase-container", { opacity: 0, y: -30, duration: 0.5 }, 8.4);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="sticky top-0 left-0 w-full h-screen z-0 bg-brand-navy overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {/* Dark gradient overlay for modern contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/20 to-brand-navy/70 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0F172A_85%)] z-10" />

      {/* Cinematic Single Video Layer */}
      <video
        ref={videoRef}
        src="/video/Abkrea-Truck.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.0] will-change-transform"
        style={{ filter: "brightness(0.8) contrast(1.05)", objectPosition: "center" }}
      />
    </div>
  );
}
