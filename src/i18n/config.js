import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";

const savedLanguage = localStorage.getItem("language") || "es";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations
    },
    es: {
      translation: esTranslations
    }
  },
  lng: savedLanguage,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
