# AGENT.md — Architectural Decision Log

## Project Overview
**Project:** Văn hóa Ẩm thực Hà Nội — A cinematic scrollytelling single-page website  
**Framework:** Next.js 14+ (App Router)  
**Date:** 2026-09-19  

---

## 1. Architecture: Next.js App Router

### Why App Router over Pages Router?
- **Server Components by default** — heavy text content renders on the server, reducing JS bundle size.
- **Streaming & Suspense** — sections can progressively load, improving perceived performance.
- **Layout nesting** — a single `layout.tsx` wraps the entire page with global providers (Lenis, fonts).

### Route Structure
```
app/
├── layout.tsx          # Root layout: fonts, metadata, Lenis provider
├── page.tsx            # Single-page entry — orchestrates all sections
├── globals.css         # Tailwind directives + custom CSS variables
└── components/
    ├── SmoothScroll.tsx    # Lenis wrapper (client component)
    ├── HeroSection.tsx     # Full-screen aurora/gradient hero
    ├── BentoGrid.tsx       # 3-card bento grid for "Đặc trưng"
    ├── ParallaxSection.tsx # Reusable parallax + glassmorphism card
    ├── TextReveal.tsx      # GSAP-powered text reveal on scroll
    ├── Navbar.tsx          # Minimal floating navbar
    └── Footer.tsx          # Credits & attribution
```

---

## 2. Component Hierarchy

```
RootLayout (Server)
└── SmoothScroll (Client — Lenis)
    └── Page (Server)
        ├── Navbar (Client — scroll-aware)
        ├── HeroSection (Client — Framer Motion)
        ├── BentoGrid (Client — Framer Motion stagger)
        ├── ParallaxSection × 2 (Client — GSAP ScrollTrigger)
        ├── TextReveal (Client — GSAP SplitText)
        └── Footer (Server)
```

### Client vs. Server Boundary Decisions
- **Server Components:** `page.tsx`, `Footer` — static content, no interactivity.
- **Client Components:** Everything with animations or scroll listeners gets `"use client"`.
- This split ensures the initial HTML payload is lean while interactive sections hydrate progressively.

---

## 3. Scrollytelling Strategy

### Scroll Engine: Lenis
- Provides buttery-smooth inertia scrolling across all browsers.
- Exposes a unified scroll position that feeds into both Framer Motion and GSAP.

### Animation Layering
1. **Framer Motion** — Used for declarative enter/exit animations (`whileInView`, `variants`). Ideal for the Hero section fade-ins and Bento card stagger reveals.
2. **GSAP + ScrollTrigger** — Used for timeline-based, pixel-precise scroll-linked animations. Powers the parallax image movement and text character reveals.

### Why both libraries?
- Framer Motion excels at React-idiomatic, state-driven animations.
- GSAP excels at performance-critical, frame-synced scroll animations.
- Using both avoids forcing either tool into an uncomfortable pattern.

---

## 4. Visual Design System

### Color Palette
- **Primary:** Warm amber/gold (`#D4A574`) — evokes phở broth, autumn Hanoi.
- **Accent:** Deep burgundy (`#8B1A1A`) — traditional Vietnamese lacquer.
- **Background:** Near-black (`#0A0A0A`) with subtle warm undertones.
- **Glass:** `rgba(255, 255, 255, 0.05)` with `backdrop-blur-xl`.

### Typography
- **Display:** Playfair Display — elegant serif for Vietnamese diacritics.
- **Body:** Inter — clean sans-serif for readability.

### Motion Principles
- Animations are scroll-triggered, not time-based — the user controls pacing.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for organic, Apple-like feel.
- No animation exceeds 1.2s duration to maintain perceived responsiveness.

---

## 5. Performance Targets
- **Lighthouse Performance:** ≥ 90
- **LCP:** < 2.5s (hero image lazy-loaded, text renders server-side)
- **CLS:** < 0.1 (all images have explicit dimensions)
- **FID:** < 100ms (animations run on compositor thread via `will-change`)
