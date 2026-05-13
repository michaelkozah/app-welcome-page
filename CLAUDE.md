---
name: zahle-app-website
description: Build and maintain the Zahle App website — a multi-page marketing site for a city guide app for Zahlé, Lebanon. Use this skill whenever working on the zahleapp.com website, including the landing page, pricing page, privacy policy, about page, contact page, or any business-facing content. Also use when adding new pages, updating pricing tiers, writing restaurant/business descriptions, or making design changes to the site.
---

# Zahle App Website

## Project Overview

Zahle App is a mobile city guide for Zahlé, Lebanon — the third-largest city in the country and a UNESCO City of Gastronomy. The app serves residents and tourists with local news, restaurant/café listings, events, landmarks, and city information.

- **App Store**: https://apps.apple.com/lb/app/zahle/id6760541995
- **Developer**: Michael Kozah / Progressive SARL
- **Website purpose**: Marketing site for the app + business listing sales page

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Fonts**: Google Fonts — Playfair Display (display/headings) + DM Sans (body)
- **Icons**: Lucide React

If the project hasn't been initialized yet, scaffold it with:
```bash
npx create-next-app@latest zahleapp-website --typescript --tailwind --app --src-dir
```

## Design System

### Brand Identity
Zahle App's visual identity draws from Zahlé's wine heritage and warm Mediterranean character.

### Color Palette
```css
/* Primary */
--wine: #6B1D3A;
--wine-light: #8B2D52;
--wine-dark: #4A1228;

/* Accent */
--gold: #D4A957;
--gold-light: #E8C97A;

/* Neutrals */
--cream: #FDF8F0;
--cream-dark: #F5EDE0;
--stone: #3A3632;
--stone-light: #5A5550;
--stone-muted: #8A8580;
```

### Tailwind Config Extension
Add these colors to `tailwind.config.ts` under `theme.extend.colors`:
```ts
colors: {
  wine: { DEFAULT: '#6B1D3A', light: '#8B2D52', dark: '#4A1228' },
  gold: { DEFAULT: '#D4A957', light: '#E8C97A' },
  cream: { DEFAULT: '#FDF8F0', dark: '#F5EDE0' },
  stone: { DEFAULT: '#3A3632', light: '#5A5550', muted: '#8A8580' },
}
```

### Typography Rules
- **Headings**: Playfair Display — serif, elegant. Use for all h1–h3.
- **Body**: DM Sans — clean, modern sans-serif. Use for paragraphs, nav, buttons.
- **Hero headlines**: clamp(36px, 6vw, 64px)
- **Section titles**: clamp(28px, 4vw, 42px)
- **Body text**: 15–16px, line-height 1.7–1.8
- **Labels/badges**: 12–13px, uppercase, letter-spacing 1.5–2.5px

### Design Principles
1. **Warm and premium** — Not corporate. Think boutique wine label, not tech startup.
2. **Wine & gold accents** — Use wine for primary actions and hero backgrounds. Gold for badges, highlights, and CTAs.
3. **Generous whitespace** — Cream backgrounds, spacious padding.
4. **Subtle animations** — Fade-up on scroll, hover lifts on cards. No flashy transitions.
5. **Mobile-first** — Everything must look great on iPhone screens. Many users will visit from their phones.

### Component Patterns
- **Cards**: White background, rounded-2xl, subtle shadow, 1px border in stone/5%
- **Buttons (primary)**: Gold gradient background, wine-dark text, rounded-xl, shadow
- **Buttons (secondary)**: Transparent with stone border, hover fills to stone
- **Badges**: Uppercase, small text, pill shape, gold text on wine or wine text on gold
- **Section layout**: Label (gold, uppercase) → Title (Playfair) → Subtitle (stone-muted) → Content

## Site Structure

### Pages Required

```
/                    → Landing page (app showcase)
/pricing             → Business listing pricing (3 tiers)
/privacy             → Privacy policy
/about               → About the app and team
/contact             → Contact form / info
/terms               → Terms of service (optional)
```

