import React from "react";
import styles from "./Typography.module.scss";

interface HeadingProps {
	children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
	return <h2 className={styles.heading}>{children}</h2>;
};
