"use client";

import { useEffect, useRef } from "react";
import {
  Newspaper,
  UtensilsCrossed,
  CalendarDays,
  MapPin,
  Landmark,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Newspaper,
    title: "Local News",
    description:
      "Stay updated with the latest happenings in Zahlé — from community events to city announcements.",
    iconBg: "bg-wine",
    iconColor: "text-gold",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    description:
      "Discover the best dining spots in the UNESCO City of Gastronomy, from legendary meze to cozy cafés.",
    iconBg: "bg-gradient-to-br from-gold to-gold-light",
    iconColor: "text-wine-dark",
  },
  {
    icon: CalendarDays,
    title: "Events",
    description:
      "Never miss a festival, concert, or gathering. Browse upcoming events and plan your weekends.",
    iconBg: "bg-stone",
    iconColor: "text-gold",
  },
  {
    icon: MapPin,
    title: "Explore Places",
    description:
      "Find landmarks, parks, shops, and hidden gems across Zahlé with directions and details.",
    iconBg: "bg-wine-light",
    iconColor: "text-white",
  },
  {
    icon: Landmark,
    title: "City Information",
    description:
      "Everything you need to know about Zahlé — history, culture, useful contacts, and practical info.",
    iconBg: "bg-cream-dark border border-stone/10",
    iconColor: "text-wine",
  },
  {
    icon: Star,
    title: "Curated Picks",
    description:
      "Hand-picked recommendations for the best experiences Zahlé has to offer, updated regularly.",
    iconBg: "bg-gradient-to-br from-wine to-wine-dark",
    iconColor: "text-gold",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;
    const gridEl = gridRef.current;
    if (!path || !section || !gridEl) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    const handleScroll = () => {
      // Use the feature grid (not the full section) as the reference
      const gridRect = gridEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Progress starts at 0 when the grid is 60% up the viewport,
      // reaches 1 when the last feature has scrolled ~halfway up
      const offset = viewportHeight * 0.6;
      const scrollStart = gridRect.top - offset;
      const scrollRange = gridRect.height - viewportHeight * 0.2;
      const progress = Math.min(1, Math.max(0, -scrollStart / scrollRange));

      // Animate the SVG path stroke
      path.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

      // Animate each dot when the line reaches it
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const dotThreshold = (i + 0.3) / features.length;
        if (progress >= dotThreshold) {
          dot.classList.add("scale-100", "opacity-100");
          dot.classList.remove("scale-0", "opacity-0");
        } else {
          dot.classList.add("scale-0", "opacity-0");
          dot.classList.remove("scale-100", "opacity-100");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build SVG zigzag path — gentle, relaxed curves
  const svgWidth = 100;
  const rowHeight = 260; // more breathing room between nodes
  const svgHeight = features.length * rowHeight + 80;
  const leftX = 25;
  const rightX = 75;

  let pathD = "";
  const dotPositions: { x: number; y: number }[] = [];

  features.forEach((_, i) => {
    const y = 40 + i * rowHeight + rowHeight / 2;
    const x = i % 2 === 0 ? leftX : rightX;
    dotPositions.push({ x, y });

    if (i === 0) {
      // Start from center top, ease into first node
      pathD += `M ${50} ${0} C ${50} ${y * 0.4}, ${x} ${y * 0.6}, ${x} ${y}`;
    } else {
      const prevX = dotPositions[i - 1].x;
      const prevY = dotPositions[i - 1].y;
      // Wide, lazy control points for a gentle S-curve
      const cpY1 = prevY + rowHeight * 0.45;
      const cpY2 = y - rowHeight * 0.45;
      pathD += ` C ${prevX} ${cpY1}, ${x} ${cpY2}, ${x} ${y}`;
    }
  });

  // Ease out to center bottom
  const lastDot = dotPositions[dotPositions.length - 1];
  pathD += ` C ${lastDot.x} ${lastDot.y + rowHeight * 0.4}, ${50} ${svgHeight - 30}, ${50} ${svgHeight}`;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-gradient-to-b from-white via-cream/30 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16 sm:mb-24">
          <span className="font-display text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black text-stone/[0.03] leading-none absolute -top-8 sm:-top-14 lg:-top-20 -left-2 select-none pointer-events-none">
            Features
          </span>
          <div className="relative z-10">
            <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
              What&apos;s Inside
            </span>
            <h2
              className="font-display font-bold text-stone mt-3"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Six reasons to<br />
              <span className="text-wine italic">open the app.</span>
            </h2>
          </div>
        </div>

        {/* Zigzag Layout with Animated Line */}
        <div ref={gridRef} className="relative">
          {/* SVG Zigzag Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Ghost path — pale line */}
            <path
              d={pathD}
              stroke="#3A3632"
              strokeOpacity={0.06}
              strokeWidth={0.4}
              fill="none"
            />
            {/* Animated wine-colored path */}
            <path
              ref={pathRef}
              d={pathD}
              stroke="#6B1D3A"
              strokeWidth={0.5}
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Feature Rows — Zigzag */}
          <div className="relative z-10 space-y-16 sm:space-y-20 lg:space-y-32">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`flex-1 flex flex-col ${
                      isLeft ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                    } items-center text-center`}
                  >
                    <span className="font-display text-6xl sm:text-7xl font-black text-stone/[0.04] leading-none mb-2">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-stone tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-muted text-sm sm:text-[15px] leading-relaxed max-w-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Center Dot — connection point on the line */}
                  <div className="relative flex items-center justify-center lg:w-20 shrink-0">
                    <div
                      ref={(el) => { dotsRef.current[i] = el; }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 scale-0 opacity-0 transition-all duration-700 ease-out shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #6B1D3A 0%, #8B2D52 100%)",
                        boxShadow: "0 8px 32px rgba(107,29,58,0.3)",
                      }}
                    >
                      <Icon size={24} className="text-gold" />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
