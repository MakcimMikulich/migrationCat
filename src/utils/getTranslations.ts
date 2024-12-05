import en from "@/app/locales/en.json";
import ru from "@/app/locales/ru.json";
import china from "@/app/locales/china.json";

const translationsMap: Record<string, Record<string, string>> = {
	en,
	ru,
	china,
};

/**
 * Возвращает переводы для указанного языка
 * @param lang Язык (например: "en", "ru", "china")
 * @returns Объект с переводами
 */
export function getTranslations(lang: string): Record<string, string> {
	return translationsMap[lang] || translationsMap["en"]; // Если язык не найден, возвращаем "en" как язык по умолчанию
}
