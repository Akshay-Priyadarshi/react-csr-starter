import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/translations/en.json";
import hi from "@/translations/hi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const i18nProps = i18n;
