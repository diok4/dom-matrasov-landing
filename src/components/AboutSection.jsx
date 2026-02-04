import Image from "next/image";
import { Globe, Rocket, ShieldCheck, Truck } from "lucide-react";
import { content } from "@/lib/content";
import aboutImage from "@/assets/images/matrass.jpg";

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

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            О компании
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {content.about.title}
          </h2>
          <p className="text-base text-slate-600">{content.about.description}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-sm font-semibold text-primary"
          >
            {content.about.button} →
          </a>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
          <Image
            src={aboutImage}
            alt={content.about.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
