"use client";

import React from "react";
import { Heading } from "@/ui";
import { ourDogs } from "@/db";
import { CardsField, MultiFilter } from "@/components";
import { useEffect, useState } from "react";
import { useBodyLock, useWindowSize } from "@/hooks";
import styles from "./Category.module.scss";

const options = ["popular", "order", "date"];

const Wrapper = () => {
	const windowSize = useWindowSize();
	const mobileSize = 768;

	const [fullField, setFullField] = useState(windowSize > mobileSize);

	useEffect(() => {
		setFullField(windowSize > mobileSize);
	}, [windowSize]);

	const [openFilter, setOpenFilter] = useBodyLock();

	return (
		<>
			<MultiFilter openFilter={openFilter} setOpenFilter={setOpenFilter} />
			<div className={styles.field}>
				<div className={styles.field__header}>
					<div className={styles.header__left}>
						<Heading>Small Dog</Heading>
						<p>52 puppies</p>
					</div>
					<div className={styles.header__right}>
						{fullField || (
							<button
								className={styles.header__button}
								onClick={() => setOpenFilter(!openFilter)}
							>
								Filter
							</button>
						)}
						<select>
							{options.map((option) => (
								<option key={option} value={option}>
									Sort by: {option}
								</option>
							))}
						</select>
					</div>
				</div>
				<CardsField cards={ourDogs} fullField={fullField} />
			</div>
		</>
	);
};

export default Wrapper;
