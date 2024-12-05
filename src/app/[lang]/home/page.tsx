import styles from "./Home.module.scss";
// import img from "../../assets/home/Frame 146.png";
import { CardsField, Header } from "@/components";
import { Button, SectionHeading } from "@/ui";
import { ourDogs, ourProduct } from "@/db";
import Play from "@/assets/button/icon_play.svg";

const sections = [
	{
		title: "Take A look At Some Of Our Pets",
		note: "What new?",
		button: {
			text: "View more",
			link: "category",
		},
		content: <CardsField cards={ourDogs} />,
	},
	{
		title: "Our Products",
		note: "Hard to choose right products for your pets?",
		button: {
			text: "View more",
			link: "category",
		},
		content: <CardsField cards={ourProduct} />,
	},
];

const Home = () => {
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
								<div className={styles.left__title}>One more friend</div>
								<div className={styles.left__subtitle}>Thousands more fun!</div>
								<p className={styles.left__text}>
									Having a pet means you have more joy, a new friend, a happy
									person who will always be with you to have fun. We have 200+
									different pets that can meet your needs!
								</p>
								<div className={styles.button__wrapper}>
									<Button type={"default"}> Hello</Button>
									<Button type={"empty"}>
										<span>Hello</span>
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
