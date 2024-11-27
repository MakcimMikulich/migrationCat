"use client";

import { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";

export const useWindowSize = () => {
	// Устанавливаем значение по умолчанию для server-side rendering
	const [windowSize, setWindowSize] = useState(() => {
		return typeof window !== "undefined" ? window.innerWidth : 1024; // Выберите значение по умолчанию, например, 1024 (для десктопа)
	});

	useEffect(() => {
		// Прекращаем выполнение, если выполняется на сервере
		if (typeof window === "undefined") {
			return;
		}

		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		// Устанавливаем начальное значение и добавляем обработчик событий
		handleResize();
		const debounceHandler = debounce(handleResize);
		window.addEventListener("resize", debounceHandler);

		return () => {
			window.removeEventListener("resize", debounceHandler);
		};
	}, []);

	return windowSize;
};
