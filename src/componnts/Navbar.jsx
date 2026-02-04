import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(i18n.language?.toUpperCase() || "RU");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLang(i18n.language?.toUpperCase() || "RU");
  }, [i18n.language]);

  const changeLang = (next) => {
    setLang(next.toUpperCase());
    i18n.changeLanguage(next.toLowerCase());
    setMenuOpen(false);
  };

  const navLinks = [
    { name: t("nav.home"), to: "hero", scroll: true },
    { name: t("nav.about"), to: "about", scroll: true },
    { name: t("nav.contacts"), to: "contact", scroll: true },
    { name: t("nav.choose"), to: "/how-to-choose", scroll: false },
  ];

  const onNavClick = (link) => {
    if (link.scroll) {
      if (location.pathname === "/") {
        const section = document.getElementById(link.to);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const section = document.getElementById(link.to);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    } else {
      navigate(link.to);
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d1b2a]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Дом Матрасов"
              className="w-11 h-11 md:w-14 md:h-14 object-contain rounded-md"
            />
          </Link>
          <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-semibold text-white tracking-wide">
              <Link to={"/"}>Дом Матрасов</Link>
            </h1>
          </div>
        </div>

        <ul className="hidden lg:flex items-center gap-10 text-white/90 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => onNavClick(link)}
                className="relative group transition text-white"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 bg-white text-[#0d1b2a] font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            {t("nav.order", "Заказать")}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => changeLang("ru")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                lang === "RU"
                  ? "bg-white text-[#0d1b2a]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => changeLang("uz")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                lang === "UZ"
                  ? "bg-white text-[#0d1b2a]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              UZ
            </button>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md text-white border border-white/20"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-[#0d1b2a] text-white transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => onNavClick(link)}
                className="block py-2 hover:text-blue-300 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-block px-6 py-2 bg-white text-[#0d1b2a] font-semibold rounded-full shadow-md"
          >
            {t("nav.order", "Заказать")}
          </a>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => changeLang("ru")}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                lang === "RU"
                  ? "bg-white text-[#0d1b2a]"
                  : "bg-white/10 text-white"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => changeLang("uz")}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                lang === "UZ"
                  ? "bg-white text-[#0d1b2a]"
                  : "bg-white/10 text-white"
              }`}
            >
              UZ
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
}
