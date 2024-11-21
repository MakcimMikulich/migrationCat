import styles from "./SectionHeading.module.scss";
import arrow from "../../public/home/arrow.svg";
import { Heading } from "../typography";
import type { sectionHeadingProps } from "./types";
import { Link } from "react-router-dom";

export const SectionHeading = ({
	title,
	note,
	button,
}: sectionHeadingProps) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<p className={styles.note}>{note}</p>
				<Heading>{title}</Heading>
			</div>
			{button && (
				<Link to={"/" + button.link}>
					<button className={styles.button}>
						<span>{button.text}</span>
						<img src={arrow} alt={"arrow"} />
					</button>
				</Link>
			)}
		</div>
	);
};
