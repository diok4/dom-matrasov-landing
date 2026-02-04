import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// IMAGES
import memory1 from "../assets/images/memory1.webp";
import memory2 from "../assets/images/memory2.jpg";
import memory3 from "../assets/images/memory3.jpg";
import memory4 from "../assets/images/memory4.avif";

import ortho1 from "../assets/images/ortopedik1.jpg";
import ortho2 from "../assets/images/ortopedik2.jpg";
import ortho3 from "../assets/images/ortopedik3.webp";
import ortho4 from "../assets/images/ortopedik4.jpg";

import kids1 from "../assets/images/detskiy1.jpg";
import kids2 from "../assets/images/detskiy2.jpg";
import kids3 from "../assets/images/detskiy3.jpg";
import kids4 from "../assets/images/detskiy4.jpg";

// DATA
const products = {
  memory: [
    { id: 1, key: "memory1", img: memory1, price: "2 100 000" },
    { id: 2, key: "memory2", img: memory2, price: "2 350 000" },
    { id: 3, key: "memory3", img: memory3, price: "2 500 000" },
    { id: 4, key: "memory4", img: memory4, price: "3 000 000" }
  ],
  orthopedic: [
    { id: 5, key: "ortho1", img: ortho1, price: "1 900 000" },
    { id: 6, key: "ortho2", img: ortho2, price: "2 400 000" },
    { id: 7, key: "ortho3", img: ortho3, price: "2 150 000" },
    { id: 8, key: "ortho4", img: ortho4, price: "2 900 000" }
  ],
  kids: [
    { id: 9, key: "kids1", img: kids1, price: "1 200 000" },
    { id: 10, key: "kids2", img: kids2, price: "1 350 000" },
    { id: 11, key: "kids3", img: kids3, price: "1 500 000" },
    { id: 12, key: "kids4", img: kids4, price: "1 800 000" }
  ]
};

// 🔥 ANIMATION VARIANT
const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut"
    }
  })
};

export default function Products() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="products"
      className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        {t("products.title")}
      </h2>

      {Object.entries(products).map(([category, list]) => (
        <div key={category} className="mb-20">
          <h3 className="text-2xl font-bold max-w-[1400px] mx-auto mb-6">
            {t(`products.${category}`)}
          </h3>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg
                           border border-gray-100 dark:border-gray-700
                           overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-48 w-full object-cover hover:scale-105 transition duration-300"
                />

                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">
                    {t(`products.${item.key}.name`)}
                  </h4>

                  <p className="text-sm text-gray-600 dark:text-gray-300 h-12 overflow-hidden">
                    {t(`products.${item.key}.desc`).slice(0, 60)}...
                  </p>

                  <p className="text-xl font-bold text-primary mt-2">
                    {item.price} сум
                  </p>

                  <button
                    onClick={() => setSelected(item)}
                    className="mt-4 w-full bg-primary text-white py-3 rounded-xl
                               font-semibold hover:bg-primary/80 transition"
                  >
                    {t("card.details")}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {selected && <Modal product={selected} close={() => setSelected(null)} />}
    </section>
  );
}

function Modal({ product, close }) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl max-w-lg w-full relative"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-3xl text-gray-500"
        >
          ✕
        </button>

        <img
          src={product.img}
          className="h-64 w-full object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold mb-3">
          {t(`products.${product.key}.name`)}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-5">
          {t(`products.${product.key}.modalText`)}
        </p>

        <a
          href="https://t.me/Visco_admin"
          target="_blank"
          className="block bg-primary text-white text-center py-3 rounded-xl font-semibold"
        >
          {t(`products.${product.key}.btn`)}
        </a>
      </motion.div>
    </motion.div>
  );
}
