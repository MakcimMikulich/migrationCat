import {
	ElfsightWidgetComponent,
	Header,
	SwiperPagination,
} from "@/components";
import { FAQComponent, PromInfo, SectionHeading, SeoFAQ } from "@/ui";
import styles from "./About.module.scss";
import imgCattery from "@/assets/About/about-cattery.webp";
// @ts-ignore
import { MapChart } from "./MapChart.jsx";
import { Button } from "@/ui";
import img from "@/assets/Dog/CustomersSlider.png";
import { useTranslations } from "next-intl";

const slides = [
	img.src,
	img.src,
	img.src,
	img.src,
	img.src,
	img.src,
	img.src,
	img.src,
	img.src,
];

type TranslationFunction = (key: string) => string;

const sections = (t: TranslationFunction) => [
	{
		content: (
			<div className="container">
				<SectionHeading
					title={t("headings.first.title")}
					note={t("headings.first.note")}
				/>
				<SwiperPagination slides={slides} />
			</div>
		),
	},
	{
		content: (
			<div className="container">
				<PromInfo />
			</div>
		),
	},
	{
		content: (
			<div style={{ marginBottom: "-7vw" }} className="container">
				<SectionHeading
					title={t("headings.second.title")}
					note={t("headings.second.note")}
				/>
				<MapChart />
			</div>
		),
	},
	{
		content: (
			<div className="container">
				<SectionHeading
					title={t("headings.third.title")}
					note={t("headings.third.note")}
				/>
				<SeoFAQ />
				<FAQComponent />
			</div>
		),
	},
	{
		content: (
			<div className="container">
				<ElfsightWidgetComponent />
			</div>
		),
	},
];

export const About = () => {
	const t = useTranslations("about");

	return (
		<>
			<section className={styles.cattery}>
				<Header />
				<div className="container">
					<div className={styles.cattery__content}>
						<div className={styles.content__info}>
							<div className={styles.info__title}>{t("title")}</div>
							<div className={styles.info__subtitle}>{t("subtitle")}</div>
							<p className={styles.info__text}>{t("description")}</p>
							<div className={styles.wrapper__button}>
								<Button type={"default"}> {t("buttonDefault")}</Button>
								<Button type={"empty"}>
									<span>{t("buttonEmpty")}</span>
								</Button>
							</div>
						</div>
						<div className={styles.content__img}>
							<div>
								<img src={imgCattery.src} alt={"imgCattery"} />
							</div>
						</div>
					</div>
				</div>
			</section>
			{sections(t).map((section, index) => (
				<section key={index}>{section.content} </section>
			))}
		</>
	);
};

export default About;
