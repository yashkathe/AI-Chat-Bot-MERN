import { motion } from "framer-motion";

import styles from "./Sections.module.css";

type Props = {
	src: string;
	alt: string;
	animateImg: boolean;
	children: any;
	imgStyle: string;
	reverse: boolean;
};

const Section = (props: Props) => {
	const botVariants = {
		initial: {
			x: "70",
			opacity: 0,
			transition: {
				duration: 1,
			},
		},
		animate: {
			x: 0,
			y: [15, -15, 15],
			opacity: 1,
			transition: {
				duration: 2,
				y: {
					duration: 4,
					repeat: "Infinity",
					delay: 2,
				},
			},
		},
	};

	const contentVariants = {
		initial: {
			x: "-70",
			opacity: 0,
			transition: {
				duration: 1,
			},
		},
		animate: {
			x: 0,

			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	};

	return (
		<div className={props.reverse ? styles.parent_reverse : styles.parent}>
			<motion.div
				variants={contentVariants}
				initial='initial'
				animate='animate'
				className={styles.div1}>
				{props.children}
			</motion.div>
			<div className={styles.div2}>
				<motion.div
					className={`${styles.img} ${props.imgStyle}`}
					variants={props.animateImg ? botVariants : undefined}
					initial='initial'
					animate='animate'>
					<img src={props.src} alt={props.alt} />
				</motion.div>
			</div>
		</div>
	);
};

export default Section;
