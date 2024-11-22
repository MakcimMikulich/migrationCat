"use client";

import React, { useState } from "react";
import lupa from "../../assets/Header/Vector.svg";
import styles from "./Search.module.scss";

export const Search = ({ placeHolder }: any) => {
	const [value, setValue] = useState("");

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className={styles.wrapper}>
			<img src={lupa.src} alt="img" />
			<input
				value={value}
				onChange={(e) => inputHandler(e)}
				type="text"
				placeholder={placeHolder}
			/>
		</div>
	);
};
