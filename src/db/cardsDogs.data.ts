import dog8 from "@/assets/Card/image2.png";
import dog1 from "@/assets/Card/image2.png";
import dog2 from "@/assets/Card/image2.png";
import dog3 from "@/assets/Card/image2.png";
import dog4 from "@/assets/Card/image2.png";
import dog5 from "@/assets/Card/image2.png";
import dog6 from "@/assets/Card/image2.png";
import dog7 from "@/assets/Card/image2.png";
import { ICard } from "./cardsProducts.data";

export interface dogInfoType {
	Gene?: string;
	Age?: string;
}

export interface aboutDog {
	field: string;
	value: string;
}

export const ourDogs: ICard[] = [
	{
		image: dog1,
		title: "name name",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000078" },
			{ field: "Gender", value: "Female" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Small" },
			{ field: "Color", value: "Appricot & Tan" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (MKA)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "Vietnam" },
			{ field: "Published Date", value: "12-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Shih Tzu. \n  Good body structure. \n  With MKA cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog2,
		title: "MO102 - Poodle Tiny Sepia",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "4.000.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000079" },
			{ field: "Gender", value: "Male" },
			{ field: "Age", value: "3 Months" },
			{ field: "Size", value: "Medium" },
			{ field: "Color", value: "Black" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (AKC)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "USA" },
			{ field: "Published Date", value: "15-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Labrador. \n  Good body structure. \n  With AKC cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog3,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000080" },
			{ field: "Gender", value: "Male" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Large" },
			{ field: "Color", value: "Grey" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (AKC)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "USA" },
			{ field: "Published Date", value: "18-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Alaskan Malamute. \n  Good body structure. \n  With AKC cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog4,
		title: "MO502 - Poodle Tiny Yellow",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000081" },
			{ field: "Gender", value: "Female" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Small" },
			{ field: "Color", value: "Yellow" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (MKA)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "Vietnam" },
			{ field: "Published Date", value: "20-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Poodle. \n  Good body structure. \n  With MKA cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog5,
		title: "MO102 - Poodle Tiny Sepia",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "4.000.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000082" },
			{ field: "Gender", value: "Male" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Small" },
			{ field: "Color", value: "Sepia" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (MKA)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "Vietnam" },
			{ field: "Published Date", value: "22-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Poodle. \n  Good body structure. \n  With MKA cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog6,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000083" },
			{ field: "Gender", value: "Male" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Large" },
			{ field: "Color", value: "Grey" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (AKC)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "USA" },
			{ field: "Published Date", value: "25-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Alaskan Malamute. \n  Good body structure. \n  With AKC cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog7,
		title: "MO502 - Poodle Tiny Yellow",
		cardInfo: { Gene: "Female", Age: "02 months" },
		price: "3.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000084" },
			{ field: "Gender", value: "Female" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Small" },
			{ field: "Color", value: "Yellow" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (MKA)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "Vietnam" },
			{ field: "Published Date", value: "28-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Poodle. \n  Good body structure. \n  With MKA cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
	{
		image: dog8,
		title: "MO512 - Alaskan Malamute Grey",
		cardInfo: { Gene: "Male", Age: "02 months" },
		price: "8.900.000 VND",
		dogInfo: [
			{ field: "SKU", value: "#1000085" },
			{ field: "Gender", value: "Male" },
			{ field: "Age", value: "2 Months" },
			{ field: "Size", value: "Large" },
			{ field: "Color", value: "Grey" },
			{ field: "Vaccinated", value: "Yes" },
			{ field: "Dewormed", value: "Yes" },
			{ field: "Cert", value: "Yes (AKC)" },
			{ field: "Microchip", value: "Yes" },
			{ field: "Location", value: "USA" },
			{ field: "Published Date", value: "30-Oct-2022" },
			{
				field: "Additional Information",
				value:
					"Pure breed Alaskan Malamute. \n  Good body structure. \n  With AKC cert and Microchip. \n  Father from champion lineage.",
			},
		],
	},
];
