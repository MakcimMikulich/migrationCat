"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useBodyLock } from "../../hooks";
import { navLinks } from "@/db/content.data";

export const Navigation = () => {
	const [isActive, setIsActive] = useBodyLock();

	return (
		<>
			<nav className={styles.menu__body} data-active={isActive}>
				<ul className={styles.list}>
					{navLinks.map((link) => (
						<Link
							key={link}
							href={"/" + link.toLowerCase()}
							onClick={() => setIsActive(false)}
						>
							<li className={styles.item}>{link}</li>
						</Link>
					))}
				</ul>
			</nav>
			<div
				onClick={() => setIsActive(!isActive)}
				className={styles.wrapper__burger}
				data-active={isActive}
			>
				<div className={styles.menu__burger}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</>
	);
};
