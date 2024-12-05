import { getTranslations } from "@/utils/getTranslations";

export default async function LangLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	const { lang } = await params;

	const translations = await getTranslations(lang);

	console.log(translations);

	return (
		<html lang={lang}>
			<body>
				<header>
					<nav>
						<a href="/en/home">English</a>
						<a href="/ru/home">Русский</a>
						<a href="/china/home">中文</a>
					</nav>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
