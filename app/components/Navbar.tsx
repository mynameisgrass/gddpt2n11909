"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Menu, X } from "lucide-react";
import type Lenis from "@studio-freight/lenis";

const navItems = [
  { label: "Khái niệm", href: "#khai-niem" },
  { label: "Đặc trưng", href: "#dac-trung" },
  { label: "Điểm nhấn", href: "#diem-nhan" },
  { label: "Lịch sử", href: "#lich-su" },
  { label: "Bảo tồn", href: "#bao-ton" },
  { label: "Nguồn", href: "#nguon-tham-khao" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      const lenis = (
        window as unknown as Record<string, unknown>
      ).__lenis as Lenis | undefined;
      const target = document.querySelector(href);

      if (target && lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -20, duration: 1.5 });
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const scrollToTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const lenis = (
        window as unknown as Record<string, unknown>
      ).__lenis as Lenis | undefined;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 transition-all duration-500 ${
          scrolled ? "nav-glass" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-8">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
          >
            <ChefHat size={20} strokeWidth={1.5} />
            <span
              className="font-semibold text-sm tracking-widest uppercase hidden sm:inline"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hà Nội
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[0.6875rem] tracking-[0.15em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col items-center gap-8"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="text-xl font-light tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
