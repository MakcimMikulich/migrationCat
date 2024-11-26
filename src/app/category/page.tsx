import styles from "./Category.module.scss";
import { Header, WrapperFilter } from "@/components";

export const Category = () => {
	return (
		<>
			<Header />
			<div className="container">
				<section>
					<div className={styles.category}>
						<WrapperFilter />
					</div>
				</section>
			</div>
		</>
	);
};

export default Category;
