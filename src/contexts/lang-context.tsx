import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n"; // Initialize i18n
import { LANGUAGE } from "@/enum";

export type LangContextType = {
	t: (key: string) => any;
	i18n: any;
	currentLanguage: LANGUAGE;
	onChangeLanguage: (lang: LANGUAGE) => void;
};

export const LangContext = createContext<LangContextType>({
	t: (key: string) => key,
	i18n: "",
	currentLanguage: LANGUAGE.VI,
	onChangeLanguage: () => {},
});

const LangContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { t, i18n } = useTranslation();

	function onChangeLanguage(lang: LANGUAGE) {
		i18n.changeLanguage(lang);
	}

	const currentLanguage = Object.values(LANGUAGE).includes(i18n.language as LANGUAGE)
		? (i18n.language as LANGUAGE)
		: LANGUAGE.VI;

	const value = {
		t,
		i18n,
		currentLanguage,
		onChangeLanguage,
	};

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangContextProvider;

export const useLangContext = () => useContext(LangContext);
