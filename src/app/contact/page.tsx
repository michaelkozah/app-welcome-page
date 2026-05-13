"use client";

import { useRef, useCallback, useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(107,29,58,0.06), transparent 40%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const glow = glowRef.current;
    if (glow) glow.style.background = "transparent";
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Left — Sticky info panel */}
            <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
              <h1
                className="font-display font-bold text-stone leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(30px, 4vw, 46px)" }}
              >
                Get in<br />
                <span className="text-wine italic">touch.</span>
              </h1>
              <p className="text-stone-muted text-base leading-relaxed mt-4 max-w-sm">
                Questions, partnerships, or business listings — reach out and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Contact details */}
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:info@zahleapp.com"
                  className="group flex items-center gap-3 text-stone hover:text-wine transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-wine/[0.05] group-hover:bg-wine/[0.1] flex items-center justify-center transition-colors">
                    <Mail size={16} className="text-wine" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">info@zahleapp.com</span>
                    <span className="text-xs text-stone-muted">We reply within 24h</span>
                  </div>
                </a>
                <a
                  href="tel:+96171223274"
                  className="group flex items-center gap-3 text-stone hover:text-wine transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-wine/[0.05] group-hover:bg-wine/[0.1] flex items-center justify-center transition-colors">
                    <Phone size={16} className="text-wine" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">+961 71 223 274</span>
                    <span className="text-xs text-stone-muted">Call or WhatsApp</span>
                  </div>
                </a>
              </div>

              {/* Pricing nudge */}
              <Link
                href="/pricing"
                className="group mt-8 flex items-center justify-between bg-white rounded-2xl px-5 py-4 border border-stone/[0.06] hover:border-wine/10 hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-stone text-sm font-medium">List your business</p>
                  <p className="text-stone-muted text-xs mt-0.5">Plans from $35/mo</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-wine/[0.05] group-hover:bg-wine group-hover:text-white flex items-center justify-center text-wine transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </Link>

              {/* Credit */}
              <p className="text-stone-muted text-xs mt-6">
                Built by{" "}
                <a href="https://progressivelb.com" target="_blank" rel="noopener noreferrer" className="text-wine hover:underline">
                  Progressive SARL
                </a>
              </p>
            </div>

            {/* Right — Form card with spotlight */}
            <div className="lg:col-span-3">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white rounded-3xl border border-stone/[0.06] overflow-hidden"
                style={{
                  boxShadow: "0 20px 60px -15px rgba(0,0,0,0.05), 0 4px 20px -4px rgba(0,0,0,0.02)",
                }}
              >
                {/* Mouse spotlight */}
                <div ref={glowRef} className="absolute inset-0 pointer-events-none z-10 rounded-3xl" />

                <div className="relative z-20 p-6 sm:p-8 lg:p-10">
                  {status === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-14 h-14 rounded-full bg-wine/[0.06] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={24} className="text-wine" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-stone mb-2">Message sent!</h3>
                      <p className="text-stone-muted text-sm max-w-sm mx-auto">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                  <form
                    className="space-y-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setStatus("loading");
                      const form = e.target as HTMLFormElement;
                      const formData = new FormData(form);
                      try {
                        const res = await fetch("https://api.web3forms.com/submit", {
                          method: "POST",
                          body: formData,
                        });
                        if (res.ok) {
                          setStatus("success");
                          form.reset();
                        } else {
                          setStatus("error");
                        }
                      } catch {
                        setStatus("error");
                      }
                    }}
                  >
                    <input type="hidden" name="access_key" value="a4f086c8-cfcf-4505-9eae-8f810114999f" />
                    <input type="hidden" name="from_name" value="Zahle App Contact" />
                    <input type="hidden" name="redirect" value="https://zahleapp.com/contact" />
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-[13px] font-medium text-stone mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-stone/[0.06] text-stone text-sm placeholder:text-stone-muted/40 focus:outline-none focus:ring-2 focus:ring-wine/15 focus:border-wine/20 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[13px] font-medium text-stone mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-stone/[0.06] text-stone text-sm placeholder:text-stone-muted/40 focus:outline-none focus:ring-2 focus:ring-wine/15 focus:border-wine/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject chips */}
                    <div>
                      <label className="block text-[13px] font-medium text-stone mb-2">
                        What&apos;s this about?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["General", "Business Listing", "Support", "Partnership"].map((option, i) => (
                          <label key={option} className="cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value={option}
                              defaultChecked={i === 0}
                              className="peer sr-only"
                            />
                            <span className="inline-block px-4 py-2 rounded-xl text-sm font-medium border border-stone/[0.08] text-stone-muted bg-cream/40 peer-checked:bg-wine peer-checked:text-white peer-checked:border-wine transition-all hover:border-stone/20">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[13px] font-medium text-stone mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-cream/60 border border-stone/[0.06] text-stone text-sm placeholder:text-stone-muted/40 focus:outline-none focus:ring-2 focus:ring-wine/15 focus:border-wine/20 transition-all resize-none"
                        placeholder="Tell us what you need..."
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <p className="text-sm text-red-500 text-center">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full bg-gradient-to-r from-gold to-gold-light text-wine-dark font-semibold py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
