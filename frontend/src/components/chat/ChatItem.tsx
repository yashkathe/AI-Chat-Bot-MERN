import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
	detectCodeSnippet,
	isCodeBlock,
} from "../../../helpers/extract-code-snippet";

import styles from "./ChatItem.module.css";

import botIcon from "/logos/bot.png";
import { useAuth } from "../../context/context";

type Props = {
	content: string;
	role: string;
};

const ChatItem = (props: Props) => {
	const messageBlocks = detectCodeSnippet(props.content);
	const auth = useAuth();

	const botMsg = (
		<div className={`${styles.parent} ${styles.bot_parent}`}>
			<div className={`${styles.avatar}`}>
				<img src={botIcon} alt='chat bot icon'></img>
			</div>
			<div className={styles.msg}>
				{!messageBlocks && <p>{props.content}</p>}
				{messageBlocks &&
					messageBlocks.length !== 0 &&
					messageBlocks.map((block, idx) =>
						isCodeBlock(block) ? (
							<SyntaxHighlighter
								style={coldarkDark}
								language='javascript'
								key={idx}>
								{block}
							</SyntaxHighlighter>
						) : (
							<p key={idx}>{block}</p>
						)
					)}
			</div>
		</div>
	);

	const userMsg = (
		<div className={`${styles.parent} ${styles.user_parent}`}>
			<div className={`${styles.avatar} ${styles.user_avatar}`}>
				{auth?.user?.name[0]}
				{auth?.user?.name.split(" ")[1][0]}
			</div>
			<div className={styles.msg}>
				<p>{props.content}</p>
			</div>
		</div>
	);

	return (
		<>
			{props.role === "assistant" && botMsg}
			{props.role === "user" && userMsg}
		</>
	);
};

export default ChatItem;
