import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 35,
    description: "Get discovered by locals and visitors.",
    popular: false,
    features: [
      "Business listing (name, address, phone)",
      "Written description & category tags",
      "Opening hours & map location",
      "1 Main photo",
      "Searchable in app directory",
    ],
  },
  {
    name: "Spotlight",
    price: 65,
    description: "Stand out with priority placement.",
    popular: true,
    features: [
      "Everything in Basic",
      "Up to 3 photos + menu/gallery",
      "Priority placement in search",
      'Featured in "Top Picks"',
      "Social media links & website URL",
      "Phone number click-to-call",
      "Monthly performance insights",
    ],
  },
  {
    name: "Exclusive",
    price: 120,
    description: "Maximum visibility & premium tools.",
    popular: false,
    features: [
      "Everything in Spotlight",
      "Promoted posts in news feed",
      "Event promotion & push notifications",
      "Homepage featured banner",
      "Detailed analytics & reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-cream-dark">
      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-4 sm:pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-display font-bold text-stone leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 58px)" }}
          >
            Get your business<br />
            <span className="text-wine italic">in front of Zahlé.</span>
          </h1>
          <p className="text-stone-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto mt-5">
            No contracts. Cancel anytime. Choose the plan that fits your business.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-16 sm:pb-24 pt-8 sm:pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl sm:rounded-3xl p-[1px] ${plan.popular ? "md:-translate-y-4" : ""} ${
                  plan.popular
                    ? "bg-gradient-to-b from-gold/50 via-gold/15 to-transparent"
                    : ""
                }`}
              >
                <div
                  className={`relative h-full rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden ${
                    plan.popular
                      ? "bg-gradient-to-br from-wine-light via-wine to-wine-dark shadow-xl shadow-wine/20"
                      : "bg-white border border-stone/[0.06] shadow-sm"
                  }`}
                >
                  {/* Popular top accent */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                  )}

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-display text-lg font-bold ${plan.popular ? "text-white" : "text-stone"}`}>
                        {plan.name}
                      </h3>
                      {plan.popular && (
                        <span className="text-[10px] uppercase tracking-[2px] font-bold text-gold bg-gold/15 rounded-full px-3 py-1">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-6 ${plan.popular ? "text-white/50" : "text-stone-muted"}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span
                        className={`font-display text-5xl font-black tracking-tight ${
                          plan.popular ? "text-gold" : "text-stone"
                        }`}
                      >
                        ${plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? "text-white/30" : "text-stone-muted"}`}>/mo</span>
                    </div>

                    {/* Divider */}
                    <div className={`h-px w-full mb-6 ${plan.popular ? "bg-white/10" : "bg-stone/[0.06]"}`} />

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              plan.popular ? "bg-gold/15" : "bg-stone/[0.04]"
                            }`}
                          >
                            <Check
                              size={12}
                              className={plan.popular ? "text-gold" : "text-stone-muted"}
                              strokeWidth={2.5}
                            />
                          </div>
                          <span className={`text-[14px] leading-snug ${plan.popular ? "text-white/60" : "text-stone-light"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`block text-center font-semibold py-3.5 rounded-xl transition-all text-sm ${
                        plan.popular
                          ? "bg-gradient-to-r from-gold to-gold-light text-wine-dark hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02]"
                          : "bg-stone/[0.04] text-stone border border-stone/[0.08] hover:bg-stone hover:text-white hover:border-stone"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 sm:mt-16 text-center space-y-2">
            <p className="text-stone-muted text-sm">
              All plans are billed monthly. No long-term commitments.
            </p>
            <p className="text-stone-muted text-sm">
              Not sure which plan?{" "}
              <Link
                href="/contact"
                className="text-wine font-medium hover:underline"
              >
                Talk to us
              </Link>{" "}
              — we&apos;ll help you choose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
