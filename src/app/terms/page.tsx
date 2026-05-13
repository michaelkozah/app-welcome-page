import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Zahle App",
  description: "Terms and conditions for using Zahle App — your city guide to Zahlé, Lebanon.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-display font-bold text-stone leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 52px)" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-stone-muted text-sm mt-4">
            Last updated: April 4, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone/[0.06] shadow-sm">
            <p className="text-stone-light text-[15px] leading-[1.8] mb-6">
              Please read these Terms and Conditions (&ldquo;Terms&rdquo;)
              carefully before using the Zahle App mobile application (the
              &ldquo;App&rdquo;) operated by Progressive LB (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p className="text-stone-light text-[15px] leading-[1.8] mb-10">
              By downloading, installing, or using the App, you agree to be
              bound by these Terms. If you do not agree, do not use the App.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-stone/10 to-transparent mb-10" />

            {/* 1. Use of the App */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                1. Use of the App
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-4">
                The Zahle App is a city companion application for the city of Zahle, Lebanon. It provides information about local places, news, events, business listings, and services.
              </p>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                You agree to use the App only for lawful purposes and in accordance with these Terms. You must not:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Use the App in any way that violates applicable laws or regulations",
                  "Submit false, misleading, or fraudulent information",
                  "Attempt to gain unauthorized access to our systems or other users' accounts",
                  "Interfere with or disrupt the App or its servers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 2. Account Registration */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                2. Account Registration
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                To access certain features, you must create an account using your phone number. You agree to:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-4">
                {[
                  "Provide accurate and complete information",
                  "Keep your account credentials secure",
                  "Notify us immediately of any unauthorized use of your account",
                  "Accept responsibility for all activity that occurs under your account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 3. User-Submitted Content */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                3. User-Submitted Content
              </h2>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Issue Reports
              </h3>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                You may submit reports about municipal issues (roads, lighting, public spaces, etc.). By submitting a report, you:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-6">
                {[
                  "Confirm that the information provided is accurate to the best of your knowledge",
                  "Grant us the right to share the report with relevant municipal authorities",
                  "Agree that submitted photos may be used for resolving the reported issue",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Business Listings
              </h3>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                You may submit business listing requests. By submitting a listing, you:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Confirm that you are authorized to represent the business",
                  "Agree that submissions are subject to review and approval",
                  "Understand that we reserve the right to reject or remove any listing at our discretion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 4. Content & Intellectual Property */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                4. Content & Intellectual Property
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                All content displayed in the App — including text, images, logos, icons, and design — is owned by or licensed to Progressive LB and is protected by applicable intellectual property laws.
              </p>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">You may not:</p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Copy, reproduce, or distribute App content without our prior written consent",
                  "Use our trademarks, logos, or branding without authorization",
                  "Scrape, crawl, or use automated means to extract content from the App",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 5. Business Listings & Advertisements */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                5. Business Listings & Advertisements
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                The App may feature paid business listings, banner advertisements, and promoted content. These are clearly presented as part of the App experience.
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "We do not guarantee the accuracy or quality of third-party business listings",
                  "Interactions with listed businesses (purchases, services, etc.) are solely between you and the business",
                  "We are not responsible for any disputes, losses, or damages arising from dealings with listed businesses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 6. Events & Calendar Integration */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                6. Events & Calendar Integration
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                The App allows you to save events to your device calendar. We provide event information as-is and:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Do not guarantee the accuracy of event dates, times, or locations",
                  "Are not responsible for event cancellations or changes",
                  "Are not the organizer of listed events unless explicitly stated",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 7. Push Notifications */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                7. Push Notifications
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                By enabling push notifications, you agree to receive updates about city news, events, and new places. You can manage or disable notifications at any time through:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span>The App&apos;s notification preferences</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span>Your device&apos;s system settings</span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 8. Privacy */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                8. Privacy
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                Your use of the App is also governed by our{" "}
                <a href="/privacy" className="text-wine font-medium hover:underline">
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your information. Please review our Privacy Policy for details.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 9. Disclaimers */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                9. Disclaimers
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                The App is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties, expressed or implied, regarding:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-4">
                {[
                  "The accuracy, completeness, or reliability of any content",
                  "The availability or uninterrupted operation of the App",
                  "The suitability of the App for any particular purpose",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                We are not liable for any damages arising from your use of the App, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 10. Limitation of Liability */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                10. Limitation of Liability
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Our total liability to you for any claim arising from the App shall not exceed the amount you paid to us (if any) in the 12 months preceding the claim",
                  "We are not liable for any loss of data, revenue, or business opportunities",
                  "We are not responsible for third-party content, services, or links accessible through the App",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 11. Modifications */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                11. Modifications
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                We reserve the right to:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-4">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span>Modify, suspend, or discontinue the App or any feature at any time</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span>Update these Terms at any time by posting the revised version in the App or on our website</span>
                </li>
              </ul>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                Continued use of the App after changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 12. Termination */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                12. Termination
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                We may terminate or suspend your access to the App at any time, without prior notice, for conduct that we believe:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-4">
                {[
                  "Violates these Terms",
                  "Is harmful to other users or third parties",
                  "Is otherwise objectionable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                Upon termination, your right to use the App ceases immediately. You may also delete your account at any time from within the App.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 13. Governing Law */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                13. Governing Law
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                These Terms shall be governed by and construed in accordance with the laws of Lebanon, without regard to conflict of law provisions. Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Lebanon.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 14. Contact Us */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                14. Contact Us
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-cream-dark rounded-xl p-5 border border-stone/[0.06] space-y-2">
                <p className="text-[15px]">
                  <strong className="text-stone">Email:</strong>{" "}
                  <a href="mailto:michael@progressivelb.com" className="text-wine font-medium hover:underline">
                    michael@progressivelb.com
                  </a>
                </p>
                <p className="text-[15px]">
                  <strong className="text-stone">Website:</strong>{" "}
                  <a href="https://progressivelb.com" target="_blank" rel="noopener noreferrer" className="text-wine font-medium hover:underline">
                    https://progressivelb.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
