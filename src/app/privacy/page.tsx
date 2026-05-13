import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Zahle App",
  description: "Privacy policy for Zahle App — your city guide to Zahlé, Lebanon.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-display font-bold text-stone leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(34px, 5.5vw, 52px)" }}
          >
            Privacy Policy
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
              Progressive LB (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) operates the Zahle App mobile application (the
              &ldquo;App&rdquo;). This Privacy Policy explains how we collect,
              use, and protect your information when you use the App.
            </p>
            <p className="text-stone-light text-[15px] leading-[1.8] mb-10">
              By using the App, you agree to the collection and use of
              information in accordance with this policy.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-stone/10 to-transparent mb-10" />

            {/* 1. Information We Collect */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                1. Information We Collect
              </h2>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Account Information
              </h3>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                When you create an account, we collect:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Phone number</strong> — used for authentication via WhatsApp verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Full name</strong> — provided during registration and editable in your profile</span>
                </li>
              </ul>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Device Information
              </h3>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Device identifier</strong> — a unique ID generated on your device to identify it across sessions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Platform</strong> — whether you are using iOS or Android</span>
                </li>
              </ul>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Usage & Analytics
              </h3>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Content interactions</strong> — we track when you view discover items, or events, and when you tap on contact buttons (phone, website, social links, directions)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Screen activity</strong> — the App periodically sends which screen you are currently viewing to help us understand how the App is used</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Notification preferences</strong> — your choices for receiving city news, events, and new places notifications</span>
                </li>
              </ul>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                User-Submitted Content
              </h3>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Issue reports</strong> — category, title, description, and optional photos you attach when reporting a municipal issue</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Business listings</strong> — business name, description, rating, location, contact details, and social links you provide when submitting a business</span>
                </li>
              </ul>

              <h3 className="font-display text-lg font-bold text-stone mt-6 mb-2">
                Push Notification Tokens
              </h3>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                We collect your device&apos;s push notification token to send you notifications about city news, events, and new places. You can manage your notification preferences within the App.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 2. How We Use Your Information */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                2. How We Use Your Information
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Authenticate your identity and manage your account",
                  "Display personalized content and recommendations",
                  "Send push notifications based on your preferences",
                  "Track content engagement to improve the App experience",
                  "Monitor App usage patterns to improve performance and features",
                  "Process issue reports and business listing submissions",
                  'Provide the "Live Users" feature for administrative purposes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 3. Third-Party Services */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                3. Third-Party Services
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                The App uses the following third-party services:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8] mb-4">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Firebase Authentication</strong> (Google) — for phone number verification and user authentication</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Firebase Cloud Messaging</strong> (Google) — for delivering push notifications</span>
                </li>
              </ul>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                Firebase Analytics and advertising features are <strong className="text-stone">disabled</strong> in the App.
              </p>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                These services may collect information in accordance with their own privacy policies. We encourage you to review{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-wine font-medium hover:underline">
                  Google&apos;s Privacy Policy
                </a>.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 4. Data Storage & Security */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                4. Data Storage & Security
              </h2>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Account and profile data is stored on our secure servers",
                  "A copy of your profile data and device identifier is cached locally on your device",
                  "All communication between the App and our servers uses HTTPS encryption",
                  "We do not sell, trade, or rent your personal information to third parties",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 5. Permissions */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                5. Permissions
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-4">
                The App may request the following permissions:
              </p>
              <div className="bg-cream-dark rounded-xl overflow-hidden border border-stone/[0.06] mb-4">
                {[
                  { name: "Calendar", purpose: "To save events you're interested in to your device calendar" },
                  { name: "Camera", purpose: "To take photos when reporting a municipal issue" },
                  { name: "Photo Library", purpose: "To attach existing photos to issue reports" },
                  { name: "Notifications", purpose: "To send you updates about city news, events, and new places" },
                  { name: "Internet", purpose: "To communicate with our servers" },
                ].map((perm, i) => (
                  <div
                    key={perm.name}
                    className={`flex flex-col sm:flex-row gap-1 sm:gap-4 px-4 py-3 ${
                      i !== 4 ? "border-b border-stone/[0.06]" : ""
                    }`}
                  >
                    <strong className="text-stone text-sm sm:w-32 shrink-0">{perm.name}</strong>
                    <span className="text-stone-light text-sm leading-relaxed">{perm.purpose}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                All permissions are optional and requested only when needed. The App functions without granting these permissions, though some features may be limited.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 6. Data Retention */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                6. Data Retention
              </h2>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                {[
                  "Your account data is retained as long as your account is active",
                  "Content interaction analytics are retained for improving the App and are not linked to your personal identity",
                  "Issue reports and business listings are retained as part of the App city's records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 7. Your Rights */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                7. Your Rights
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-stone-light text-[15px] leading-[1.8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Access</strong> your personal data through your profile in the App</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Update</strong> your name and notification preferences at any time</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Delete</strong> your account and associated data from within the App (Profile &gt; Delete Account)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold mt-1">•</span>
                  <span><strong className="text-stone">Opt out</strong> of push notifications through your device settings or within the App</span>
                </li>
              </ul>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 8. Children's Privacy */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 9. Changes to This Policy */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                9. Changes to This Policy
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8]">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="h-px w-full bg-stone/[0.06] mb-10" />

            {/* 10. Contact Us */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone mb-5">
                10. Contact Us
              </h2>
              <p className="text-stone-light text-[15px] leading-[1.8] mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
