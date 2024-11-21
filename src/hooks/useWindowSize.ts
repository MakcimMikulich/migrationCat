"use client";
import { useState, useEffect } from "react";
import { debounce } from "../utils/helpers";

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};
		const debouncehandler = debounce(handleResize);

		window.addEventListener("resize", debouncehandler);

		return () => {
			window.removeEventListener("resize", debouncehandler);
		};
	}, []);

	return windowSize;
};
