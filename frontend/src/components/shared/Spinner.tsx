import styles from "./Spinner.module.css";

const Spinner = () => {
	return (
		<div className={styles["orbit-spinner"]}>
			<div className={styles["orbit"]}></div>
			<div className={styles["orbit"]}></div>
			<div className={styles["orbit"]}></div>
		</div>
	);
};

export default Spinner;
