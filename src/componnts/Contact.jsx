"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import telegram from "../assets/images/telegram.jpg";
import instagram from "../assets/images/instagram.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleTelegramSend = (e) => {
    e.preventDefault();
    const text = `Ism: ${name}\nTelefon: ${phone}\nXabar: ${message}`;
    window.open(
      `https://t.me/Visco_admin?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-serif text-center mb-14 text-gray-900 dark:text-white"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Info + Map */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md flex flex-col gap-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t("contact.infoTitle")}
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-3">
                  <MapPin className="text-primary w-6 h-6" /> {t("contact.address")}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-primary w-6 h-6" /> +998 98 880 80 10
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-primary w-6 h-6" /> domatrasov@gmail.com
                </p>
                <div className="flex items-center">
                  <a target="_blank" href="https://t.me/matras">
                    <img className="rounded-full w-8 h-8" src={telegram} alt="" />
                  </a>
                  <a
                    className="underline hover:text-primary ml-2"
                    href="https://t.me/matras"
                    target="_blank"
                  >
                    @matras
                  </a>
                </div>
                <div className="flex items-center">
                  <a target="_blank" href="https://instagram.com/dom.matrasov">
                    <img className="rounded-full w-8 h-7" src={instagram} alt="" />
                  </a>
                  <a
                    className="underline hover:text-primary ml-2"
                    href="https://instagram.com/dom.matrasov"
                    target="_blank"
                  >
                    @dom.matrasov
                  </a>
                </div>
              </div>
            </div>

<div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
  <div
    className="relative h-80 w-full flex items-center justify-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1200&auto=format&fit=crop)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 text-center">
      <h3 className="text-white text-2xl font-bold mb-4">
        Bizning manzil
      </h3>

      <div className="flex gap-4 justify-center">
        <a
          href="https://maps.app.goo.gl/D5e3HwteToBmB18e8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Google Maps
        </a>

        <a
          href="https://yandex.uz/maps/-/CLCdiP0r"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Yandex Maps
        </a>
      </div>
    </div>
  </div>
</div>
    
          </motion.div>

          {/* RIGHT: Telegram Form */}
          <motion.form
            onSubmit={handleTelegramSend}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.name")}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                {t("contact.message")}
              </label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-all shadow-md"
            >
              {t("contact.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
