import styles from "./Footer.module.scss";
import { navLinks } from "@/db/content.data";
import { externalLinks } from "./externalLinks";
import Link from "next/link";
import logo from "@/assets/Header/logo.svg";

export const Footer = () => {
	return (
		<div className={styles.footer__wrapper}>
			<footer className={styles.footer + " container"}>
				<div className={styles.footer__links}>
					<ul className={styles.nav__links}>
						{navLinks.map((navLink) => (
							<Link key={navLink} href={navLink.toLowerCase()}>
								<li className={styles.link__item}>{navLink}</li>
							</Link>
						))}
					</ul>
					<ul className={styles.external__links}>
						{externalLinks.map((link, index) => (
							<Link key={index} href={link.link} target="_blank">
								<img src={link.image.src} alt="image-link" />
							</Link>
						))}
					</ul>
				</div>
				<div className={styles.footer__info__wrapper}>
					<div className={styles.footer__image__mobile}>
						<img src={logo.src} alt="" />
					</div>
					<div className={styles.footer__info}>
						<p>© 2024 Monito. All rights reserved.</p>
						<div className={styles.footer__image}>
							<img src={logo.src} alt="" />
						</div>
						<p className={styles.footer__policy}>
							Terms of Service Privacy Policy
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};
