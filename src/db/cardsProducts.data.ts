// import warmNest from '../../public/Card/dogs/warm-nest.png'
import warmNest from "../public/./Card/WarmNest.png";
import zealanda from "../public/Card/zealanda.png";
import reflex from "../public/./Card/reflex.png";
import omegaGold from "../public/./Card/omegaGold.png";
import cowBoy from "../public/Card/cowboy.png";
import ropeBall from "../public/Card/roleBall.png";
import headBand from "../public/Card/headband.png";
import petToy from "../public/Card/petToy.png";
import { aboutDog, dogInfoType } from "./cardsDogs.data.ts";

export interface ICard {
	image: string;
	title: string;
	cardInfo: productInfoType | dogInfoType;
	price: string;
	dogInfo?: aboutDog[];
	promotion?: string;
}

export interface productInfoType {
	Product?: string;
	Size?: string;
}

export const ourProduct: ICard[] = [
	{
		image: zealanda,
		title: "Reflex Plus Adult Cat Food Salmon",
		cardInfo: { Product: "Dog Food", Size: "385gm" },
		price: "140.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: reflex,
		title: "Reflex Plus Adult Cat Food Salmon",
		cardInfo: { Product: "Cat Food", Size: "1.5kg" },
		price: "165.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: ropeBall,
		title: "Cat scratching ball toy kitten sisal rope ball",
		cardInfo: { Product: "Toy" },
		price: "1.100.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: warmNest,
		title: "Cute Pet Cat Warm Nest",
		cardInfo: { Product: "Toy" },
		price: "410.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: omegaGold,
		title: "NaturVet Dog - Omega-Gold Plus Salmon Oil",
		cardInfo: { Product: "Dog Food", Size: "385gm" },
		price: "350.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: cowBoy,
		title: "Costumes Fashion Pet Clother Cowboy Rider",
		cardInfo: { Product: "Costume", Size: "1.5kg" },
		price: "500.000 VND",
		promotion: "Free Toy & Free Shaker",
	},
	{
		image: headBand,
		title: "Costumes Chicken Drumsti ck Headband",
		cardInfo: { Product: "Costume" },
		price: "400.000 VND",
		promotion: "Free Cat Food",
	},
	{
		image: petToy,
		title: "Plush Pet Toy",
		cardInfo: { Product: "Toy" },
		price: "250.000 VND",
		promotion: "Free Food & Shaker",
	},
];
