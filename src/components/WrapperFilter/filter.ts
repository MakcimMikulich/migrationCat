import { ICard } from "@/db/cardsProducts.data";
import type { Params } from "../MultiFilter/types";

type TFilterArr = ICard[];

type TElemParams = {
	[key: string]: boolean;
};

const filter = (arr: TFilterArr, params: Params): TFilterArr => {
	let filteredArr = filterByGender(arr, params.Gender);

	filteredArr = filterByColor(filteredArr, params.Color);
	filteredArr = filterByBreed(filteredArr, params.Breed);

	return filteredArr;
};

const checkActiveParams = (params: TElemParams) => {
	const arr = Object.values(params);

	return arr.includes(true);
};

const filterByGender = (
	baseArr: TFilterArr,
	elParams: TElemParams
): TFilterArr => {
	if (!checkActiveParams(elParams)) {
		return baseArr;
	}

	const activeFilters = Object.entries(elParams)
		.filter(([_, isActive]) => isActive)
		.map(([key]) => key);

	console.log(activeFilters);

	// Фильтруем массив
	return baseArr.filter((item) => {
		// Проверяем, есть ли значение Gender в dogInfo
		return (
			item.dogInfo &&
			item.dogInfo.some(
				(info) => info.field === "Gender" && activeFilters.includes(info.value)
			)
		);
	});
};

const filterByColor = (
	baseArr: TFilterArr,
	elParams: TElemParams
): TFilterArr => {
	// Если нет активных параметров, возвращаем исходный массив
	if (!checkActiveParams(elParams)) {
		return baseArr;
	}

	// Получаем список активных цветов
	const activeFilters = Object.entries(elParams)
		.filter(([_, isActive]) => isActive)
		.map(([key]) => key);

	console.log(activeFilters);

	// Фильтруем массив по цвету
	return baseArr.filter((item) => {
		console.log(item);

		return (
			item.dogInfo &&
			item.dogInfo.some(
				(info) =>
					info.field === "Color" &&
					activeFilters.some((color) => info.value.includes(color)) // Поддержка нескольких цветов
			)
		);
	});
};

const filterByBreed = (
	baseArr: TFilterArr,
	elParams: TElemParams
): TFilterArr => {
	// Если нет активных параметров, возвращаем исходный массив
	if (!checkActiveParams(elParams)) {
		return baseArr;
	}

	// Получаем список активных пород
	const activeFilters = Object.entries(elParams)
		.filter(([_, isActive]) => isActive)
		.map(([key]) => key);

	// Фильтруем массив по породе
	return baseArr.filter((item) => {
		return (
			item.dogInfo &&
			item.dogInfo.some(
				(info) => info.field === "Size" && activeFilters.includes(info.value)
			)
		);
	});
};

export { filter };