### Global Layout
- **Navbar**: Logo left, nav links center/right, "Get Listed" CTA button (gold)
- **Footer**: App Store badge, social links, Progressive SARL copyright, nav links, contact email
- **App Store badge**: Always link to https://apps.apple.com/lb/app/zahle/id6760541995

### Page: Landing (`/`)
Sections in order:
1. **Hero** — Wine gradient background, app name, tagline, App Store download button, phone mockup if available
2. **Stats bar** — 150K+ residents, 5.0 App Store rating, key metrics
3. **Features** — Grid of 4–6 features: News, Restaurants, Events, Explore, City Info
4. **App screenshots** — Carousel or grid showing the app UI
5. **For Businesses CTA** — "Want your business on Zahle App?" → links to /pricing
6. **Download CTA** — Final push to download from App Store

### Page: Pricing (`/pricing`)
Three tiers, no free plan:

**Basic — $35/month**
- Business listing (name, address, phone)
- Written description & category tags
- Opening hours & map location
- Up to 3 photos
- Searchable in app directory

**Spotlight — $65/month** (mark as "Most Popular")
- Everything in Basic
- Up to 10 photos + menu/gallery
- Priority placement in search
- Featured in "Top Picks" & category pages
- Social media links & website URL
- Monthly performance insights

**Exclusive — $120/month**
- Everything in Spotlight
- Unlimited photos + video
- Promoted posts in news feed
- Event promotion & push notifications
- Homepage featured banner (rotating)
- Dedicated account manager
- Detailed analytics & quarterly review

### Page: Privacy Policy (`/privacy`)
Standard mobile app privacy policy covering:
- Data collection: The app does NOT collect personal data (as stated on App Store)
- Third-party services (analytics if any)
- Contact info for privacy inquiries
- Last updated date
- GDPR-friendly language

### Page: About (`/about`)
- Mission: Highlight the best of Zahlé and connect people to the city
- Background on Zahlé (UNESCO City of Gastronomy, Bride of the Bekaa, 150K residents)
- About the developer (Progressive SARL)
- Vision for the app's growth

### Page: Contact (`/contact`)
- Email: info@zahleapp.com (or progressivelb.com email)
- Phone number
- Simple contact form (name, email, message)
- "For business listings" CTA → link to /pricing

## Content Guidelines

### Tone of Voice
- **Proud but not boastful** — We love Zahlé and want others to discover it
- **Modern and clean** — Not overly formal, not too casual
- **Bilingual awareness** — Primary language is English, but be mindful that the audience is Lebanese. Arabic version may come later.

### Restaurant/Business Descriptions (for reference)
When writing descriptions for businesses featured on the site or in marketing materials:
- 2–3 paragraphs, ~150–200 words
- Mention location, cuisine type, standout dishes, atmosphere
- Include practical info: hours, phone, price range
- Honest and balanced — don't oversell

## SEO & Meta

### Default Meta Tags
```
title: "Zahle App — Discover Zahlé, Lebanon"
description: "Your city guide to Zahlé. Local news, restaurants, events, and places — all in one app."
og:image: (create a branded OG image, 1200x630)
```

### Per-Page Titles
- Landing: "Zahle App — Discover Zahlé, Lebanon"
- Pricing: "List Your Business on Zahle App — Pricing"
- About: "About Zahle App — Built for Zahlé"
- Privacy: "Privacy Policy — Zahle App"
- Contact: "Contact Us — Zahle App"

## Important Notes

- The app is very new (launched March 2026). Avoid making claims about large user numbers unless verified.
- Zahlé has ~150,000 residents — this is a real stat.
- The app has a 5.0 rating on the App Store (2 reviews as of launch).
- Never use the word "Zahle" without the accent in formal headings — use "Zahlé" in body text where possible. "Zahle App" (no accent) is the brand name.
- Progressive SARL is the legal entity behind the app.
- Developer website: https://progressivelb.com