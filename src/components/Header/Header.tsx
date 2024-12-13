import styles from "./Header.module.scss";
import logo from "@/assets/Header/logo.svg";
import { Search, Navigation } from "../";
import Link from "next/link";

export const Header = () => {
	return (
		<div className="container">
			<div className={styles.header}>
				<Link href={"./home"}>
					<img
						className={styles.logo}
						width={115}
						height={40}
						src={logo.src}
						alt="logo"
					/>
				</Link>

				<div className={styles.aside}>
					<Navigation />
					<Search placeHolder={"Search"} />
					{/* <Button type={"default"}>
						<span>Join the community</span>
					</Button> */}
					{/* <div
					>
						VND ^
					</div> */}
				</div>
			</div>
		</div>
	);
};
