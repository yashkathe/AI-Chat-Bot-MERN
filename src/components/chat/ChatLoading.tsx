import Spinner from "../shared/Spinner";
import styles from "./ChatItem.module.css";
import botIcon from "/logos/bot.png";

const ChatLoading = () => {
	return (
		<div className={`${styles.parent} ${styles.bot_parent}`}>
			<div className={`${styles.avatar}`}>
				<img src={botIcon} alt='chat bot icon'></img>
			</div>
			<div className={styles.spinner}>
				<Spinner/>
			</div>
		</div>
	);
};

export default ChatLoading;
