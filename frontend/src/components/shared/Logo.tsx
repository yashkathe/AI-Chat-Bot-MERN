import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import logo from "/logos/home-bot-icon.png";

const Logo = () => {
	return (
		<div className={styles.parent}>
			<section className={styles.section1}>
				<Link to={"/"}>
					<img src={logo} alt='logo' className={styles.logo} />
				</Link>
			</section>
			<section className={styles.section2}>
				<p className={styles.logo_p}>
					<span className={styles.span}>MERN-GPT</span>
				</p>
			</section>
		</div>
	);
};

export default Logo;
