"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Globe, Sprout } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const headingWords = [
  "Thách",
  "thức",
  "và",
  "Sứ",
  "mệnh",
  "Bảo",
  "tồn",
  "Ẩm",
  "thực",
  "Hà",
  "Nội",
  "trong",
  "Thời",
  "đại",
  "Mới",
];

const challenges = [
  {
    icon: Globe,
    title: "Toàn cầu hóa",
    description:
      "Làn sóng fast-food và ẩm thực quốc tế đang dần thay đổi khẩu vị của thế hệ trẻ Hà Nội.",
    details: [
      "Chuỗi cửa hàng fast-food mọc lên khắp phố cổ",
      "Thế hệ Gen Z quen với hương vị quốc tế từ nhỏ",
      "Quán phở gia truyền phải cạnh tranh về giá và tốc độ phục vụ",
      "Nguy cơ mất dần bản sắc trong dòng chảy hội nhập toàn cầu",
    ],
    color: "#60a5fa",
  },
  {
    icon: Shield,
    title: "An toàn thực phẩm",
    description:
      "Vệ sinh an toàn thực phẩm vẫn là mối quan tâm hàng đầu, đòi hỏi minh bạch từ mọi khâu.",
    details: [
      "Truy xuất nguồn gốc nguyên liệu từ trang trại đến bàn ăn",
      "Quy trình chế biến cần đạt chuẩn HACCP",
      "Nâng cao ý thức người bán hàng rong và chợ truyền thống",
      "Ứng dụng công nghệ trong kiểm soát chất lượng thực phẩm",
    ],
    color: "#f59e0b",
  },
  {
    icon: Sprout,
    title: "Bảo tồn và Phát triển",
    description:
      "Bảo tồn không phải đóng khung — mà là kể lại câu chuyện bằng ngôn ngữ mới cho thế hệ sau.",
    details: [
      "Số hóa công thức gia truyền trước khi thất truyền",
      "Đưa ẩm thực Hà Nội vào chương trình giáo dục văn hóa",
      "Phát triển du lịch ẩm thực bền vững, có trách nhiệm",
      "Kết hợp truyền thống và sáng tạo — tôn vinh nhưng không đóng khung",
    ],
    color: "#4ade80",
  },
];

export default function TextReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: `top ${80 - i * 1.5}%`,
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="bao-ton" className="section-spacing pb-48">
      <div className="section-container">
        {/* Animated heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="caption text-[var(--color-primary)] mb-6 text-center"
        >
          Hướng tới tương lai
        </motion.p>

        {/* Pre-rendered word spans for GSAP animation */}
        <h2
          className="heading-section text-center mb-16 leading-[1.4] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {headingWords.map((word, i) => (
            <span
              key={i}
              style={{
                overflow: "hidden",
                display: "inline-block",
                marginRight: "0.35em",
                verticalAlign: "top",
                paddingBottom: "0.15em",
              }}
            >
              <span
                ref={(el) => {
                  wordRefs.current[i] = el;
                }}
                style={{ display: "inline-block" }}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        <div className="hr-gold w-20 mx-auto mb-16" />

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.04] mb-20 md:mb-28">
          {challenges.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="bg-[var(--color-bg)] p-8 lg:p-10 group flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `${challenge.color}10`,
                    border: `1px solid ${challenge.color}20`,
                  }}
                >
                  <challenge.icon
                    size={18}
                    style={{ color: challenge.color }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="heading-card text-[var(--color-text)] mb-3 tracking-tight leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {challenge.title}
                </h3>
                <p className="body-base text-[var(--color-text-muted)] mb-6 leading-[1.85]">
                  {challenge.description}
                </p>
              </div>
              <ul className="space-y-3.5 mt-auto">
                {challenge.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-sm text-[var(--color-text-dim)] leading-[1.8] flex gap-2.5"
                  >
                    <span
                      className="text-xs mt-0.5 shrink-0"
                      style={{ color: challenge.color, opacity: 0.5 }}
                    >
                      ▸
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing statement - perfectly centered with flex wrapper */}
        <div className="w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <div className="glass-card w-full p-10 md:p-14 text-center">
              <p
                className="body-large text-[var(--color-text)] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  lineHeight: "2.1",
                  letterSpacing: "0.01em",
                }}
              >
                &ldquo;Ẩm thực Hà Nội không chỉ là thức ăn — đó là linh hồn của
                một thành phố, là sợi dây kết nối quá khứ với hiện tại, là di sản
                sống cần được trân trọng và gìn giữ cho muôn đời sau.&rdquo;
              </p>
              <div className="hr-gold w-16 mx-auto mb-4" />
              <p className="caption text-[var(--color-text-dim)] tracking-[0.18em]">
                Tinh hoa ẩm thực Tràng An
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
