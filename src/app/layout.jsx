import "./globals.css";

export const metadata = {
  title: "Дом Матрасов — ортопедические и анатомические матрасы",
  description:
    "Дом Матрасов в Ташкенте: ортопедические и анатомические матрасы, индивидуальный пошив, гарантия 10–20 лет, бесплатная доставка.",
  keywords: [
    "матрасы",
    "ортопедические матрасы",
    "анатомические матрасы",
    "матрасы Ташкент",
    "Дом Матрасов",
  ],
  openGraph: {
    title: "Дом Матрасов — комфортный сон каждый день",
    description:
      "Производим матрасы из импортных материалов. Быстрое изготовление и бесплатная доставка.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Дом Матрасов — комфортный сон каждый день",
    description:
      "Производим матрасы из импортных материалов. Быстрое изготовление и бесплатная доставка.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
