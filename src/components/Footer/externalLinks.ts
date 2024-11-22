import facebook from "@/assets/Footer/Facebook.svg";
import twitter from "@/assets/Footer/Twitter.svg";
import instagram from "@/assets/Footer/Instagram.svg";
import youtube from "@/assets/Footer/Youtube.svg";
import { StaticImageData } from "next/image";

interface LinkType {
	link: string;
	image: StaticImageData;
}

export const externalLinks: LinkType[] = [
	{ link: "https://www.facebook.com/", image: facebook },
	{ link: "https://twitter.com/", image: twitter },
	{ link: "https://www.instagram.com/", image: instagram },
	{ link: "https://www.youtube.com/", image: youtube },
];
