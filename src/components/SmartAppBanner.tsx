"use client";

import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/lb/app/zahle/id6760541995";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.zahleapp";
const DISMISS_KEY = "zahle-app-banner-dismissed-at";
const DISMISS_DAYS = 14;

/**
 * "Get the app" banner for mobile browsers.
 * - iOS Safari is excluded: it shows the native Smart App Banner instead
 *   (the `itunes` metadata in layout.tsx) — showing both would double up.
 * - Android + iOS non-Safari browsers (Chrome/Firefox/in-app webviews) get
 *   this banner, linking to the right store.
 * - Dismissal is remembered for 14 days.
 */
export default function SmartAppBanner() {
  const [storeUrl, setStoreUrl] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);
    if (!isAndroid && !isIOS) return; // desktop: never show

    if (isIOS) {
      // Real Safari (not Chrome/Firefox/Edge/in-app) shows the native banner.
      const isSafari =
        /safari/i.test(ua) && !/crios|fxios|edgios|gsa|instagram|fbav/i.test(ua);
      if (isSafari) return;
    }

    try {
      const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 86400_000) {
        return;
      }
    } catch {
      /* storage unavailable — just show the banner */
    }

    setStoreUrl(isAndroid ? PLAY_STORE_URL : APP_STORE_URL);
  }, []);

  if (!storeUrl) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setStoreUrl(null);
  };

  return (
    <div className="sticky top-0 z-[60] flex items-center gap-3 bg-wine-dark/95 backdrop-blur px-3 py-2.5 border-b border-white/10">
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="text-white/40 text-lg leading-none px-1 shrink-0"
      >
        ×
      </button>
      <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
        <span className="font-display font-bold text-wine-dark text-lg">Z</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">
          Zahlé App
        </p>
        <p className="text-white/50 text-xs leading-tight truncate">
          News, events &amp; places — free
        </p>
      </div>
      <a
        href={storeUrl}
        rel="noopener"
        className="shrink-0 bg-gold text-wine-dark text-sm font-bold px-4 py-1.5 rounded-full"
      >
        Get
      </a>
    </div>
  );
}
