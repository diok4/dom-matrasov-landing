"use client";
import { Truck, Clock, Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import HeroBg from "../assets/images/fon3.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* 🔥 HERO BACKGROUND */}
      <div
        className="relative flex flex-col justify-center items-center text-center min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {/* ✅ DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        {/* ✅ CONTENT */}
        <div className="relative z-10 flex flex-col gap-6 max-w-5xl px-4">
          {/* ✅ H1 — chapdan */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif leading-tight tracking-tight"
          >
            {t("hero.title")}
          </motion.h1>

          {/* ✅ P — o‘ngdan */}
          <motion.p
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* ✅ BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* chapdan button */}
            <motion.button
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 h-12 rounded-xl bg-primary text-white font-semibold shadow-lg
              hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              {t("hero.catalog")}
            </motion.button>

            {/* o‘ngdan button */}
            <motion.a
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              href="https://t.me/Visco_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 h-12 rounded-xl font-semibold text-white flex items-center justify-center
              bg-white/20 backdrop-blur-md border border-white/30
              hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              {t("hero.measure")}
            </motion.a>
          </div>
        </div>
      </div>

      {/* ✅ FEATURES (pastga tushganda chiqadi) */}
      <div className="bg-background-light py-8 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              title: t("hero.fastTitle"),
              desc: t("hero.fastDesc"),
            },
            {
              icon: Truck,
              title: t("hero.deliveryTitle"),
              desc: t("hero.deliveryDesc"),
            },
            {
              icon: Layers,
              title: t("hero.customTitle"),
              desc: t("hero.customDesc"),
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <Icon className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
