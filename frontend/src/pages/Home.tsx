import mainBot from "/page-photos/homepage-bot.png";
import ui1 from "/page-photos/UI-1.png";

import Section from "../components/home/Sections";

import styles from "./Home.module.css";

const Home = () => {
	return (
		<div className={styles.parent}>
			<Section src={mainBot} alt='main-bot' animateImg={true} imgStyle={styles.ui1} reverse={false}>
				<h1>YOUR OWN PERSONAL CHAT BOT</h1>
				<p>✅ Easy-to-use interface for a smooth chat experience</p>
				<p>✅ All interactions are secure and confidential</p>
				<p>✅ Have seamless and natural conversations</p>
				<p>✅ Get assistance on a wide range of topics</p>
			</Section>
			<Section src={ui1} alt='ui-1' animateImg={false} imgStyle={styles.ui2} reverse={true}>
				<h1>DISCOVER STUNNING UIs</h1>
			</Section>
		</div>
	);
};

export default Home;
