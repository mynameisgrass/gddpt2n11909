"use client";

import { motion } from "framer-motion";
import { Leaf, Flame, Palette } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const cards = [
  {
    icon: Leaf,
    title: "Nguồn Nguyên Liệu",
    subtitle: "Tươi ngon · Bản địa · Theo mùa",
    description:
      "Người Hà Nội chọn nguyên liệu với sự cầu kỳ tuyệt đối — mỗi nguyên liệu được chọn lọc theo mùa, đảm bảo hương vị tinh khiết và trọn vẹn nhất.",
    details: [
      "Rau muống Linh Chiểu xanh mướt, giòn ngọt tự nhiên",
      "Thịt bò tươi chợ sáng, không qua đông lạnh",
      "Gạo nếp cái hoa vàng từ đồng bằng Bắc Bộ",
      "Rau thơm vườn nhà: húng Láng, kinh giới, tía tô",
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    imageAlt: "Nguyên liệu tươi ngon tại chợ Hà Nội",
    iconColor: "#4ade80",
  },
  {
    icon: Flame,
    title: "Kỹ Thuật Chế Biến",
    subtitle: "Tinh hoa · Truyền thống · Gia truyền",
    description:
      "Nấu ăn Hà Nội là nghệ thuật của sự kiên nhẫn và chính xác — mỗi công đoạn đòi hỏi sự tỉ mỉ và bí quyết riêng.",
    details: [
      "Nước dùng phở ninh từ xương ống trong 12 giờ",
      "Bún chả nướng trên than hoa, đúng nhiệt độ",
      "Bí quyết gia truyền qua nhiều thế hệ",
      "Gia vị đong đo chính xác, không ước lượng",
    ],
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    imageAlt: "Kỹ thuật nấu ăn truyền thống Việt Nam",
    iconColor: "#fb923c",
  },
  {
    icon: Palette,
    title: "Nghệ Thuật Trình Bày",
    subtitle: "Sắc màu · Hài hòa · Ngũ vị",
    description:
      "Ẩm thực Hà Nội không chỉ ngon mà còn phải đẹp — triết lý ngũ vị được thể hiện trong từng món ăn.",
    details: [
      "Cân bằng ngũ vị: chua, cay, mặn, ngọt, béo",
      "Phở: bánh trắng ngà, bò tái hồng, hành lá xanh",
      "Bát bún thang — bảy sắc màu hài hòa",
      "Đĩa nem rán vàng ruộm xếp trên lá chuối xanh",
    ],
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    imageAlt: "Món ăn Hà Nội được trình bày tinh tế",
    iconColor: "#c084fc",
  },
];

export default function BentoGrid() {
  return (
    <section id="dac-trung" className="section-spacing">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center text-center mb-16"
        >
          <p className="caption text-[var(--color-primary)] mb-4">
            Ba trụ cột
          </p>
          <h2
            className="heading-section text-[var(--color-text)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Đặc trưng ẩm thực{" "}
            <span className="text-gold-gradient">Hà Nội</span>
          </h2>
          <div className="hr-gold w-16 mt-6" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.04]"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="bg-[var(--color-bg)] group flex flex-col"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />

                {/* Icon badge */}
                <div className="absolute bottom-4 left-5">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{
                      background: `${card.iconColor}12`,
                      border: `1px solid ${card.iconColor}28`,
                    }}
                  >
                    <card.icon
                      size={16}
                      style={{ color: card.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Card body — consistent p-8 with flex-col justify-between */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="heading-card text-[var(--color-text)] mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[0.6875rem] tracking-[0.1em] uppercase text-[var(--color-primary)] mb-4 opacity-60">
                    {card.subtitle}
                  </p>
                  <p className="body-base text-[var(--color-text-muted)] mb-6 leading-[1.85]">
                    {card.description}
                  </p>
                </div>
                <ul className="space-y-3 mt-auto">
                  {card.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-text-dim)] leading-[1.8] flex gap-2"
                    >
                      <span className="text-[var(--color-primary)] opacity-40 mt-0.5 shrink-0">
                        ·
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
