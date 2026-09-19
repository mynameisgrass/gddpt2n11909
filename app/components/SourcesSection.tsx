"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  FileText,
  ExternalLink,
  Bookmark,
  CheckCircle2,
} from "lucide-react";

interface SourceItem {
  category: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  description: string;
  keyContributions: string[];
}

const sourcesData: SourceItem[] = [
  {
    category: "Văn học & Khảo cứu cổ điển",
    title: "Hà Nội Băm Sáu Phố Phường",
    author: "Thạch Lam (Nhóm Tự Lực Văn Đoàn)",
    year: "1943",
    publisher: "NXB Đời Nay (Tái bản NXB Văn Học)",
    description:
      "Tác phẩm văn học kinh điển đầu tiên phác họa sâu sắc linh hồn ẩm thực Hà thành, đặc biệt là những gánh phở rong, bún chả, thức quà cốm mùa thu và nghệ thuật thưởng thức tinh tế của người Tràng An.",
    keyContributions: [
      "Khắc họa chân dung gánh phở rong phố cổ: 'Phở ngon phải là phở cổ truyền, nước dùng trong và ngọt, bánh dẻo mà không nát'.",
      "Vinh danh cốm Làng Vòng như một thứ quà của lúa nếp non, thuần khiết hương đồng gió nội.",
      "Ghi chép về cách ăn quà thanh lịch: Ăn quà Hà Nội không phải để no bụng mà để thưởng thức cái phong vị đất kinh kỳ.",
    ],
  },
  {
    category: "Văn học & Khảo cứu cổ điển",
    title: "Miếng Ngon Hà Nội",
    author: "Vũ Bằng",
    year: "1957",
    publisher: "NXB Đất Mới (Tái bản NXB Văn Học)",
    description:
      "Công trình khảo cứu ẩm thực công phu và giàu cảm xúc nhất của thế kỷ XX, phân tích tỉ mỉ từng món ăn từ phở bò, phở gà, bún chả, chả cá, bánh cốm đến bún thang dưới góc nhìn văn hóa học.",
    keyContributions: [
      "Phân tích cấu trúc ngũ vị của nước dùng phở bò và quy chuẩn ninh xương ống bò không pha tạp.",
      "Miêu tả nghệ thuật nướng chả bằng kẹp que tre tươi trên than hoa đượm của bún chả.",
      "Ghi nhận triết lý thẩm mỹ của bát bún thang như một bức tranh tĩnh vật đủ sắc trắng, vàng, nâu, xanh.",
    ],
  },
  {
    category: "Hồ sơ Di sản Văn hóa",
    title: "Hồ sơ Đề cử Di sản Văn hóa Phi vật thể — Tri thức Dân gian Phở Hà Nội",
    author: "Sở Văn hóa & Thể thao Hà Nội & Viện Văn hóa Nghệ thuật Quốc gia (VICAS)",
    year: "2024",
    publisher: "Bộ Văn hóa, Thể thao và Du lịch",
    description:
      "Công trình khoa học và khảo sát thực địa toàn diện về lịch sử hình thành, chuỗi cung ứng nguyên liệu và các gia đình nghệ nhân gìn giữ công thức phở gia truyền qua nhiều thế hệ tại Hà Nội.",
    keyContributions: [
      "Xác định niên đại xuất hiện của phở vào đầu thế kỷ XX tại bến sông Hồng và khu phố cổ Hà Nội.",
      "Hệ thống hóa quy chuẩn kỹ thuật hầm xương 12 tiếng và phối ngũ 5 loại thảo mộc truyền thống.",
      "Lập danh mục các dòng họ gia truyền gìn giữ thương hiệu phở cổ truyền tại phố Hàng Đồng, Bát Đàn, Lò Đúc.",
    ],
  },
  {
    category: "Di sản Làng nghề Truyền thống",
    title: "Nghiên cứu Bảo tồn Nghề Ướp Trà Sen Quảng An & Làng Cốm Mễ Trì — Dịch Vọng",
    author: "Hội Văn nghệ Dân gian Hà Nội",
    year: "2020",
    publisher: "Tạp chí Văn hóa Dân gian & NXB Hà Nội",
    description:
      "Tài liệu nghiên cứu chuyên sâu về quy trình sản xuất thủ công độc bản của hai nghề di sản tiêu biểu: trà ướp bông sen Bách Diệp Tây Hồ và nghề giã cốm nếp non vùng đồng bằng sông Hồng.",
    keyContributions: [
      "Khảo sát định lượng: 1.400 bông sen Tây Hồ cho 1 kg chè mộc qua 7 chu kỳ ướp sấy kéo dài hơn 20 ngày.",
      "Phân tích đặc tính giống sen Bách Diệp thổ nhưỡng bùn khoáng ven hồ Tây có túi hương đậm đặc nhất.",
      "Ghi chép công thức làm bánh cốm bọc lá chuối tại số 11 Hàng Than từ năm 1865.",
    ],
  },
  {
    category: "Tư liệu Địa chí & Lịch sử",
    title: "Thương Nhớ Mười Hai & Thú Ăn Chơi Người Hà Nội",
    author: "Vũ Bằng — Băng Sơn",
    year: "1971 — 1995",
    publisher: "NXB Văn Học & NXB Phụ Nữ",
    description:
      "Hệ thống tư liệu hồi ức và tạp văn phân tích sâu sắc thói quen ăn uống theo mùa (mùa nào thức nấy) và phép tắc ứng xử văn minh trong bữa ăn của người Thăng Long.",
    keyContributions: [
      "Mối liên hệ giữa 4 mùa khí hậu Hà Nội và các món ăn tương ứng: mùa thu cốm non, mùa đông phở nóng, mùa hè trà sen thanh nhiệt.",
      "Triết lý ẩm thực 'trọng chất hơn lượng', đề cao tính tươi mới và nguyên bản của nguyên liệu địa phương.",
    ],
  },
  {
    category: "Báo chí & Tư liệu Đa phương tiện",
    title: "Ký Sự Thăng Long — Ẩm Thực Phố Cổ & Phóng Sự Quốc Tế",
    author: "Đài Truyền hình Việt Nam (VTV) & Anthony Bourdain: Parts Unknown (CNN)",
    year: "2010 — 2016",
    publisher: "VTV Documentary & CNN International",
    description:
      "Tư liệu hình ảnh và phỏng vấn nhân chứng sống về lịch sử quán Chả cá Lã Vọng (thành lập 1871 tại số 14 Hàng Sơn) và sự kiện thưởng thức bún chả của Tổng thống Barack Obama năm 2016.",
    keyContributions: [
      "Tư liệu lịch sử về gia đình cụ Đoàn gìn giữ món chả cá trong thời kỳ nuôi giấu nghĩa quân Đề Thám.",
      "Hiệu ứng lan tỏa ẩm thực đường phố Hà Nội ra toàn cầu qua truyền thông quốc tế.",
    ],
  },
];

