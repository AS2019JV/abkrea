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

    // Set initial states to prevent flash of content and keep components hidden at start
    gsap.set("#main-header", { y: "-100%", opacity: 0 });
    gsap.set("#phrase-container", { opacity: 0, scale: 0.95 });
    gsap.set("#cinematic-blue-overlay", { opacity: 0 });
    gsap.set(["#left-card-1", "#left-card-2"], { x: -50, opacity: 0 });
    gsap.set(["#right-card-1", "#right-card-2"], { x: 50, opacity: 0 });

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
        if (video.duration) video.currentTime = videoState.time;
      },
    }, 0)
    // Scale down the foreground video from 0.95 to 0.85 to counteract the truck sizing up (driving forward)
    .to(video, {
      scale: 0.85,
      duration: 2.0,
      ease: "power1.out",
    }, 0)

    // Segment 2: Scroll 22.2% to 61.1% (Video slow motion from 6s to 7.5s, duration 3.5) - Sidebars fade in/out
    .to(videoState, {
      time: 7.5,
      duration: 3.5,
      ease: "none",
      onUpdate: () => {
        if (video.duration) video.currentTime = videoState.time;
      },
    }, 2.0)

    // Segment 3: Scroll 61.1% to 77.8% (Video 7.5s to 10s, duration 1.5) - Truck moves to side (original speed)
    .to(videoState, {
      time: 10,
      duration: 1.5,
      ease: "none",
      onUpdate: () => {
        if (video.duration) video.currentTime = videoState.time;
      },
    }, 5.5)

    // Segment 4: Scroll 77.8% to 100% (Video 10s to 13s, duration 2.0) - Truck exits to right
    .to(videoState, {
      time: 13,
      duration: 2.0,
      ease: "none",
      onUpdate: () => {
        if (video.duration) video.currentTime = videoState.time;
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
    // Fade in the deep blue overlay to create the brand-blue theme for high text contrast when SETEC phrase appears
    tl.to("#cinematic-blue-overlay", { opacity: 0.85, duration: 0.5 }, 5.3);

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
      {/* 1. Centered foreground video with object-contain to fit the truck proportionally without cropping */}
      {/* Soft edge feathering applied via radial-gradient mask-image */}
      <video
        ref={videoRef}
        src="/video/Abkrea-Truck.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain scale-[0.95] will-change-transform z-10"
        style={{ 
          objectPosition: "center",
          maskImage: "radial-gradient(circle at center, black 65%, rgba(0, 0, 0, 0) 95%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 65%, rgba(0, 0, 0, 0) 95%)"
        }}
      />

      {/* 2. Soft edge vignette to blend the container edges (always visible, but soft) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,#0F172A_95%)] opacity-35 z-20" />

      {/* 3. Deeper brand-blue gradient overlay for the text contrast (faded in via GSAP when text appears) */}
      <div 
        id="cinematic-blue-overlay" 
        className="absolute inset-0 bg-gradient-to-b from-brand-navy/85 via-brand-navy/40 to-brand-navy/90 opacity-0 z-25" 
      />
    </div>
  );
}
