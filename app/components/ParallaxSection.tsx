"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageData {
  src: string;
  alt: string;
}

interface ParallaxSectionProps {
  id?: string;
  overline: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  bulletPoints?: string[];
  images: {
    main: ImageData;
    secondary?: ImageData[];
  };
  stats?: { value: string; label: string }[];
}

export default function ParallaxSection({
  id,
  overline,
  title,
  titleHighlight,
  paragraphs,
  bulletPoints,
  images,
  stats,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mainImage = mainImageRef.current;

    if (!section || !mainImage) return;

    const ctx = gsap.context(() => {
      // Parallax on main image
      gsap.fromTo(
        mainImage,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="section-spacing">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="caption text-[var(--color-primary)] mb-4">
                {overline}
              </p>
              <h2
                className="heading-section mb-8 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}{" "}
                <span className="text-gold-gradient">{titleHighlight}</span>
              </h2>

              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="body-large text-[var(--color-text-muted)] leading-[1.95]"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Bullet points */}
              {bulletPoints && bulletPoints.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 border-l border-white/10 pl-6"
                >
                  <ul className="space-y-3.5">
                    {bulletPoints.map((point, i) => (
                      <li
                        key={i}
                        className="body-base text-[var(--color-text-dim)] leading-[1.85] flex gap-3"
                      >
                        <span className="text-[var(--color-primary)] opacity-50 mt-0.5 shrink-0 text-xs">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Stats row */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-10 flex gap-10 border-t border-white/[0.06] pt-8"
                >
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p
                        className="text-2xl lg:text-3xl font-bold text-gold-gradient tracking-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-text-dim)] mt-1.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* RIGHT: Image collage */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="image-collage"
            >
              {/* Main large image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <div ref={mainImageRef} className="absolute inset-[-10%]">
                  <Image
                    src={images.main.src}
                    alt={images.main.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                </div>
                {/* Bottom overlay for glass label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="glass-card-light inline-block px-4 py-2">
                    <p className="text-[0.625rem] tracking-[0.15em] uppercase text-[var(--color-primary)]">
                      {overline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary images */}
              {images.secondary &&
                images.secondary.map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden aspect-[4/3]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
