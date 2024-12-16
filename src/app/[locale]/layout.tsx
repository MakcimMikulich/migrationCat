import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Footer } from "@/components";

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const { locale } = await params;
	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<main>
					<NextIntlClientProvider messages={messages}>
						{children}
					</NextIntlClientProvider>
				</main>
				<Footer />
			</body>
		</html>
	);
}
// return (
// 	<html lang={lang}>
// 		<body>
// 			<header>
// 				<nav>
// 					<Link href="/en/home">English</Link>
// 					<Link href="/ru/home">Русский</Link>
// 					<Link href="/china/home">中文</Link>
// 				</nav>
// 			</header>
// 			<main>
// 				{/* Оборачиваем детей в клиентский провайдер */}
// 				<ClientProvider translations={translations}>
// 					{children}
// 				</ClientProvider>
// 			</main>
// 			<Footer />
// 		</body>
// 	</html>
// );
