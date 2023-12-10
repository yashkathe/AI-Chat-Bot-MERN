import { useRef, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Chat.module.css";
import ChatItem from "../components/chat/ChatItem";

import sendIcon from "/logos/send-icon.png";
import noMsgBot from "/logos/no-msg2.png";

const Chat = () => {
	const [chatMessages, setChatMessages] = useState([]);

	const inputRef = useRef<HTMLInputElement | null>(null);

	const sendMsgHandler = async () => {
		console.log(inputRef.current?.value);

		if (inputRef.current) inputRef.current.value = "";
	};

	const variants = {
		animate: {
			y: [0, -10, 0, -10, 0],
			transition: {
				type: "spring",
				y: { repeat: Infinity, duration: 4 },
			},
		},
	};

	const placeHolder = (
		<div className={styles.no_msgs}>
			<h3>GPT 3.5 TURBO</h3>
			<motion.div
				className={styles.no_msg_logo}
				variants={variants}
				animate='animate'>
				<img alt='no msg bot' src={noMsgBot}></img>
			</motion.div>
			<p>
				It's quiet in here! Be the first to break the silence and send a message
				to get the conversation going.
			</p>
		</div>
	);

	const chats = chatMessages.map((chat) => (
		<ChatItem //@ts-ignore
			key={`${chat.content}${Math.random()}`} //@ts-ignore
			content={chat.content} //@ts-ignore
			role={chat.role}
		/>
	));

	return (
		<div className={styles.parent}>
			<div className={styles.chat}>
				{chatMessages.length === 0 ? placeHolder : chats}
			</div>
			<div className={styles.inputContainer}>
				<div>
					<input type='text' maxLength={1500} ref={inputRef} />
					<button className={styles.icon} onClick={sendMsgHandler}>
						<img alt='icon' src={sendIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
