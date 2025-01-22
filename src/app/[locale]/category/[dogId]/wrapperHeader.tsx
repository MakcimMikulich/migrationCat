"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components";
import { useWindowSize } from "@/hooks";

export const WrapperHeader = () => {
	const windowSize = useWindowSize();
	const mobileSize = 992;

	const [isClient, setIsClient] = useState(false); // Флаг для определения клиента
	const [visibleHeader, setVisibleHeader] = useState(false);

	useEffect(() => {
		setIsClient(true); // Установить, что компонент отрисовывается на клиенте
		setVisibleHeader(windowSize > mobileSize);
	}, [windowSize]);

	if (!isClient || !visibleHeader) {
		return null; // Отложить рендеринг до завершения инициализации
	}

	return <Header />;
};
