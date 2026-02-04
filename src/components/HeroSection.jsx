import Image from "next/image";
import { content } from "@/lib/content";
import heroImage from "@/assets/images/herorr.jpg";

const features = [
  {
    title: content.hero.fastTitle,
    desc: content.hero.fastDesc,
  },
  {
    title: content.hero.deliveryTitle,
    desc: content.hero.deliveryDesc,
  },
  {
    title: content.hero.customTitle,
    desc: content.hero.customDesc,
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 pt-24">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Дом Матрасов"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            На рынке с 2005 года
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl animate-fade-in-up">
            {content.hero.title}
          </h1>
          <p className="mt-6 text-base text-white/80 sm:text-lg animate-fade-in-up animate-delay-150">
            {content.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#products"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              {content.hero.catalog}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/70"
            >
              {content.hero.measure}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-2xl backdrop-blur animate-fade-in-up animate-delay-450">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Ваш комфорт
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Матрас под ваш сон
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Подберем жесткость и высоту. Доставка по городу.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-xs text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
