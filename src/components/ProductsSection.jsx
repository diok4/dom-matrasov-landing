import Image from "next/image";
import { content } from "@/lib/content";

import memory1 from "@/assets/images/memory1.webp";
import memory2 from "@/assets/images/memory2.jpg";
import memory3 from "@/assets/images/memory3.jpg";
import memory4 from "@/assets/images/memory4.avif";

import ortho1 from "@/assets/images/ortopedik1.jpg";
import ortho2 from "@/assets/images/ortopedik2.jpg";
import ortho3 from "@/assets/images/ortopedik3.webp";
import ortho4 from "@/assets/images/ortopedik4.jpg";

import kids1 from "@/assets/images/detskiy1.jpg";
import kids2 from "@/assets/images/detskiy2.jpg";
import kids3 from "@/assets/images/detskiy3.jpg";
import kids4 from "@/assets/images/detskiy4.jpg";

const productGroups = [
  {
    title: content.products.memory,
    items: [
      { key: "memory1", img: memory1, price: "2 100 000" },
      { key: "memory2", img: memory2, price: "2 350 000" },
      { key: "memory3", img: memory3, price: "2 500 000" },
      { key: "memory4", img: memory4, price: "3 000 000" },
    ],
  },
  {
    title: content.products.orthopedic,
    items: [
      { key: "ortho1", img: ortho1, price: "1 900 000" },
      { key: "ortho2", img: ortho2, price: "2 400 000" },
      { key: "ortho3", img: ortho3, price: "2 150 000" },
      { key: "ortho4", img: ortho4, price: "2 900 000" },
    ],
  },
  {
    title: content.products.kids,
    items: [
      { key: "kids1", img: kids1, price: "1 200 000" },
      { key: "kids2", img: kids2, price: "1 350 000" },
      { key: "kids3", img: kids3, price: "1 500 000" },
      { key: "kids4", img: kids4, price: "1 800 000" },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Каталог
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {content.products.title}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Подберем матрас по жесткости и размеру.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {productGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-2xl font-semibold text-slate-900">
                {group.title}
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item) => (
                  <article
                    key={item.key}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.img}
                        alt={content.products[item.key].name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-slate-900">
                        {content.products[item.key].name}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600">
                        {content.products[item.key].desc}
                      </p>
                      <p className="mt-4 text-lg font-semibold text-primary">
                        {item.price} сум
                      </p>
                      <a
                        href="#contact"
                        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Купить
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
