import rectangle from "@/assets/promInfo/rectangle.svg";
import { Number } from "@/components";
import styles from "./PromInfo.module.scss";

const data = [
	{
		text: "питомцев в год",
		to: 100,
	},
	{
		text: "довольных клиентов",
		to: 1000,
	},
	{
		text: "опыт работы на рынке",
		to: 7,
	},
	{
		text: "городов",
		to: 70,
	},
	{
		text: "колличество продаж",
		to: 700,
	},
	{
		text: "ведём консультацию",
		to: 30,
	},
];

export const PromInfo = () => {
	const duration = 2000;

	return (
		<div className={styles.main__content}>
			{data.map((item, i) => (
				<div className={styles.main__block} key={i}>
					<div className={styles.block__content}>
						<div className={styles.content__number}>
							<Number n={item.to} duration={duration} />+
						</div>
						<span className={styles.content__description}>{item.text}</span>
						<img
							className={styles.content__rectangle}
							src={rectangle.src}
							alt="rectangle"
						/>
					</div>
				</div>
			))}
		</div>
	);
};
