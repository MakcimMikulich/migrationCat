import facebook from "/Footer/Facebook.svg";
import twitter from "/Footer/Twitter.svg";
import instagram from "/Footer/Instagram.svg";
import youtube from "/Footer/Youtube.svg";

interface LinkType {
	link: string;
	image: string;
}

export const externalLinks: LinkType[] = [
	{ link: "https://www.facebook.com/", image: facebook },
	{ link: "https://twitter.com/", image: twitter },
	{ link: "https://www.instagram.com/", image: instagram },
	{ link: "https://www.youtube.com/", image: youtube },
];
