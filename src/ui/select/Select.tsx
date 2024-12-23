"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Select.module.scss";
import enFlag from "@/assets/flags/en.svg";
import ruFlag from "@/assets/flags/ru.svg";
import zhFlag from "@/assets/flags/zh.svg";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useSelectedLanguage } from "./useSelectedLanguage";

const languages = [
	{ code: "en", label: "English", flag: enFlag.src },
	{ code: "ru", label: "Русский", flag: ruFlag.src },
	{ code: "zh", label: "中文", flag: zhFlag.src },
];

export const Select = () => {
	const selectedLang = useSelectedLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	useOutsideClick(dropdownRef, () => setIsOpen(false));

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleLanguageChange = (lang: (typeof languages)[0]) => {
		setIsOpen(false);
	};

	return (
		<div ref={dropdownRef} className={styles.wrapper} onClick={toggleDropdown}>
			<div className={styles.lang}>
				<div className={styles.flag__wrapper}>
					<img src={selectedLang.flag} alt={`${selectedLang.label} flag`} />
				</div>
				<span>{selectedLang.label}</span>
			</div>
			<div className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
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

			{isOpen && (
				<ul className={styles.dropdown}>
					{languages
						.filter((lang) => lang.code !== selectedLang.code)
						.map((lang) => (
							<Link
								href="/"
								locale={lang.code}
								key={lang.code}
								onClick={() => handleLanguageChange(lang)}
							>
								<li className={styles.dropdownItem}>
									<div className={styles.flag__wrapper}>
										<img src={lang.flag} alt={`${lang.label} flag`} />
									</div>
									<span>{lang.label}</span>
								</li>
							</Link>
						))}
				</ul>
			)}
		</div>
	);
};
