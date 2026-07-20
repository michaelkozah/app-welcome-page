"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/lb/app/zahle/id6760541995";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zahleapp";
const DISMISS_KEY = "zahle-app-banner-dismissed-at";
const DISMISS_DAYS = 14;

/**
 * "Get the app" banner for ALL mobile browsers (iOS + Android), pinned to the
 * bottom of the viewport so it stays visible while scrolling. Replaces the
 * native iOS Smart App Banner (which is small, top-anchored, and scrolls away).
 * Dismissal is remembered for 14 days. Never shows on desktop.
 */
export default function SmartAppBanner() {
  const [storeUrl, setStoreUrl] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    if (!isAndroid && !isIOS) return; // desktop: never show

    try {
      const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 86400_000) {
        return;
      }
    } catch {
      /* storage unavailable — just show the banner */
    }

    setStoreUrl(isAndroid ? PLAY_STORE_URL : APP_STORE_URL);
    // Slide up shortly after load so it doesn't compete with the hero paint.
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  if (!storeUrl) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setVisible(false);
    setTimeout(() => setStoreUrl(null), 300);
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[100] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-wine-dark/95 backdrop-blur-md border-t border-gold/25 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] px-4 pt-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-xl items-center gap-3.5">
          <Image
            src="/app-icon.jpg"
            alt="Zahlé App icon"
            width={52}
            height={52}
            className="h-13 w-13 shrink-0 rounded-xl border border-white/10 object-cover"
            style={{ width: 52, height: 52 }}
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-base font-bold leading-tight text-white">
              Zahlé App
            </p>
            <p className="truncate text-sm leading-snug text-white/60">
              News, events &amp; places — free
            </p>
          </div>
          <a
            href={storeUrl}
            rel="noopener"
            className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-base font-bold text-wine-dark active:scale-95 transition-transform"
          >
            Get
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="shrink-0 -mr-1 px-1.5 py-2 text-xl leading-none text-white/40"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
