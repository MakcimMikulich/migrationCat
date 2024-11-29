import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
	label: string;
	header: string;
	color: string | null;
	handler: (header: string, name: string, check: boolean) => void;
}

export const CheckBox = ({ header, label, color, handler }: CheckBoxProps) => {
	return (
		<div className={styles.check}>
			<label className={styles.container}>
				<input
					value={label}
					type="checkbox"
					onChange={(e) => {
						handler(header, label, e.target.checked);
					}}
				/>
				{color && (
					<span style={{ color: color }} className={styles.circle}></span>
				)}
				<span className={styles.checkmark}></span>
				{label}
			</label>
		</div>
	);
};
