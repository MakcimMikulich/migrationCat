import styles from "./Footer.module.scss";
import { navLinks } from "../Navigation/";
import { externalLinks } from "./externalLinks";
import { Link } from "react-router-dom";
import logo from "/Header/logo.svg";

console.log(externalLinks);

export const Footer = () => {
	return (
		<div className={styles.footer__wrapper}>
			<footer className={styles.footer + " container"}>
				<div className={styles.footer__links}>
					<ul className={styles.nav__links}>
						{navLinks.map((navLink) => (
							<Link key={navLink} to={navLink.toLowerCase()}>
								<li className={styles.link__item}>{navLink}</li>
							</Link>
						))}
					</ul>
					<ul className={styles.external__links}>
						{externalLinks.map((ext) => (
							<Link key={ext.image} to={ext.link} target="_blank">
								<img src={ext.image} alt="image-link" />
							</Link>
						))}
					</ul>
				</div>
				<div className={styles.footer__info__wrapper}>
					<div className={styles.footer__image__mobile}>
						<img src={logo} alt="" />
					</div>
					<div className={styles.footer__info}>
						<p>© 2024 Monito. All rights reserved.</p>
						<div className={styles.footer__image}>
							<img src={logo} alt="" />
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
