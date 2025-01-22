"use client";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ourDogs } from "@/db";
import styles from "./DogInfo.module.scss";
import { Button, Heading } from "@/ui";
import chat from "@/assets/Dog/chat.png";
import { SwiperDogs } from "../SwiperDogs/SwiperDogs";
import healthyIcon from "@/assets/Dog/healthyIcon.svg";
import garantIcon from "@/assets/Dog/garantIcon.svg";
import shareIcon from "@/assets/Dog/shareIcon.svg";
import fcIcon from "@/assets/Footer/Facebook.svg";
import instIcon from "@/assets/Footer/Instagram.svg";
import twitterIcon from "@/assets/Footer/Twitter.svg";
import youtubeIcon from "@/assets/Footer/Youtube.svg";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const iconLinks = [fcIcon, instIcon, twitterIcon, youtubeIcon];

interface DogInfoProps {
	dogId: string | string[] | undefined; // Тип для dogId, поддерживающий возможные варианты из useRouter
}

export const DogInfo: React.FC<DogInfoProps> = ({ dogId }) => {
	// const { dogId } = useParams<{ dogId: string }>();
	// const location = useLocation();

	// console.log(location.pathname);

	const currentDog = ourDogs[+dogId! - 1];

	const infoBlockRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const handleGoBack = () => {
		router.back(); // Возврат на предыдущую страницу
	};

	const handleScrollToInfo = () => {
		if (infoBlockRef.current) {
			infoBlockRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<div className="container dog__container">
			<section className={styles.dog__wrapper}>
				<div className={styles.dog__control}>
					<div onClick={handleGoBack}>
						<svg
							width="56"
							height="57"
							viewBox="0 0 56 57"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M30.3335 35.5L23.3335 28.5L30.3335 21.5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div onClick={handleScrollToInfo}>
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_114_1537)">
								<path
									d="M12.5 0C5.59067 0 0 5.59116 0 12.5C0 19.4093 5.59116 25 12.5 25C19.4093 25 25 19.4088 25 12.5C25 5.59067 19.4088 0 12.5 0ZM12.5 23.0469C6.67026 23.0469 1.95312 18.3293 1.95312 12.5C1.95312 6.67026 6.67065 1.95312 12.5 1.95312C18.3297 1.95312 23.0469 6.67065 23.0469 12.5C23.0469 18.3297 18.3293 23.0469 12.5 23.0469Z"
									fill="currentColor"
								/>
								<path
									d="M12.5 10.4653C11.9606 10.4653 11.5234 10.9025 11.5234 11.4419V17.7306C11.5234 18.27 11.9606 18.7072 12.5 18.7072C13.0394 18.7072 13.4766 18.2699 13.4766 17.7306V11.4419C13.4766 10.9025 13.0394 10.4653 12.5 10.4653Z"
									fill="currentColor"
								/>
								<path
									d="M12.5 9.26953C13.2281 9.26953 13.8184 8.67928 13.8184 7.95117C13.8184 7.22306 13.2281 6.63281 12.5 6.63281C11.7719 6.63281 11.1816 7.22306 11.1816 7.95117C11.1816 8.67928 11.7719 9.26953 12.5 9.26953Z"
									fill="currentColor"
								/>
							</g>
							<defs>
								<clipPath id="clip0_114_1537">
									<rect width="25" height="25" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
				<div className={styles.slider}>
					<div className={styles.slider__wrapper}>
						<SwiperDogs />
						<div className={styles.slider__note}>
							<div className={styles.note__block}>
								<div>
									<img src={healthyIcon.src} alt={"healthyIcon"} />
								</div>
								<p>100% health guarantee for pets</p>
							</div>
							<div className={styles.note__block}>
								<div>
									<img src={garantIcon.src} alt={"garantIcon"} />
								</div>
								<p>100% guarantee of pet identification</p>
							</div>
						</div>
						<div className={styles.slider__share}>
							<div className={styles.share__item}>
								<img src={shareIcon.src} alt={"shareIcon"} />
								<span>Share:</span>
							</div>
							<div className={styles.share__link}>
								{iconLinks.map((link, index) => (
									<a href="" key={index}>
										<img src={link.src} alt={"link"} />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.dog__info} ref={infoBlockRef}>
					<p className={styles.dog__path__link}>path link</p>
					<p className={styles.dog__sku}>{currentDog?.dogInfo?.[0].value}</p>
					<Heading>{currentDog?.title}</Heading>
					<p className={styles.dog__name}></p>
					<p className={styles.dog__price}>{currentDog?.price}</p>

					<div className={styles.button__wrapper}>
						<Button type={"default"}>
							<span>Contact us</span>
						</Button>
						<Button type={"empty"}>
							<img src={chat.src} alt="button image" />
							<span>Chat with Monito</span>
						</Button>
					</div>

					{currentDog?.dogInfo && (
						<div className={styles.dog__table}>
							{currentDog.dogInfo.map((i, index) => (
								<div key={index} className={styles.dog__table_row}>
									<p className={styles.dog__table_field}>{i.field}</p>
									<p className={styles.dog__table_value}>: {i.value}</p>
								</div>
							))}
						</div>
					)}
					<div className={styles.slider__note}>
						<div className={styles.note__block}>
							<div>
								<img src={healthyIcon.src} alt={"healthyIcon"} />
							</div>
							<p>100% health guarantee for pets</p>
						</div>
						<div className={styles.note__block}>
							<div>
								<img src={garantIcon.src} alt={"garantIcon"} />
							</div>
							<p>100% guarantee of pet identification</p>
						</div>
					</div>
					<div className={styles.slider__share}>
						<div className={styles.share__item}>
							<img src={shareIcon.src} alt={"shareIcon"} />
							<span>Share:</span>
						</div>
						<div className={styles.share__link}>
							{iconLinks.map((link, index) => (
								<a href="" key={index}>
									<img src={link.src} alt={"link"} />
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
