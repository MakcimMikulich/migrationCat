import styles from "./MultiFilter.module.scss";
import { CheckBox, Heading } from "../../ui";
import { filters } from "./MultiFilter.data";
import { useMultiFilterState } from "./useMultiFilterState";
import type { MultiFilterProps } from "./types";

export const MultiFilter = ({
	openFilter,
	setOpenFilter,
}: MultiFilterProps) => {
	const { params, handlerCheckBox } = useMultiFilterState();
	// console.log(params);

	const className =
		styles.multifilter__wrapper + (openFilter ? ` ${styles.active}` : "");

	return (
		<div className={className} onClick={() => setOpenFilter(false)}>
			<div className={styles.multifilter} onClick={(e) => e.stopPropagation()}>
				<div className={styles.heading__wrapper}>
					<Heading>Filter</Heading>
				</div>
				{filters.map((filter, i) => (
					<div key={i} className={styles.filter}>
						<div className={styles.filter__header}>{filter.header}</div>
						{filter.fields.map((field) => (
							<CheckBox
								key={field.name}
								label={field.name}
								color={field.color}
								handler={handlerCheckBox}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
