"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Clock, MapPin, Award, Sparkles, BookOpen } from "lucide-react";

interface FoodHistoryItem {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  originLocation: string;
  historyText: string;
  bulletPoints: string[];
  culturalSignificance: string;
  image: string;
  imageAlt: string;
}

const foodsHistory: FoodHistoryItem[] = [
  {
    id: "pho-bo",
    name: "Phở Bò Hà Nội",
    subtitle: "Quốc hồn quốc túy — Biểu tượng ẩm thực Việt Nam",
    period: "Đầu thế kỷ XX (~1900–1910)",
    originLocation: "Bến sông Hồng & Phố cổ Hà Nội (gốc Nam Định)",
    historyText:
      "Phở bò xuất hiện vào đầu thế kỷ XX trong bối cảnh giao thoa văn hóa thời Pháp thuộc. Ban đầu là những gánh phở rong kẽo kẹt trên vai người bán dạo khắp phố cổ từ tờ mờ sáng. Nước dùng thanh trong nguyên bản ninh từ xương ống bò cùng gừng nướng, quế chi, hoa hồi đã chinh phục từ giới phu xe đến các văn nghệ sĩ Tràng An.",
    bulletPoints: [
      "Khởi nguồn: Biến thể sáng tạo kết hợp giữa bánh cuốn tráng mỏng, thịt bò và kỹ thuật hầm xương độc đáo.",
      "Gánh phở xưa: Bếp than đỏ rực đặt một đầu đòn gánh, thùng nước dùng sôi liu riu thơm phức khắp ngõ nhỏ.",
      "Cột mốc 1954: Phở theo chân dòng người di cư vào miền Nam, tạo nên nhánh phở Nam với giá đỗ và tương đen.",
      "Quy chuẩn khắt khe: Bát phở Tràng An chuẩn mực không bao giờ dùng tương ngọt hay rau húng quế; chỉ dùng ớt tươi, chanh cốm và dấm tỏi.",
      "Ghi nhận quốc tế: Được vinh danh trong danh sách ẩm thực tinh hoa thế giới và được UNESCO lập hồ sơ di sản.",
    ],
    culturalSignificance:
      "Phở không đơn thuần là món ăn sáng mà đã trở thành nghi thức khởi đầu ngày mới và ký ức bất biến của người Hà Nội xa xứ.",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
    imageAlt: "Bát phở bò truyền thống Hà Nội với nước dùng trong",
  },
  {
    id: "bun-cha",
    name: "Bún Chả Hà Nội",
    subtitle: "Hương khói than hoa giữa lòng phố cổ",
    period: "Thập niên 1900",
    originLocation: "Các ngõ chợ Đồng Xuân & Phố Hàng Mành",
    historyText:
      "Bún chả là món ăn kinh điển mang đậm bản sắc bình dân nhưng vô cùng tinh tế của người Hà Nội. Từng được nhà văn Thạch Lam nhắc đến trong cuốn 'Hà Nội 36 phố phường' (1943) và Vũ Bằng ca tụng trong 'Miếng ngon Hà Nội' (1957), bún chả quyến rũ thực khách từ xa bởi làn khói nướng quạt than hoa đặc trưng.",
    bulletPoints: [
      "Hai loại chả gia truyền: Chả viên băm nhuyễn ướp nước mắm cốt và chả miếng ba chỉ thái mỏng tẩm ướp hành tiêu đậm vị.",
      "Kẹp que tre cổ truyền: Xưa kia kẹp bằng thanh nẹp tre tươi giúp thịt không bị khô cháy và đượm hương tre nướng.",
      "Nước chấm ấm nóng: Pha từ nước mắm nhĩ, dấm thanh, đường cát, nước lọc và luôn thả đu đủ xanh, cà rốt tỉa hoa giòn sần sật.",
      "Bún lá Phú Đô: Dùng bún con (bún vắt mỏng) hoặc bún sợi mềm mướt từ làng nghề bún Phú Đô hơn 500 năm tuổi.",
      "Cột mốc 2016: Tổng thống Mỹ Barack Obama cùng đầu bếp Anthony Bourdain thưởng thức bún chả tại phố Lê Văn Hưu, đưa món ăn lên truyền hình toàn cầu.",
    ],
    culturalSignificance:
      "Đại diện cho văn hóa ẩm thực trưa thanh tao — người Hà Nội xưa chỉ ăn bún chả vào bữa trưa, khi than củi đượm nhất.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/B%C3%BAn_Ch%E1%BA%A3_H%C3%A0_N%E1%BB%99i%2C_Vi%E1%BB%87t_Nam.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original",
    imageAlt: "Bún chả nướng than hoa truyền thống Hà Nội",
  },
  {
    id: "cha-ca",
    name: "Chả Cá Lã Vọng",
    subtitle: "Món ngon sinh ra từ dòng chảy kháng chiến giữ nước",
    period: "Năm 1871 (Thời vua Tự Đức)",
    originLocation: "Số 14 Hàng Sơn (nay đổi tên thành phố Chả Cá)",
    historyText:
      "Năm 1871, gia đình cụ Đoàn Xuân Phúc tại phố Hàng Sơn bí mật làm căn cứ nuôi giấu nghĩa quân Đề Thám. Để che mắt thực dân Pháp, gia đình mở quán bán chả cá sông nướng xào tại bàn. Khách quen thấy quán bày tượng Lã Vọng (Khương Tử Nha) ngồi câu cá bên bờ sông Vị nên gọi quen miệng thành Chả cá Lã Vọng.",
    bulletPoints: [
      "Nguyên liệu quý: Chuẩn vị nhất phải làm từ cá lăng sông Đà thịt chắc ngọt, ít xương dăm; xắt khúc vuông vắn rồi kẹp nẹp tre nướng sơ.",
      "Nghệ thuật chảo mỡ tại bàn: Ăn chả cá là một cuộc thưởng thức trực tiếp trên chảo mỡ sôi reo xèo xèo cùng hành hoa và thì là xanh ngắt.",
      "Linh hồn mắm tôm: Mắm tôm Hải Hậu đánh bông cùng rượu trắng, đường cát và nước cốt chanh tươi sủi bọt trắng xóa.",
      "Đồ ăn kèm tinh tuyển: Lạc rang vàng giã dập, bún rối sợi nhỏ, ớt đỏ và tinh dầu cà cuống tự nhiên.",
      "Tên phố độc nhất: Món ăn nổi tiếng đến mức chính quyền thành phố đã chính thức đổi tên phố Hàng Sơn thành phố Chả Cá.",
    ],
    culturalSignificance:
      "Món ăn duy nhất tại Việt Nam có hẳn một con phố mang tên mình, là biểu tượng trường tồn của lòng hiếu khách đất kinh kỳ.",
    image:
      "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwwn6sd4qkez1c",
    imageAlt: "Chả cá Lã Vọng thơm nức với thì là và hành hoa",
  },
  {
    id: "banh-com",
    name: "Cốm Vòng & Bánh Cốm Hàng Than",
    subtitle: "Hạt ngọc xanh thu gói trọn hương đồng gió nội",
    period: "Thế kỷ XI (Cốm Vòng) — Năm 1865 (Bánh Cốm)",
    originLocation: "Làng Vòng (Dịch Vọng Hậu) & Số 11 Hàng Than",
    historyText:
      "Truyền thuyết kể rằng vào mùa thu một năm thời nhà Lý, mưa bão làm đê vỡ ngập lụt ruộng lúa non. Dân làng Vòng phải vớt những bông lúa non sót lại đem rang khô giã ăn chống đói, tình cờ tạo nên món cốm xanh dẻo thơm nức tiếng. Đến năm 1865, cụ tổ dòng họ Nguyễn Duy tại số 11 Hàng Than đã sáng tạo ra bánh cốm nhân đậu xanh bọc lá chuối, trở thành lễ vật cưới hỏi danh giá.",
    bulletPoints: [
      "Lúa nếp cái hoa vàng: Chỉ dùng nếp non khi hạt còn đọng sữa, thu hoạch vào cữ sáng sớm mùa thu se lạnh.",
      "Kỹ thuật giã cốm kỳ công: Rang bằng chảo gang đáy dày trên lửa củi nhỏ, giã nhịp nhàng bằng cối đá chày gỗ qua 7 lần sảy sàng.",
      "Màu xanh diệp lục tự nhiên: Bánh cốm truyền thống có màu xanh nõn chuối tự nhiên của mạ non giã lấy nước, không dùng phẩm màu.",
      "Nhân đậu xanh sên đường: Đậu xanh bở tơi xào nhuyễn cùng đường kính trắng, dừa nạo sợi và thoảng hương hoa bưởi tinh khôi.",
      "Biểu tượng hôn nhân: Bánh cốm hình vuông bọc lá chuối cột lạt đỏ tượng trưng cho đất trời vuông tròn và lời chúc trăm năm gắn kết.",
    ],
    culturalSignificance:
      "Món quà mùa thu mang hương vị thi ca, xuất hiện trong mọi lễ ăn hỏi truyền thống của người Tràng An suốt hơn một thế kỷ.",
    image:
      "https://static.vinwonders.com/production/9Eo0HZBa-banh-com-ha-noi-1.jpg",
    imageAlt: "Bánh cốm xanh và cốm non mùa thu Hà Nội",
  },
  {
    id: "tra-sen",
    name: "Trà Sen Tây Hồ",
    subtitle: "Thiên cổ đệ nhất trà — Đỉnh cao tao nhã xứ Đoài",
    period: "Thế kỷ XVIII (Thời Chúa Trịnh)",
    originLocation: "Các phường cổ ven Hồ Tây (Quảng An, Nhật Tân, Nghi Tàm)",
    historyText:
      "Trà ướp sen Hồ Tây từng là phẩm vật dâng lên các vị vua chúa thời Lê — Trịnh. Nghệ thuật làm trà sen Tây Hồ là một trong những nghề thủ công tinh xảo và đòi hỏi sự kiên nhẫn bậc nhất thế giới, nơi hương thơm tinh khiết của đất trời hội tụ trong từng chén nước trà hổ phách óng ả.",
    bulletPoints: [
      "Giống sen Bách Diệp độc nhất: Chỉ dùng hoa sen trăm cánh thổ nhưỡng bùn khoáng Hồ Tây, cho lượng gạo sen (túi hương) nhiều và thơm đượm nhất.",
      "Thời khắc hái hoa: Hái sen từ 4 giờ đến 5 giờ sáng trước khi mặt trời mọc, khi cánh sen còn ngậm sương mai để giữ trọn tinh dầu.",
      "Quy trình ướp sấy 20 ngày: Cứ một lớp trà lại một lớp gạo sen, sấy khô bằng than hoa bọc giấy bản, lặp lại liên tục đủ 7 lần.",
      "Tỷ lệ vàng: Cần từ 1.200 đến 1.400 bông sen tuyển chọn gắt gao mới đủ ướp cho 1 kilôgam trà mộc Tân Cương thượng hạng.",
      "Nghi thức thưởng trà: Pha bằng nước giếng khơi hoặc nước mưa đun sôi bằng ấm đất nung, thưởng thức chậm rãi trong chén hạt mít men lam.",
    ],
    culturalSignificance:
      "Đại diện cho cốt cách thanh cao, lịch lãm và lòng thành kính sâu sắc trong văn hóa đối ẩm của tao nhân mặc khách đất Thăng Long.",
    image:
      "https://cdn.xanhsm.com/2024/12/071c4b15-tra-sen-tay-ho-5.jpg",
    imageAlt: "Ấm trà sen Tây Hồ nghi ngút khói thơm thanh nhã",
  },
  {
    id: "bun-thang",
    name: "Bún Thang Hà Nội",
    subtitle: "Bức tranh thủy mặc đa sắc — Đỉnh cao nghệ thuật cầu kỳ",
    period: "Thế kỷ XIX",
    originLocation: "Phố cổ Hàng Điếu, Cầu Gỗ & Hàng Hòm",
    historyText:
      "Bún thang bắt nguồn từ sự đảm đang khéo léo của người phụ nữ Tràng An trong dịp Tết Nguyên Đán. Vào ngày mùng 4 Tết lễ hoá vàng, những thức ăn dư thừa như thịt gà, giò lụa, tôm khô, trứng rán được người nội trợ tài hoa xắt nhỏ chỉ như sợi tơ rồi phối hợp hài hòa thành một bát bún tinh tế khôn cùng.",
    bulletPoints: [
      "Ý nghĩa tên gọi: 'Thang' trong chữ Hán có nghĩa là thang thuốc bắc hoặc canh canh bổ dưỡng, hàm ý sự phối ngũ âm dương cân đối tuyệt đối.",
      "Bức tranh 7 sắc màu: Trứng gà tráng mỏng tang thái chỉ vàng rộm, lườn gà xé sợi trắng ngà, giò lụa thái sợi hồng hào, nấm hương nâu bóng, củ cải dầm vàng sậm và hành rau răm xanh biếc.",
      "Nước dùng thanh ngọt bí truyền: Ninh từ xương gà, tôm he khô Cát Bà và đầu mực nướng, trong vắt như nước lọc nhưng ngọt lịm từ tủy.",
      "Điểm xuyết hạt cà cuống: Một đầu tăm tinh dầu cà cuống tự nhiên hòa vào nước dùng tạo nên hương thơm huyền bí khó quên.",
      "Gia vị không thể thiếu: Chút mắm tôm cốt dậy mùi và dấm ớt tỏi thanh tao.",
    ],
    culturalSignificance:
      "Minh chứng rõ nét nhất cho triết lý sống cần kiệm, thanh lịch và con mắt thẩm mỹ hội họa đỉnh cao của người Thăng Long — Hà Nội.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    imageAlt: "Bát bún thang Hà Nội phối màu ngũ sắc tinh xảo",
  },
];

