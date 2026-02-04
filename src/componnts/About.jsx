"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import matImg from "../assets/images/matrass.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
        
        {/* IMAGE – CHAPDAN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
          aria-label={t("about.imageAlt")}
        >
          <img
            className="rounded-xl shadow-lg"
            src={matImg}
            alt={t("about.imageAlt")}
          />
        </motion.div>

        {/* TEXT – O‘NGDAN */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 text-white md:w-1/2"
        >
          <h2 className="text-4xl md:text-3xl font-bold leading-tight tracking-tight font-serif">
            {t("about.title")}
          </h2>

          <p className="text-base font-normal leading-relaxed">
            {t("about.description")}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("types");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center min-w-[100px] max-w-[200px] h-12 px-6
                       bg-gradient-to-r from-blue-600 to-indigo-500
                       text-white font-bold text-base rounded-xl
                       shadow-lg hover:shadow-xl transition"
          >
            {t("about.button")}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
