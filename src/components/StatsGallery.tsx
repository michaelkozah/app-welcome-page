"use client";

import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from "@/components/ui/hero-gallery-scroll-animation";
import { Users, Star, MapPin, Landmark } from "lucide-react";

export default function StatsGallery() {
  return (
    <ContainerScroll className="h-[250vh]" id="features">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-3 sm:p-4">
        {/* Cell 1 — 150K+ Residents (large) */}
        <BentoCell className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="relative w-full h-full bg-gradient-to-br from-wine to-wine-dark p-6 sm:p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-56 h-56 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                  150K
                </span>
                <span className="text-gold text-2xl sm:text-3xl font-bold">+</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Users size={14} className="text-gold/60" />
                <span className="text-white/50 text-xs sm:text-sm uppercase tracking-[2px] font-medium">
                  Residents
                </span>
              </div>
            </div>
            <p className="relative z-10 text-white/30 text-xs sm:text-sm leading-relaxed max-w-md hidden sm:block">
              Zahlé is Lebanon&apos;s third-largest city — a vibrant community
              of families, students, and entrepreneurs in the heart of the Bekaa Valley.
            </p>
          </div>
        </BentoCell>

        {/* Cell 2 — 5.0 Rating */}
        <BentoCell className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="relative w-full h-full bg-white border border-stone/5 p-5 sm:p-6 flex flex-col justify-between">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <span className="font-display text-4xl sm:text-5xl font-black text-stone tracking-tighter">
                5.0
              </span>
            </div>
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-stone-muted text-[10px] sm:text-xs uppercase tracking-[2px] font-medium">
                App Store
              </span>
            </div>
          </div>
        </BentoCell>

        {/* Cell 3 — UNESCO */}
        <BentoCell className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="relative w-full h-full bg-gradient-to-b from-cream-dark to-white border border-stone/5 p-5 sm:p-6 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gold/5 to-transparent" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-wine/5 flex items-center justify-center mb-2">
                <Landmark size={18} className="text-wine" />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-black text-stone tracking-tight leading-none">
                UNESCO
              </span>
            </div>
            <div className="relative z-10">
              <p className="text-stone-muted text-[10px] sm:text-xs uppercase tracking-[2px] font-medium leading-relaxed">
                City of Gastronomy
              </p>
            </div>
          </div>
        </BentoCell>

        {/* Cell 4 — 100+ Listings */}
        <BentoCell className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="relative w-full h-full bg-stone p-5 sm:p-6 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tighter">
                  100
                </span>
                <span className="text-gold text-xl sm:text-2xl font-bold">+</span>
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-2">
              <MapPin size={12} className="text-gold/60" />
              <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[2px] font-medium">
                Listings
              </span>
            </div>
          </div>
        </BentoCell>

        {/* Cell 5 — Tagline */}
        <BentoCell className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
          <div className="relative w-full h-full bg-white border border-stone/5 p-5 sm:p-8 flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-wine/[0.02] to-gold/[0.02]" />
            <div className="relative z-10">
              <p className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-stone tracking-tight leading-snug">
                The Bride of the Bekaa,<br />
                <span className="text-wine">in your pocket.</span>
              </p>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl px-8 sm:px-12 py-8 sm:py-10 border border-stone/[0.06] shadow-2xl shadow-stone/10">
          <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
            Zahlé at a Glance
          </span>
          <h2
            className="font-display font-bold text-stone mt-3 tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            A City Worth Discovering
          </h2>
          <p className="text-stone-muted text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
            150,000 residents. UNESCO City of Gastronomy. 100+ places to explore.
            All in one app.
          </p>
        </div>
      </ContainerScale>
    </ContainerScroll>
  );
}
