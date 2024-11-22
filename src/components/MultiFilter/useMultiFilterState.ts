"use client";

import { useState } from "react";
import { Params } from "./types";
import { filters } from "./MultiFilter.data";

export const useMultiFilterState = () => {
	const [params, setParams] = useState<Params>(() => {
		return filters.reduce((acc, filter) => {
			filter.fields.forEach((field) => {
				acc[field.name] = false;
			});
			return acc;
		}, {} as Params);
	});

	const handlerCheckBox = (name: string, checked: boolean) => {
		setParams((prevState) => {
			return {
				...prevState,
				[name]: checked,
			};
		});
	};

	return { params, handlerCheckBox };
};
