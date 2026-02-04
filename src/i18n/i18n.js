// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./ru.json";
import uz from "./uz.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: "ru", // dastlabki til
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
