type Props = {
	buttonLabel: string;
	type: "button" | "submit" | "reset";
	className?: string;
};

import styles from "./Button.module.css";

const Button = (props: Props) => {
	return (
		<button type={props.type} className={`${styles.button} ${props.className}`}>
			{props.buttonLabel}
		</button>
	);
};

export default Button;
