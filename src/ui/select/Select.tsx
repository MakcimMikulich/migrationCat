import styles from "./Select.module.scss";

import Link from "next/link";

export const Select = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.dsad}>VND</div>
			<div className={styles.arrow}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M15 11L12 14L9 11"
						stroke="#002a48"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};
