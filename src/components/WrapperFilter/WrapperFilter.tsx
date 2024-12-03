"use client";

import React from "react";
import { Heading } from "@/ui/typography";
import { ourDogs } from "@/db";
import { MultiFilter, useMultiFilterState } from "@/components/MultiFilter";
import { CardsField } from "@/components/CardsField";
import { useEffect, useState } from "react";
import { useBodyLock, useWindowSize } from "@/hooks";
import styles from "./WrapperFilter.module.scss";
import { filter } from "./filter";

const options = ["popular", "order", "date"];

const WrapperFilter = () => {
	const windowSize = useWindowSize();
	const mobileSize = 768;

	const [fullField, setFullField] = useState(windowSize > mobileSize);

	useEffect(() => {
		setFullField(windowSize > mobileSize);
	}, [windowSize]);

	const { params, handlerCheckBox } = useMultiFilterState();

	const [openFilter, setOpenFilter] = useBodyLock();

	console.log(params);

	const filterDogs = filter(ourDogs, params);

	return (
		<>
			<MultiFilter
				openFilter={openFilter}
				setOpenFilter={setOpenFilter}
				handlerCheckBox={handlerCheckBox}
			/>
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
				<CardsField cards={filterDogs} fullField={fullField} />
			</div>
		</>
	);
};

export { WrapperFilter };
