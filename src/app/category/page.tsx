import styles from "./Category.module.scss";
import { Header } from "@/components";
import Wrapper from "./Wrapper";

export const Category = () => {
	return (
		<>
			<Header />
			<div className="container">
				<section>
					<div className={styles.category}>{/* <Wrapper /> */}</div>
				</section>
			</div>
		</>
	);
};

export default Category;
