import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Grape, Users, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Zahle App — Built for Zahlé",
  description:
    "Learn about Zahle App, the city guide built to highlight the best of Zahlé, Lebanon — a UNESCO City of Gastronomy.",
};

const highlights = [
  {
    icon: MapPin,
    title: "Bride of the Bekaa",
    description:
      "Zahlé sits along the Berdawni River in the heart of the Bekaa Valley, surrounded by vineyards and mountains.",
  },
  {
    icon: Grape,
    title: "UNESCO City of Gastronomy",
    description:
      "Recognized globally for its culinary traditions — from legendary meze spreads to world-class arak and wine.",
  },
  {
    icon: Users,
    title: "150,000+ Residents",
    description:
      "Lebanon's third-largest city, with a vibrant community of families, students, and entrepreneurs.",
  },
  {
    icon: Heart,
    title: "Rich Cultural Heritage",
    description:
      "A city of poets, artists, and festivals — Zahlé's culture is as rich as its cuisine.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-wine via-wine to-wine-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
            About
          </span>
          <h1
            className="font-display font-bold text-white mt-3 mb-4"
            style={{ fontSize: "clamp(36px, 6vw, 56px)" }}
          >
            Built for Zahlé, With Love
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Zahle App is a city guide that connects people to the best of Zahlé
            — its restaurants, events, places, and stories.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
            Our Mission
          </span>
          <h2
            className="font-display font-bold text-stone mt-3 mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Highlight the Best of Zahlé
          </h2>
          <div className="space-y-4 text-stone-muted text-base sm:text-lg leading-[1.8]">
            <p>
              Zahlé is a city that deserves to be discovered — by its own
              residents and by visitors from around the world. Yet much of
              what makes it special has never been organized in one accessible
              place.
            </p>
            <p>
              Zahle App was created to change that. We bring together local
              news, restaurant listings, events, landmarks, and city
              information into a single, beautifully designed mobile app. Our
              goal is simple: make it easier to explore, enjoy, and connect
              with everything Zahlé has to offer.
            </p>
            <p>
              Whether you&apos;re a lifelong resident looking for a new
              restaurant, a student keeping up with local events, or a tourist
              planning your first visit — Zahle App is your companion.
            </p>
          </div>
        </div>
      </section>

      {/* About Zahlé */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
              About Zahlé
            </span>
            <h2
              className="font-display font-bold text-stone mt-3 mb-4"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              A City Like No Other
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-cream rounded-2xl p-6 sm:p-8 border border-stone/5"
                >
                  <div className="w-12 h-12 bg-wine/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-wine" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-stone mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-muted text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
            The Team
          </span>
          <h2
            className="font-display font-bold text-stone mt-3 mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Progressive SARL
          </h2>
          <div className="space-y-4 text-stone-muted text-base sm:text-lg leading-[1.8]">
            <p>
              Zahle App is developed by{" "}
              <a
                href="https://progressivelb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine font-medium hover:underline"
              >
                Progressive SARL
              </a>
              , a Lebanese company passionate about building digital products
              that serve local communities.
            </p>
            <p>
              We believe technology should bring people closer to the places
              and experiences they love. Zahle App is our way of giving back
              to a city that has given us so much.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-wine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Ready to Explore Zahlé?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Download Zahle App and start discovering the best of your city
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/lb/app/zahle/id6760541995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-wine-dark font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Download the App
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
