import { redirect } from "next/navigation";

export default function RootPage({ params }: { params: { lang: string } }) {
	// Проверяем язык и делаем редирект
	const { lang } = params;

	// Редиректим на динамическую страницу с учётом языка
	redirect(`/${lang}/home`);
}
