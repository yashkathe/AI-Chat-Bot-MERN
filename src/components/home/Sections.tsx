import { delay, motion } from "framer-motion";

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
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 1.5,
				duration: 2.5,
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
			<motion.div className={styles.div2}>
				<div className={`${styles.img} ${props.imgStyle}`}>
					<motion.img
						variants={botVariants}
						initial='initial'
						animate='animate'
						src={props.src}
						alt={props.alt}
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Section;
