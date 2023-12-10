import React from "react";

import styles from "./Chat.module.css";
import ChatItem from "../components/chat/ChatItem";

const Chat = () => {
	const chatMessages = [
		{ role: "user", content: "Hello, how are you?" },
		{
			role: "assistant",
			content: "Hi there! I'm doing well. How can I help you today?",
		},
		{ role: "user", content: "I have a question about programming." },
		{
			role: "assistant",
			content: "Sure, I'd be happy to help. What's your question?",
		},
		{
			role: "user",
			content: "Can you explain how to use loops in JavaScript?",
		},
		{
			role: "assistant",
			content:
				"Certainly! In JavaScript, you can use 'for' and 'while' loops to repeat code. Here's an example of a 'for' loop:",
		},
	];
	return (
		<div className={styles.parent}>
			<div className={styles.chat}>
				{chatMessages.map((chat) => (
					<ChatItem key={`${chat.content}${Math.random()}`} content={chat.content} role={chat.role}/>
				))}
			</div>
		</div>
	);
};

export default Chat;
