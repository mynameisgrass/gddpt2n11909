import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Văn hóa Ẩm thực Hà Nội — Tinh hoa ẩm thực ngàn năm",
  description:
    "Khám phá nét đẹp văn hóa ẩm thực Hà Nội qua hành trình từ phở bò, trà sen Tây Hồ đến bánh cốm — tinh hoa của người Tràng An. Dự án nghiên cứu văn hóa ẩm thực Việt Nam.",
  keywords: [
    "ẩm thực Hà Nội",
    "phở bò",
    "trà sen Tây Hồ",
    "bánh cốm",
    "văn hóa ẩm thực Việt Nam",
    "Tràng An",
    "Hanoi cuisine",
    "Vietnamese food culture",
  ],
  openGraph: {
    title: "Văn hóa Ẩm thực Hà Nội",
    description:
      "Khám phá tinh hoa ẩm thực ngàn năm của đất Tràng An — phở bò, trà sen, bánh cốm và hơn thế nữa.",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Văn hóa Ẩm thực Hà Nội",
    description:
      "Khám phá tinh hoa ẩm thực ngàn năm của đất Tràng An.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
