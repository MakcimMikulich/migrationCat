"use client";

import { TranslationContext } from "@/utils/TranslationContext";

export default function ClientProvider({
	translations,
	children,
}: {
	translations: Record<string, string>;
	children: React.ReactNode;
}) {
	return (
		<TranslationContext.Provider value={translations}>
			{children}
		</TranslationContext.Provider>
	);
}