export default function SourcesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="nguon-tham-khao" className="py-14 border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="section-container">
        {/* Toggle Bar / Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8 glass-card border border-white/[0.08]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/25 text-[var(--color-primary)] shrink-0">
              <BookOpen size={22} strokeWidth={1.75} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-primary)] font-semibold">
                  Tài liệu khảo cứu & Tư liệu tham khảo
                </span>
                <span className="text-[0.625rem] px-2 py-0.5 bg-white/[0.06] text-[var(--color-text-muted)] rounded-full">
                  6 nguồn chính thống
                </span>
              </div>
              <h3
                className="text-lg md:text-xl font-semibold text-[var(--color-text)] mt-1 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nguồn Trích Dẫn & Cơ Sở Lịch Sử Văn Hóa
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2.5 px-5 py-3 text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300 border border-[var(--color-primary)]/40 hover:border-[var(--color-primary)] bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] cursor-pointer self-stretch md:self-auto justify-center"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Thu gọn nguồn tư liệu" : "Mở rộng xem nguồn tham khảo"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </div>

        {/* Expandable / Collapsible Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-8">
                {/* Intro note */}
                <div className="mb-8 p-4 bg-white/[0.02] border-l-2 border-[var(--color-primary)]/60">
                  <p className="text-xs md:text-sm text-[var(--color-text-muted)] leading-[1.85]">
                    Mọi số liệu, niên đại lịch sử và quy chuẩn ẩm thực trên trang web đều được đối chiếu, tổng hợp từ các tác phẩm văn học kinh điển, công trình khảo cứu văn hóa dân gian và hồ sơ di sản chính thức của các cơ quan văn hóa có thẩm quyền.
                  </p>
                </div>

                {/* Sources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {sourcesData.map((src, index) => (
                    <motion.div
                      key={src.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      className="glass-card p-6 flex flex-col justify-between border border-white/[0.06] hover:border-[var(--color-primary)]/40 transition-colors duration-300"
                    >
                      <div>
                        {/* Category & Year */}
                        <div className="flex items-center justify-between mb-3 text-[0.6875rem] text-[var(--color-primary)]">
                          <span className="font-semibold uppercase tracking-wider">
                            {src.category}
                          </span>
                          <span className="text-[var(--color-text-dim)]">
                            {src.year}
                          </span>
                        </div>

                        {/* Title & Author */}
                        <h4
                          className="text-base font-semibold text-[var(--color-text)] mb-1.5 leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {src.title}
                        </h4>
                        <p className="text-xs text-[var(--color-primary-light)]/80 mb-3 flex items-center gap-1.5">
                          <Bookmark size={12} className="text-[var(--color-primary)] shrink-0" />
                          <span>{src.author}</span>
                        </p>
                        <p className="text-xs text-[var(--color-text-dim)] mb-4 italic">
                          NXB: {src.publisher}
                        </p>

                        {/* Summary description */}
                        <p className="text-xs text-[var(--color-text-muted)] leading-[1.8] mb-4 pb-4 border-b border-white/[0.06]">
                          {src.description}
                        </p>

                        {/* Bullet points of verified contributions */}
                        <div className="space-y-2">
                          <p className="text-[0.6875rem] uppercase tracking-wider text-[var(--color-primary)] font-medium">
                            Dữ liệu & Cột mốc đối chiếu:
                          </p>
                          <ul className="space-y-2">
                            {src.keyContributions.map((point, pIdx) => (
                              <li
                                key={pIdx}
                                className="text-xs text-[var(--color-text-dim)] leading-[1.75] flex items-start gap-2"
                              >
                                <CheckCircle2
                                  size={13}
                                  className="text-[var(--color-primary)] shrink-0 mt-0.5 opacity-70"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
