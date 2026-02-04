"use client";

import { useTranslation } from "react-i18next";
import { Globe, Rocket, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Globe,
      title: t("why.features.materials.title"),
      desc: t("why.features.materials.desc"),
    },
    {
      icon: Rocket,
      title: t("why.features.fast.title"),
      desc: t("why.features.fast.desc"),
    },
    {
      icon: Truck,
      title: t("why.features.delivery.title"),
      desc: t("why.features.delivery.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("why.features.warranty.title"),
      desc: t("why.features.warranty.desc"),
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US */}
      <section id="whychooseus" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-serif text-center mb-12"
          >
            {t("why.title")}
          </motion.h2>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center gap-4 p-6
                             rounded-2xl bg-white dark:bg-gray-800
                             shadow-md hover:shadow-lg
                             transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SHOWROOM */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8
                   bg-cover bg-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5f]/80 via-[#1a3a5f]/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
            {t("why.showroom.title")}
          </h2>

          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            {t("why.showroom.desc")}
          </p>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/D5e3HwteToBmB18e8",
                "_blank"
              )
            }
            className="mt-8 px-8 py-3 border-2 border-white
                       text-primary font-semibold rounded-full shadow-lg
                       hover:bg-primary hover:text-white
                       transition-all duration-300
                       hover:scale-105 active:scale-95"
          >
            {t("why.showroom.button")}
          </motion.button>
        </motion.div>
      </motion.section>
    </>
  );
}
