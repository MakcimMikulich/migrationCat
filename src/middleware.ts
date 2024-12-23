import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Создаем middleware с учетом конфигурации маршрутов
export default createMiddleware({
	...routing,
	localeDetection: false, // Отключаем автоматическое определение по заголовкам и cookies
});

export const config = {
	// Подключаем middleware для корневого маршрута и всех локалей
	matcher: ["/", "/(en|ru|zh)/:path*"],
};
