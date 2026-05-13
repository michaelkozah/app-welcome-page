import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import FeaturesSection from "@/components/FeaturesSection";

import AboutOption1 from "@/components/AboutOption1";
import BusinessCTA from "@/components/BusinessCTA";
import DownloadCTA from "@/components/DownloadCTA";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="cinematic-hero-boundary">
      <CinematicHero
        brandName="Zahlé"
        tagline1="Discover the heart of"
        tagline2="Zahlé, Lebanon."
        cardHeading="Your city, one app."
        cardDescription={
          <>
            <span className="text-[#D4A957] font-semibold">Zahle App</span> is
            your guide to Zahlé — a UNESCO City of Gastronomy. Local news,
            restaurants, cafés, events, landmarks, and everything that makes
            Zahlé special, all in one place.
          </>
        }
        metricValue={150}
        metricLabel="Places to Explore"
        ctaHeading="Explore Zahlé today."
        ctaDescription="Download Zahle App and discover the best restaurants, events, and hidden gems in the Bride of the Bekaa."
        appStoreUrl="https://apps.apple.com/lb/app/zahle/id6760541995"
      />
      </div>

      {/* Features — Zigzag with Animated Line */}
      <FeaturesSection />

      {/* About Zahlé */}
      <AboutOption1 />

      {/* For Businesses CTA */}
      <BusinessCTA />

      {/* Download CTA */}
      <DownloadCTA />
    </div>
  );
}
