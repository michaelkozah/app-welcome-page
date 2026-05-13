"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function BusinessCTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const border = borderRef.current;
    if (!card || !glow || !border) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Layered spotlight — warm gold center + wine outer halo
    glow.style.background = `
      radial-gradient(500px circle at ${x}px ${y}px, rgba(212,169,87,0.15), transparent 40%),
      radial-gradient(800px circle at ${x}px ${y}px, rgba(107,29,58,0.08), transparent 50%)
    `;

    // Border glow — tighter, brighter
    border.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(212,169,87,0.5), rgba(212,169,87,0.06) 45%, transparent 65%)`;

    // 3D tilt
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const border = borderRef.current;
    if (!card || !glow || !border) return;
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    card.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
    glow.style.transition = "background 0.6s ease-out";
    glow.style.background = "transparent";
    border.style.transition = "background 0.6s ease-out";
    border.style.background = "transparent";
    setTimeout(() => {
      if (card) card.style.transition = "";
      if (glow) glow.style.transition = "";
      if (border) border.style.transition = "";
    }, 800);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Floating particles
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: #D4A957;
        opacity: ${Math.random() * 0.15 + 0.03};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        animation: floatParticle ${8 + Math.random() * 12}s ease-in-out infinite;
        animation-delay: ${Math.random() * -10}s;
      `;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  // Scroll entry
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    let triggered = false;
    const onScroll = () => {
      if (triggered) return;
      if (section.getBoundingClientRect().top < window.innerHeight * 0.65) {
        triggered = true;
        content.style.transition = "opacity 1s ease-out, transform 1s cubic-bezier(0.25, 1, 0.5, 1)";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-44 bg-cream-dark overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-wine/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')] pointer-events-none" />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15px, -20px); }
          50% { transform: translate(-10px, -35px); }
          75% { transform: translate(20px, -15px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />

      <div
        ref={contentRef}
        className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity: 0, transform: "translateY(40px)" }}
      >
        {/* Interactive card */}
        <div className="relative rounded-[2rem] p-[1px] will-change-transform" ref={cardRef}>
          {/* Animated border */}
          <div
            ref={borderRef}
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
          />
          <div className="absolute inset-0 rounded-[2rem] border border-white/[0.05] pointer-events-none" />

          {/* Card */}
          <div
            className="relative rounded-[2rem] overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #8B2D52 0%, #6B1D3A 40%, #4A1228 100%)",
              boxShadow: "0 50px 100px -30px rgba(74,18,40,0.6), 0 20px 40px -20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Spotlight */}
            <div ref={glowRef} className="absolute inset-0 pointer-events-none z-10 rounded-[2rem]" />

            {/* Top edge shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            {/* Content */}
            <div className="relative z-20 px-8 sm:px-14 lg:px-20 py-14 sm:py-20 lg:py-24 text-center flex flex-col items-center">

              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2 mb-10 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-gold animate-ping opacity-40" />
                </div>
                <span className="text-white/50 text-xs font-medium tracking-wide">
                  Accepting new listings
                </span>
              </div>

              {/* Headline */}
              <h2
                className="font-display font-bold text-white leading-[1.02] tracking-tight"
                style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
              >
                The city is watching.
              </h2>
              <h2
                className="font-display font-bold leading-[1.02] tracking-tight mt-1"
                style={{
                  fontSize: "clamp(34px, 5.5vw, 64px)",
                  background: "linear-gradient(90deg, #D4A957 0%, #E8C97A 30%, #D4A957 60%, #E8C97A 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Are you listed?
              </h2>

              {/* Body */}
              <p className="text-white/30 text-base sm:text-lg leading-[1.7] mt-7 max-w-lg mx-auto">
                150,000 residents. Tourists every week. One app they all check
                for restaurants, cafés, and businesses. Be where they look.
              </p>

              {/* CTA — Animated icon button */}
              <div className="mt-10">
                <Link href="/pricing">
                  <Button
                    className="relative text-base font-bold rounded-full h-14 p-1 ps-8 pe-16 group transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-gradient-to-r from-gold to-gold-light text-wine-dark hover:from-gold-light hover:to-gold border-0"
                    style={{
                      boxShadow: "0 0 40px -5px rgba(212,169,87,0.4), 0 15px 30px -10px rgba(0,0,0,0.3)",
                    }}
                  >
                    <span className="relative z-10 transition-all duration-500">
                      Get Your Business Listed
                    </span>
                    <div className="absolute right-1.5 w-11 h-11 bg-wine-dark text-gold rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-48px)] group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
