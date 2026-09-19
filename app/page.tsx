import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/HeroSection";
import BentoGrid from "./components/BentoGrid";
import ParallaxSection from "./components/ParallaxSection";
import TextReveal from "./components/TextReveal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />

      {/* Section 1: Hero — Khái niệm */}
      <HeroSection />

      {/* Section 2: Bento Grid — Đặc trưng */}
      <BentoGrid />

      {/* Section 3a: Phở Bò Hà Nội */}
      <ParallaxSection
        id="diem-nhan"
        overline="Tinh hoa #1"
        title="Phở Bò"
        titleHighlight="Hà Nội"
        paragraphs={[
          "Phở Hà Nội — không chỉ là món ăn, mà là biểu tượng của cả một nền văn hóa ẩm thực. Ra đời vào đầu thế kỷ XX tại vùng Nam Định — Hà Nội, phở nhanh chóng trở thành linh hồn ẩm thực của thủ đô và được UNESCO ghi nhận là di sản văn hóa phi vật thể.",
          "Nước dùng phở Hà Nội trong vắt nhưng đậm đà, được ninh từ xương ống bò trong suốt 12 tiếng đồng hồ, hòa quyện cùng hoa hồi, quế, thảo quả và gừng nướng. Bánh phở phải mỏng, mềm nhưng không nát. Thịt bò tái được thái lát mỏng tang, chỉ cần chần qua nước dùng sôi là chín tới.",
          "Người Hà Nội ăn phở như một nghi thức: không vội vàng, không ồn ào. Bát phở nóng hổi trong buổi sáng mùa đông, hít hà hương thơm bay lên từ tô phở nghi ngút khói — đó là khoảnh khắc thiêng liêng không thể thay thế.",
        ]}
        bulletPoints={[
          "Nước dùng: Xương ống bò ninh 12 giờ, hớt bọt liên tục để giữ trong",
          "Gia vị chính: Hoa hồi, quế chi, thảo quả, gừng nướng, hành nướng",
          "Bánh phở: Tráng mỏng từ bột gạo, cắt sợi vừa, không dùng phở khô",
          "Thịt bò tái: Thái lát mỏng tang, chần nhanh trong nước dùng sôi",
          "Rau ăn kèm: Hành lá, ngò gai — người Hà Nội không dùng giá đỗ và rau quế",
          "Gia vị bàn: Chỉ có ớt tươi, chanh, tiêu — tuyệt đối không có tương đen",
        ]}
        images={{
          main: {
            src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200&q=85",
            alt: "Bát phở bò Hà Nội truyền thống với thịt bò tái, hành lá và nước dùng trong vắt",
          },
          secondary: [
            {
              src: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=600&q=80",
              alt: "Nguyên liệu tươi cho phở bò — thịt bò, rau thơm, gia vị",
            },
            {
              src: "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=600&q=80",
              alt: "Nước dùng phở trong vắt đang sôi trên bếp",
            },
          ],
        }}
        stats={[
          { value: "12h", label: "Ninh xương" },
          { value: "100+", label: "Năm lịch sử" },
          { value: "5", label: "Gia vị chính" },
        ]}
      />

      {/* Decorative divider */}
      <div className="section-container">
        <div className="hr-gold" />
      </div>

      {/* Section 3b: Trà Sen Tây Hồ & Bánh Cốm */}
      <ParallaxSection
        overline="Tinh hoa #2"
        title="Trà Sen Tây Hồ &"
        titleHighlight="Bánh Cốm"
        paragraphs={[
          "Trà sen Tây Hồ — thức uống quý phái bậc nhất của Hà Nội xưa, được các nghệ nhân làng Quảng An gìn giữ qua hàng trăm năm. Mỗi cân trà ướp cần tới 1.400 bông sen hái vào lúc rạng đông, khi nhụy hoa vẫn còn đọng sương mai, đảm bảo hương thơm tinh khiết nhất.",
          "Bánh cốm — viên ngọc xanh của mùa thu Hà Nội, gắn liền với làng Vòng (nay thuộc quận Cầu Giấy). Mỗi chiếc bánh được làm từ cốm non giã nhuyễn, nhân đậu xanh ngọt dịu bọc trong lá chuối xanh thẫm. Bánh cốm là lễ vật không thể thiếu trong mâm lễ ăn hỏi của người Hà Nội.",
          "Trong văn hóa Hà Nội, trà sen và bánh cốm thường đi cùng nhau — một sự kết hợp hoàn hảo giữa vị chát thanh của trà và vị ngọt dịu của bánh, giữa cái nóng ấm của nước trà và cái mát lành của cốm non. Đây là biểu tượng của sự thanh lịch và tinh tế người Tràng An.",
        ]}
        bulletPoints={[
          "1.400 bông sen cho mỗi kg trà — hái tay lúc 4–5 giờ sáng",
          "Quy trình 7 lần ướp, 7 lần sấy — kéo dài hơn 20 ngày",
          "Chỉ dùng sen Hồ Tây — giống sen bách diệp (trăm cánh) đặc hữu",
          "Cốm làng Vòng — thu hoạch từ lúa nếp non, giã bằng chày gỗ truyền thống",
          "Bánh cốm Hàng Than — thương hiệu gia truyền hơn 100 năm tuổi",
          "Trà sen pha trong ấm đất Bát Tràng, uống bằng chén hạt mít",
        ]}
        images={{
          main: {
            src: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=1200&q=85",
            alt: "Trà sen Tây Hồ được pha trong ấm đất Bát Tràng truyền thống",
          },
          secondary: [
            {
              src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
              alt: "Nghi thức pha trà sen truyền thống Hà Nội",
            },
            {
              src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
              alt: "Bánh cốm xanh truyền thống Hà Nội bọc lá chuối",
            },
          ],
        }}
        stats={[
          { value: "1.400", label: "Bông sen / kg trà" },
          { value: "7×", label: "Lần ướp sấy" },
          { value: "300+", label: "Năm truyền thống" },
        ]}
      />

      {/* Section 4: Thách thức & Bảo tồn */}
      <TextReveal />

      <Footer />
    </main>
  );
}
