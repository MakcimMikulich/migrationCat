// hooks/useSelectedLanguage.ts
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

import enFlag from "@/assets/flags/en.svg";
import ruFlag from "@/assets/flags/ru.svg";
import zhFlag from "@/assets/flags/zh.svg";

const languages = [
	{ code: "en", label: "English", flag: enFlag.src },
	{ code: "ru", label: "Русский", flag: ruFlag.src },
	{ code: "zh", label: "中文", flag: zhFlag.src },
];

export const useSelectedLanguage = () => {
	const locale = useLocale();
	const [selectedLang, setSelectedLang] = useState(languages[0]);

	useEffect(() => {
		const currentLang = locale || languages[0].code;
		setSelectedLang(
			languages.find((lang) => lang.code === currentLang) || languages[0]
		);
	}, [locale]);

	return selectedLang;
};
