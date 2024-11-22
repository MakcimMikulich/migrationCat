import styles from "./SectionHeading.module.scss";
import arrow from "@/assets/home/arrow.svg";
import { Heading } from "../";
import type { sectionHeadingProps } from "./types";
import Link from "next/link";

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
				<Link href={"/" + button.link}>
					<button className={styles.button}>
						<span>{button.text}</span>
						<img src={arrow.src} alt={"arrow"} />
					</button>
				</Link>
			)}
		</div>
	);
};
