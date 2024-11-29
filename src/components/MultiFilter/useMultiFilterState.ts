"use client";

import { useState } from "react";
import { Params } from "./types";
import { filters } from "./MultiFilter.data";

export const useMultiFilterState = () => {
	const [params, setParams] = useState<Params>(() => {
		const paramsAccumulator: Params = {};

		filters.forEach((category) => {
			const fieldOptions: Record<string, boolean> = {};

			category.fields.forEach((field) => {
				fieldOptions[field.name] = false;
			});

			paramsAccumulator[category.header] = fieldOptions;
		});

		return paramsAccumulator;
	});

	const handlerCheckBox = (header: string, name: string, checked: boolean) => {
		setParams((prevState) => {
			return {
				...prevState,
				[header]: {
					...prevState[header],
					[name]: checked,
				},
			};
		});
	};

	return { params, handlerCheckBox };
};
