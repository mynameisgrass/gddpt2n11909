"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/[0.06]">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #D4A574, #E8C9A0, #D4A574)",
        }}
      />
    </div>
  );
}
