import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/translations/en.json";
import ru from "@/translations/ru.json";
import uz from "@/translations/uz.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
      uz: {
        translation: uz,
      },
    },
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
