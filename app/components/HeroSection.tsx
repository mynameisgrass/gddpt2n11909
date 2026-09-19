"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="khai-niem"
      className="relative min-h-screen flex items-center justify-center aurora-bg overflow-hidden"
    >
      {/* Subtle floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -30, 15, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-[280px] h-[280px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(212,165,116,0.25) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 25, -20, 0],
            scale: [1, 0.92, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[20%] right-[12%] w-[350px] h-[350px] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(139,26,26,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content — strictly centered */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center mx-auto max-w-4xl px-6"
      >
        {/* Overline label */}
        <motion.p
          variants={fadeUpVariants}
          className="caption text-[var(--color-primary)] mb-8"
        >
          Khám phá tinh hoa ngàn năm
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="heading-hero mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gold-gradient">Văn hóa</span>
          <br />
          <span className="text-[var(--color-text)]">Ẩm thực Hà Nội</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          variants={lineVariants}
          className="hr-gold w-20 my-10 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUpVariants}
          className="body-large text-[var(--color-text-muted)] max-w-2xl mb-6 leading-[1.95]"
        >
          Hà Nội — mảnh đất ngàn năm văn hiến, nơi mỗi món ăn là một câu
          chuyện, mỗi hương vị là một ký ức. Từ bát phở nóng hổi trong sương
          sớm mùa đông, đến ly trà sen thanh mát giữa trưa hè, ẩm thực Hà Nội
          mang trong mình sự tinh tế và thanh lịch của người Tràng An.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          className="body-base text-[var(--color-text-dim)] max-w-xl leading-[1.9]"
        >
          Bốn mùa xuân hạ thu đông, mỗi mùa một sắc thái, mỗi tiết trời một
          món ngon — tạo nên bản giao hưởng ẩm thực không nơi nào sánh được.
        </motion.p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
