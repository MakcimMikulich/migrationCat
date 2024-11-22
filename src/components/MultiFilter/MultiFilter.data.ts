import { Filter } from "./types";

export const filters: Filter[] = [
	{
		header: "Gender",
		fields: [
			{
				name: "Male",
				color: null,
			},
			{
				name: "Female",
				color: null,
			},
		],
	},
	{
		header: "Color",
		fields: [
			{
				name: "Red",
				color: "#FF564F",
			},
			{
				name: "Apricot",
				color: "#FFB672",
			},
			{
				name: "Black",
				color: "#242B33",
			},
			{
				name: "Black & White",
				color:
					"linear-gradient(90deg, #242B33 0%, #242B33 52.59%, #D7D7D7 52.6%, #D2D2D2 100%)",
			},
			{
				name: "Silver",
				color: "#CECECE",
			},
			{
				name: "Tan",
				color: "#FFF7CE",
			},
		],
	},
	{
		header: "Breed",
		fields: [
			{
				name: "Small",
				color: null,
			},
			{
				name: "Medium",
				color: null,
			},
			{
				name: "Large",
				color: null,
			},
		],
	},
];
