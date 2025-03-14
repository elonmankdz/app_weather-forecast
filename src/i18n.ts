import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import english from "./locales/english.json";
import vietnamese from "./locales/vietnamese.json";

const languageResources: any = {
	vi: { translation: vietnamese },
	en: { translation: english },
};

const locales = Localization.getLocales();

const fallbackLanguage = "en";
const languageTag =
	locales.find((locale: any) => languageResources[locale.languageCode])?.languageCode ||
	fallbackLanguage;

i18n.use(initReactI18next).init({
	resources: languageResources,
	lng: languageTag,
	fallbackLng: fallbackLanguage,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
