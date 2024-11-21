"use client";
import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
	console.log(value);

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	console.log(debouncedValue);

	return debouncedValue;
};
