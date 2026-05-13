"use client";

import { useEffect, useRef } from "react";

export default function DownloadCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const phone = phoneRef.current;
    const text = textRef.current;
    if (!section || !phone || !text) return;

    let triggered = false;

    const onScroll = () => {
      if (triggered) return;
      if (section.getBoundingClientRect().top < window.innerHeight * 0.65) {
        triggered = true;
        text.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";

        setTimeout(() => {
          phone.style.transition = "opacity 0.8s ease-out, transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)";
          phone.style.opacity = "1";
          phone.style.transform = "translateY(0) rotate(-3deg)";
        }, 200);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-wine"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-wine-light/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 sm:py-28 lg:py-0">

          {/* Left — Text + CTA */}
          <div
            ref={textRef}
            className="flex-1 text-center lg:text-left lg:py-28"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-gold animate-ping opacity-40" />
              </div>
              <span className="text-white/50 text-xs font-medium tracking-wide">
                Available on iOS
              </span>
            </div>

            <h2
              className="font-display font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Your pocket guide<br />
              <span
                className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                to Zahlé.
              </span>
            </h2>

            <p className="text-white/35 text-base sm:text-lg leading-[1.7] mt-5 max-w-md mx-auto lg:mx-0">
              News, restaurants, events, and hidden gems — everything you need, beautifully designed for your phone.
            </p>

            {/* Download buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {/* App Store */}
              <a
                href="https://apps.apple.com/lb/app/zahle/id6760541995"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-stone px-6 py-3.5 rounded-2xl hover:bg-white/95 transition-all hover:scale-105"
                style={{
                  boxShadow: "0 8px 30px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium tracking-wider text-stone-muted uppercase leading-none">
                    Download on the
                  </div>
                  <div className="text-base font-bold leading-tight tracking-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.zahleapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-stone text-white px-6 py-3.5 rounded-2xl hover:bg-stone-light transition-all hover:scale-105"
                style={{
                  boxShadow: "0 8px 30px -4px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-medium tracking-wider text-white/50 uppercase leading-none">
                    Get it on
                  </div>
                  <div className="text-base font-bold leading-tight tracking-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/30 text-xs">5.0 on the App Store</span>
            </div>
          </div>

          {/* Right — Phone mockup floating */}
          <div
            ref={phoneRef}
            className="relative shrink-0"
            style={{ opacity: 0, transform: "translateY(60px) rotate(0deg)" }}
          >
            {/* Phone frame */}
            <div
              className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[3rem] bg-[#111] lg:translate-y-8"
              style={{
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(0,0,0,0.4), inset 0 0 0 2px #52525B, inset 0 0 0 7px #000",
              }}
            >
              {/* Screen */}
              <div className="absolute inset-[7px] bg-gradient-to-b from-[#1a0a12] to-[#0d0508] rounded-[2.5rem] overflow-hidden">
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none z-30" />

                {/* Dynamic island */}
                <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-40" />

                {/* App UI */}
                <div className="relative w-full h-full pt-14 px-5 pb-6 flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-[10px] text-gold/50 uppercase tracking-widest font-bold block">Explore</span>
                      <span className="text-lg font-bold text-white block">Zahlé</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-wine/30 border border-gold/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Featured card */}
                  <div className="rounded-2xl bg-gradient-to-br from-wine-light/20 to-wine/10 border border-white/[0.04] p-4 mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[9px] text-gold/60 uppercase tracking-widest font-bold">Featured</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-2 h-2 text-gold fill-gold" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="h-2 w-28 bg-gold/15 rounded-full mb-2" />
                    <div className="h-1.5 w-20 bg-white/5 rounded-full" />
                  </div>

                  {/* List items */}
                  <div className="space-y-3 flex-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.02] border border-white/[0.03] p-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold/40" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-20 bg-white/10 rounded-full mb-1.5" />
                          <div className="h-1.5 w-14 bg-white/5 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around pt-4 border-t border-white/[0.04] mt-4">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className={`w-5 h-5 rounded-md ${i === 0 ? "bg-gold/30" : "bg-white/5"}`} />
                    ))}
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/15 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -left-6 sm:-left-10 top-20 bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ boxShadow: "0 15px 40px -10px rgba(0,0,0,0.5)" }}
            >
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-bold">150+ Places</p>
                <p className="text-white/30 text-[10px]">& growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />
    </section>
  );
}
