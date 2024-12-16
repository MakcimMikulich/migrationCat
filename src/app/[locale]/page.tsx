import { redirect } from "next/navigation";

export default async function RootPage({
	params,
}: {
	params: { locale: string };
}) {
	// Проверяем язык и делаем редирект
	const { locale } = await params;

	console.log(locale, "lang");

	// Редиректим на динамическую страницу с учётом языка
	redirect(`/${locale}/home`);
}
