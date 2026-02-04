import { content } from "@/lib/content";

export default function MapSection() {
  return (
    <section id="map" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <iframe
              title="Карта Дом Матрасов"
              src="https://www.google.com/maps?q=Mirabad%2033%2C%20Tashkent&output=embed"
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Где мы находимся
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              {content.contact.infoTitle}
            </h3>
            <p className="mt-4 text-sm text-slate-600">{content.brand.address}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-slate-700">
              <a href={content.brand.mapLink} target="_blank" rel="noreferrer">
                Открыть в Google Maps →
              </a>
              <a
                href={content.brand.yandexMapLink}
                target="_blank"
                rel="noreferrer"
              >
                Открыть в Yandex Maps →
              </a>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
              В шоуруме можно протестировать модели.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
