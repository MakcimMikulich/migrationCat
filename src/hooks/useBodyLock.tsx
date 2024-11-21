"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const useBodyLock = (
	initialState = false
): [boolean, Dispatch<SetStateAction<boolean>>] => {
	const [isActive, setIsActive] = useState(initialState);

	useEffect(() => {
		if (isActive) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
		}

		return () => {
			document.body.classList.remove("lock");
		};
	}, [isActive]);

	return [isActive, setIsActive];
};
