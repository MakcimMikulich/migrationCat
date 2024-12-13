import { getTranslations } from "@/utils/getTranslations";
import ClientProvider from "@/utils/ClientProvider";
import Link from "next/link";

export default async function LangLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	const { lang } = await params;

	const translations = await getTranslations(lang);

	return (
		<html lang={lang}>
			<body>
				<header>
					<nav>
						<Link href="/en/home">English</Link>
						<Link href="/ru/home">Русский</Link>
						<Link href="/china/home">中文</Link>
					</nav>
				</header>
				<main>
					{/* Оборачиваем детей в клиентский провайдер */}
					<ClientProvider translations={translations}>
						{children}
					</ClientProvider>
				</main>
			</body>
		</html>
	);
}
