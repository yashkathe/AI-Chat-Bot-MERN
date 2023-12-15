type Props = {
	to: string;
	text: string;
	onClick?: () => Promise<void>;
};

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./NavigationLink.module.css";

const linkVariant = {
	whileHover: {
		scale: 1.1,
	},
};

const NavigationLink = (props: Props) => {
	return (
		<motion.div
			className={styles.link}
			variants={linkVariant}
			whileHover='whileHover'
            onClick={props.onClick}
            >
			<NavLink
				to={props.to}
				className={({ isActive, isPending }) =>
					isPending ? `${styles.pending}` : isActive ? `${styles.active}` : `${styles.pending}`
				}>
				{props.text}
			</NavLink>
		</motion.div>
	);
};

export default NavigationLink;
