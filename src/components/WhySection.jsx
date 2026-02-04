import { Globe, Rocket, ShieldCheck, Truck } from "lucide-react";
import { content } from "@/lib/content";

const features = [
  {
    icon: Globe,
    title: content.why.features.materials.title,
    desc: content.why.features.materials.desc,
  },
  {
    icon: Rocket,
    title: content.why.features.fast.title,
    desc: content.why.features.fast.desc,
  },
  {
    icon: Truck,
    title: content.why.features.delivery.title,
    desc: content.why.features.delivery.desc,
  },
  {
    icon: ShieldCheck,
    title: content.why.features.warranty.title,
    desc: content.why.features.warranty.desc,
  },
];

export default function WhySection() {
  return (
    <section id="why" className="bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Почему мы
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {content.why.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            {content.why.showroom.desc}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <Icon className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm text-white/70">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">{content.why.showroom.title}</h3>
              <p className="mt-3 text-sm text-white/70">
                {content.why.showroom.desc}
              </p>
            </div>
            <a
              href={content.brand.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            >
              {content.why.showroom.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
