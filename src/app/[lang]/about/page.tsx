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

const sections = [
	{
		content: (
			<div className="container">
				<SectionHeading title="Our Story" note="What is your way?" />
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
				<SectionHeading title="Lets see on map" note="Where our pets?" />
				<MapChart />
			</div>
		),
	},
	{
		content: (
			<div className="container">
				<SectionHeading
					title="We were ready for this"
					note="Do you have any questions?"
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
	return (
		<>
			<section className={styles.cattery}>
				<Header />
				<div className="container">
					<div className={styles.cattery__content}>
						<div className={styles.content__info}>
							<div className={styles.info__title}>About Our British</div>
							<div className={styles.info__subtitle}>Shorthair Cattery</div>
							<p className={styles.info__text}>
								Our cattery specializes in breeding and selling British
								Shorthair Chinchillas. We proudly offer high-quality kittens
								that are not only beautiful but also exceptionally healthy and
								friendly. Our dedicated team ensures that each kitten is raised
								in the best possible environment, fostering their growth and
								development. We strive to match each kitten with the perfect
								family, where they will be surrounded by love and care. Join our
								satisfied clients and find your fluffy friend at our cattery!
							</p>
							<div className={styles.wrapper__button}>
								<Button type={"default"}> Hello</Button>
								<Button type={"empty"}>
									<span>learn More</span>
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
			{sections.map((section, index) => (
				<section key={index}>{section.content} </section>
			))}
		</>
	);
};

export default About;
