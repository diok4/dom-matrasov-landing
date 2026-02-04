import { useTranslation } from "react-i18next";
import { LuFeather, LuLayers, LuCheck } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Card = ({ icon, title, text, list }) => (
  <motion.div
    className="bg-white/5 p-6 rounded-2xl space-y-3 hover:scale-[1.03] transition-transform shadow-lg"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 text-white/80">
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-white/80 text-sm">{text}</p>
    {list && (
      <ul className="list-disc pl-5 text-white/80 space-y-1">
        {list.map((item, idx) => (
          <li key={idx}>
            <BsCheckCircle className="inline mr-2 text-blue-400" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default function HowToChoose() {
  const { t } = useTranslation();

  const problems = t("choose.problems", { returnObjects: true }) || [];
  const springList = t("choose.spring.list", { returnObjects: true }) || [];
  const fillers = t("choose.fillers", { returnObjects: true }) || [];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[#0d1b2a] to-[#132a44] text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* HERO */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {t("choose.title")}
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            {t("choose.subtitle")}
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80"
          alt="Матрас выбор"
          className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
          loading="lazy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        {/* WHY IMPORTANT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">{t("choose.whyTitle")}</h2>
            <p className="text-white/80">{t("choose.whyText")}</p>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              {problems.map((p, i) => (
                <li key={i}>
                  <BsCheckCircle className="inline mr-2 text-blue-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg"
            alt="Здоровый сон"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* TYPES */}
        <div className="space-y-10">
          <h2 className="text-2xl font-semibold text-center">
            {t("choose.typesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card
              icon={<LuFeather />}
              title={t("choose.spring.title")}
              text={t("choose.spring.text")}
              list={springList}
            />
            <Card
              icon={<LuLayers />}
              title={t("choose.nospring.title")}
              text={t("choose.nospring.text")}
            />
          </div>
        </div>

        {/* FIRMNESS */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">
            {t("choose.firmnessTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              icon={<LuFeather />}
              title={t("choose.soft.title")}
              text={t("choose.soft.text")}
            />
            <Card
              icon={<LuLayers />}
              title={t("choose.medium.title")}
              text={t("choose.medium.text")}
            />
            <Card
              icon={<LuCheck />}
              title={t("choose.hard.title")}
              text={t("choose.hard.text")}
            />
          </div>
        </div>

        {/* FILLERS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://www.latexforless.com/cdn/shop/articles/mattress_image_25_600x.jpg?v=1701363443"
            alt="Наполнители"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {t("choose.fillersTitle")}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-white/80">
              {fillers.map((f, i) => (
                <li key={i}>
                  <BsCheckCircle className="inline mr-2 text-blue-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center bg-white/5 rounded-2xl p-10 space-y-6 hover:scale-[1.02] transition-transform"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold">{t("choose.ctaTitle")}</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t("choose.ctaText")}
          </p>
          <a
            href="https://t.me/Visco_admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-[#0d1b2a] font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            {t("choose.ctaBtn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
