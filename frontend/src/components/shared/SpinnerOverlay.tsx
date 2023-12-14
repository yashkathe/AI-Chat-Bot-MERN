import styles from "./SpinnerOverlay.module.css";

const SpinnerOverlay = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.orbit}></div>
			<div className={styles.orbit}></div>
			<div className={styles.orbit}></div>
		</div>
	);
};

export default SpinnerOverlay;
