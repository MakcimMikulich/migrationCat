"use client";

import styles from "./Home.module.scss";
// import img from "../../assets/home/Frame 146.png";
import { CardsField, Header } from "@/components";
import { Button, SectionHeading } from "@/ui";
import { ourDogs, ourProduct } from "@/db";
import Play from "@/assets/button/icon_play.svg";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("home");

	const sections = [
		{
			title: t("sections.sectionOne.title"),
			note: t("sections.sectionOne.note"),
			button: {
				text: t("sections.sectionOne.button.text"),
				link: t("sections.sectionOne.button.link"),
			},
			content: <CardsField cards={ourDogs} />,
		},
		{
			title: t("sections.sectionTwo.title"),
			note: t("sections.sectionTwo.note"),
			button: {
				text: t("sections.sectionTwo.button.text"),
				link: t("sections.sectionTwo.button.link"),
			},
			content: <CardsField cards={ourProduct} />,
		},
	];

	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.wrapper__video}>
					{[1, 2, 3].map((v) => (
						<video
							key={v}
							className={styles.video_block}
							autoPlay
							loop
							muted
							playsInline
						>
							<source src="/video.mp4" type="video/mp4" />
						</video>
					))}
				</div>
				<section className={styles.preview}>
					<div className="container">
						<div className={styles.preview__body}>
							<div className={styles.preview__left}>
								<div className={styles.left__title}>{t("title")}</div>
								<div className={styles.left__subtitle}>{t("subTitle")}</div>
								<p className={styles.left__text}>{t("description")}</p>
								<div className={styles.button__wrapper}>
									<Button type={"default"}>{t("buttonDefault")}</Button>
									<Button type={"empty"}>
										<span>{t("buttonEmpty")}</span>
										<img src={Play.src} alt="play" />
									</Button>
								</div>
							</div>
							{/* <div className={styles.preview__right}>
								<img src={img.src} alt="img" />
							</div> */}
						</div>
					</div>
				</section>
			</div>

			<div className="container">
				{sections.map((section, index) => (
					<section key={index}>
						<SectionHeading
							title={section.title}
							note={section.note}
							button={section.button}
						/>
						{section.content}
					</section>
				))}
			</div>
		</>
	);
};

export default Home;
