"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const heroEl = document.querySelector(".cinematic-hero-boundary");
    if (!heroEl) {
      setVisible(true);
      return;
    }

    const handleScroll = () => {
      const rect = heroEl.getBoundingClientRect();
      setVisible(rect.bottom <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center px-4 pt-4">
        <div
          className={`flex items-center gap-2 h-12 px-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-stone/[0.08] shadow-lg shadow-black/[0.04]"
              : "border-transparent"
          }`}
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          <Link href="/" className="flex items-center gap-1.5 pl-1.5 pr-2 shrink-0">
            <Image
              src="/Zahleapp logo new.jpg"
              alt="Zahle App"
              width={28}
              height={28}
              className="rounded-full"
            />
          </Link>

          <div className="hidden md:block w-px h-5 bg-stone/10" />

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-wine bg-wine/[0.07]"
                      : "text-stone-muted hover:text-stone hover:bg-stone/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block w-px h-5 bg-stone/10" />

          <Link
            href="/pricing"
            className="hidden md:flex items-center gap-1.5 bg-wine text-white font-medium pl-4 pr-1.5 py-1 rounded-full text-[13px] hover:bg-wine-dark transition-colors group"
          >
            Get Listed
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-stone rounded-full hover:bg-stone/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden flex justify-center px-4 mt-2">
          <div
            className="w-full max-w-xs rounded-2xl border border-stone/[0.06] px-4 py-3 space-y-1"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "0 8px 32px -4px rgba(0,0,0,0.1)",
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "text-wine bg-wine/[0.06]"
                      : "text-stone-muted hover:text-stone hover:bg-stone/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-wine text-white font-medium px-4 py-2.5 rounded-xl text-sm mt-1"
            >
              Get Listed
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
