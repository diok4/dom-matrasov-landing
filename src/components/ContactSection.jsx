"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { content } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Контакты
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {content.contact.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              title="Карта Дом Матрасов"
              src="https://www.google.com/maps?q=Mirabad%2033%2C%20Tashkent&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                {content.contact.infoTitle}
              </h3>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  {content.brand.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  {content.brand.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  {content.brand.email}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={content.brand.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary"
                >
                  Открыть Google Maps →
                </a>
                <a
                  href={content.brand.yandexMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary"
                >
                  Открыть Yandex Maps →
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={content.brand.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <FaTelegramPlane className="text-primary" />
                  Telegram
                </a>
                <a
                  href={content.brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <FaInstagram className="text-primary" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Быстрый контакт
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Позвоните или напишите — отвечаем быстро.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  href={content.brand.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
                >
                  <FaTelegramPlane className="text-primary" />
                  Написать в Telegram
                </a>
                <a
                  href={content.brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
                >
                  <FaInstagram className="text-primary" />
                  Посмотреть Instagram
                </a>
                <a
                  href={`tel:${content.brand.phone}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  <Phone className="h-4 w-4" />
                  Позвонить {content.brand.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
