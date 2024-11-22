"use client";

import styles from "./Category.module.scss";
import { CardsField, Header, MultiFilter } from "../../components";
import { ourDogs } from "../../db";
import { useEffect, useState } from "react";
import { Heading } from "../../ui";
import { useBodyLock, useWindowSize } from "../../hooks";

const options = ["popular", "order", "date"];

export const Category = () => {
	const windowSize = useWindowSize();
	const mobileSize = 768;

	const [fullField, setFullField] = useState(windowSize > mobileSize);

	useEffect(() => {
		setFullField(windowSize > mobileSize);
	}, [windowSize]);

	const [openFilter, setOpenFilter] = useBodyLock();

	return (
		<>
			<Header />
			<div className="container">
				<section>
					<div className={styles.category}>
						<MultiFilter
							openFilter={openFilter}
							setOpenFilter={setOpenFilter}
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
							<CardsField cards={ourDogs} fullField={fullField} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Category;
