import facebook from "@/assets/Footer/Facebook.svg";
import twitter from "@/assets/Footer/Twitter.svg";
import instagram from "@/assets/Footer/Instagram.svg";
import youtube from "@/assets/Footer/Youtube.svg";

interface LinkType {
    link: string;
    image: ImageType;
}

interface ImageType {
    src: string;
    height: number;
    width: number;
    blurWidth: number;
    blurHeight: number;
}

export const externalLinks: LinkType[] = [
    { link: "https://www.facebook.com/", image: facebook },
    { link: "https://twitter.com/", image: twitter },
    { link: "https://www.instagram.com/", image: instagram },
    { link: "https://www.youtube.com/", image: youtube },
];
