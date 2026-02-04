"use client";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "uz" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <footer id="footer" className="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Brand info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{t("footer.title")}</h3>
          <p className="text-gray-400">{t("footer.subtitle")}</p>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://t.me/matras"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/dom.matrasov"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right side: Copyright + Language toggle */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>

          <button
            onClick={toggleLanguage}
            className="bg-primary px-4 py-1 rounded-lg text-white text-sm font-semibold hover:bg-opacity-90 transition"
          >
            {i18n.language === "ru" ? "UZ 🇺🇿" : "RU 🇷🇺"}
          </button>
        </div>
      </div>
    </footer>
  );
}
