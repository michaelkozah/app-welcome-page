// Cinematic Split — "Magazine Spread" with gold vine line art
"use client";

import { useEffect, useRef } from "react";

export default function AboutOption1() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const vineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const card = cardRef.current;
    const vine = vineRef.current;
    if (!section || !left || !card || !vine) return;

    // Set up stroke draw — line draws from both sides to center
    const totalLen = vine.getTotalLength();
    vine.style.strokeDasharray = `${totalLen}`;
    vine.style.strokeDashoffset = `${totalLen}`;

    let hasAnimatedContent = false;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // Line draws in as you scroll — from edges to center
      const vineProgress = Math.min(
        1,
        Math.max(0, (vh * 0.75 - rect.top) / (vh * 0.55))
      );
      vine.style.strokeDashoffset = `${totalLen * (1 - vineProgress)}`;

      // Content entry
      if (!hasAnimatedContent && rect.top < vh * 0.6) {
        hasAnimatedContent = true;
        left.style.transition =
          "opacity 0.8s ease-out, transform 0.8s ease-out";
        left.style.opacity = "1";
        left.style.transform = "translateY(0)";
        setTimeout(() => {
          card.style.transition =
            "opacity 0.7s ease-out, transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 300);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-wine-dark via-wine to-wine-dark overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')] mix-blend-mode-overlay pointer-events-none" />

      {/* Full-width vine — gold line art, fills from both sides to center */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={vineRef}
            d="M 0 55 C 100 25, 200 70, 350 45 C 450 28, 530 55, 600 50 C 670 45, 750 28, 850 45 C 1000 70, 1100 25, 1200 55"
            stroke="#D4A957"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Pull Quote */}
          <div
            ref={leftRef}
            className="relative"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <span className="absolute -top-6 -left-4 text-gold/10 text-[10rem] sm:text-[14rem] font-display font-black leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <div className="relative z-10">
              <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
                About Zahlé
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.1] tracking-tight">
                The Bride<br />
                <span className="italic text-gold">of the Bekaa.</span>
              </h2>
              <div className="mt-8 flex items-center gap-6">
                <div className="h-px w-16 bg-gold/30" />
                <span className="text-white/30 text-xs uppercase tracking-[2px] font-medium">
                  Est. centuries ago
                </span>
              </div>
            </div>
          </div>

          {/* Right — Content Card */}
          <div className="relative">
            <div
              ref={cardRef}
              className="relative bg-white/[0.07] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-6 sm:p-8 lg:p-10 max-w-lg"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                boxShadow:
                  "0 25px 60px -15px rgba(0,0,0,0.5), 0 10px 20px -10px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="text-white/60 text-[15px] sm:text-base leading-[1.9] mb-5">
                Zahlé is the{" "}
                <span className="text-gold font-medium">third-largest city</span>{" "}
                in Lebanon and a{" "}
                <span className="text-gold font-medium">
                  UNESCO-designated City of Gastronomy
                </span>
                . Known as &ldquo;The Bride of the Bekaa,&rdquo; it sits along
                the{" "}
                <span className="text-white font-medium">Berdawni River</span>{" "}
                at the foot of Mount Sannine, surrounded by vineyards, orchards,
                and stunning mountain scenery.
              </p>
              <p className="text-white/60 text-[15px] sm:text-base leading-[1.9]">
                With over{" "}
                <span className="text-gold font-medium">150,000 residents</span>,
                Zahlé is famous for its vibrant food scene, rich cultural
                heritage, and warm hospitality. From{" "}
                <span className="text-white font-medium">world-class arak</span>{" "}
                to riverside restaurants, Zahlé is a destination that captivates
                all who visit.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