export default function FoodHistory() {
  const [selectedFood, setSelectedFood] = useState<string>("pho-bo");

  const currentFood =
    foodsHistory.find((f) => f.id === selectedFood) || foodsHistory[0];

  return (
    <section id="lich-su" className="section-spacing relative bg-[#0D0B09]">
      {/* Decorative subtle border line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* SEPARATE ELEMENT 1: Header (Strictly Centered across the full viewport) */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 mb-12 sm:mb-14">
        <p className="caption text-[var(--color-primary)] mb-4 tracking-[0.2em] text-center">
          Dòng chảy thời gian
        </p>
        <h2
          className="heading-section text-[var(--color-text)] tracking-tight mb-6 text-center"
          style={{ fontFamily: "var(--font-display)", textAlign: "center" }}
        >
          Lịch sử & Giai thoại{" "}
          <span className="text-gold-gradient">Ẩm thực Hà Nội</span>
        </h2>
        <div className="hr-gold w-20 mx-auto mb-6" style={{ margin: "0 auto 1.5rem auto" }} />
        <p
          className="body-base text-[var(--color-text-muted)] leading-[1.9] text-center max-w-2xl mx-auto"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          Mỗi món ăn Hà Nội không sinh ra ngẫu nhiên, mà là kết tinh qua hàng
          trăm năm thăng trầm lịch sử, giao lưu văn hóa và sự sáng tạo tinh tế
          của người Tràng An.
        </p>
      </div>

      {/* SEPARATE ELEMENT 2: Interactive Food Tabs and Showcase Card */}
      <div className="section-container">
        {/* Food Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {foodsHistory.map((food) => {
            const isActive = food.id === selectedFood;
            return (
              <button
                key={food.id}
                onClick={() => setSelectedFood(food.id)}
                className={`px-4 py-2.5 text-xs md:text-sm font-medium transition-all duration-300 relative cursor-pointer border ${
                  isActive
                    ? "text-[var(--color-bg)] bg-[var(--color-primary)] border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20"
                    : "text-[var(--color-text-muted)] bg-white/[0.02] border-white/[0.08] hover:border-white/[0.2] hover:text-[var(--color-text)]"
                }`}
              >
                <span>{food.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[var(--color-primary)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Food Showcase Card - 2-column layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFood.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8 lg:p-12 border border-white/[0.08]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Visual Column: Image + Badges (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[460px] h-full w-full overflow-hidden border border-white/[0.08] bg-black/40 shadow-2xl">
                <Image
                  src={currentFood.image}
                  alt={currentFood.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />

                {/* Badges on image */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/75 backdrop-blur-md border border-white/10 w-fit text-xs text-[var(--color-primary-light)]">
                    <Clock size={13} className="text-[var(--color-primary)]" />
                    <span>{currentFood.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/75 backdrop-blur-md border border-white/10 w-fit text-xs text-[var(--color-text-muted)]">
                    <MapPin size={13} className="text-[var(--color-primary)]" />
                    <span>{currentFood.originLocation}</span>
                  </div>
                </div>
              </div>

              {/* Content Column: History Narrative + Important Bullets (7 cols) - Centered */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center text-center px-2 md:px-4">
                {/* Title & Subtitle */}
                <div className="mb-4 text-center">
                  <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-primary)] font-semibold block mb-1">
                    Hồ sơ di sản ẩm thực
                  </span>
                  <h3
                    className="heading-card text-2xl md:text-3xl lg:text-4xl text-[var(--color-text)] mt-1 mb-2 tracking-tight text-center"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {currentFood.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-primary-light)]/80 italic text-center">
                    {currentFood.subtitle}
                  </p>
                  <div className="hr-gold w-16 mx-auto my-5" />
                </div>

                {/* History Paragraph - Centered */}
                <div className="mb-7 p-5 bg-white/[0.02] border border-white/[0.06] text-center max-w-xl mx-auto w-full">
                  <p className="body-base text-[var(--color-text)] leading-[1.95] text-sm md:text-[0.9375rem] text-center">
                    {currentFood.historyText}
                  </p>
                </div>

                {/* Bullet Points: Important Facts */}
                <div className="max-w-xl mx-auto w-full mb-7">
                  <h4 className="text-xs uppercase tracking-[0.16em] text-[var(--color-primary)] mb-4 flex items-center justify-center gap-2 font-semibold text-center">
                    <Sparkles size={14} className="text-[var(--color-primary)]" />
                    <span>Cột mốc & Thông tin quan trọng</span>
                  </h4>
                  <ul className="space-y-3.5 text-left">
                    {currentFood.bulletPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-xs md:text-sm text-[var(--color-text-muted)] leading-[1.85] flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0 opacity-80" />
                        <span className="text-[var(--color-text)]/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cultural Significance Footer - Centered */}
                <div className="border-t border-white/[0.06] pt-5 w-full max-w-xl mx-auto flex items-center justify-center gap-2.5 text-center">
                  <Award size={18} className="text-[var(--color-primary)] shrink-0" />
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed italic text-center">
                    <strong className="text-[var(--color-text)] not-italic font-medium">
                      Ý nghĩa văn hóa:
                    </strong>{" "}
                    {currentFood.culturalSignificance}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
