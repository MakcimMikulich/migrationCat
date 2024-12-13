"use client";

import { createContext, useContext } from "react";

console.log("Creating TranslationContext");
const TranslationContext = createContext<Record<string, string>>({});
console.log("TranslationContext created:", TranslationContext);

function useTranslations() {
	const context = useContext(TranslationContext);

	console.log(context);

	if (!context) {
		throw new Error(
			"useTranslations must be used within a TranslationProvider"
		);
	}
	return context;
}

export { TranslationContext, useTranslations };
