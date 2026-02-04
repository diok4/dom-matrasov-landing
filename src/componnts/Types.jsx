"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import AnotomicImg from "../assets/images/anatomic.webp";
import OrthoImg from "../assets/images/ortho.webp";
import SprlessImg from "../assets/images/sprless.webp";
import KidsImg from "../assets/images/kids.jpg";

const cards = [
  {
    img: AnotomicImg,
    title: "types.anatomic_title",
    desc: "types.anatomic_desc",
  },
  {
    img: OrthoImg,
    title: "types.ortho_title",
    desc: "types.ortho_desc",
  },
  {
    img: SprlessImg,
    title: "types.sprless_title",
    desc: "types.sprless_desc",
  },
  {
    img: KidsImg,
    title: "types.kids_title",
    desc: "types.kids_desc",
  },
];

export default function Types() {
  const { t } = useTranslation();

  return (
    <section id="types" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-serif text-center mb-12"
        >
          {t("types_title")}
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl
                         shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold">{t(item.title)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t(item.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
