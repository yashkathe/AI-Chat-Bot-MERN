import React from "react";

import styles from "./Chat.module.css";
import ChatItem from "../components/chat/ChatItem";

import sendIcon from "/logos/send-icon.png";

const Chat = () => {
	const chatMessages = [
		{ role: "user", content: "Hello, how are you?" },
		{
			role: "assistant",
			content: "Hi there! I'm doing well. How can I help you today?",
		},	
	];
	return (
		<div className={styles.parent}>
			<div className={styles.chat}>
				{chatMessages.map((chat) => (
					<ChatItem
						key={`${chat.content}${Math.random()}`}
						content={chat.content}
						role={chat.role}
					/>
				))}
			</div>
			<div className={styles.inputContainer}>
				<div>
					<input type='text' maxLength={1500}/>
					<button className={styles.icon}>
						<img alt='icon' src={sendIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
