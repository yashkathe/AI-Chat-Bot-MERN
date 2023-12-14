import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";

import styles from "./Chat.module.css";
import ChatItem from "../components/chat/ChatItem";
import { getAllChats, postChatRequest } from "../../helpers/api-functions";

import sendIcon from "/logos/send-icon.png";
import noMsgBot from "/logos/no-msg2.png";
import Spinner from "../components/shared/Spinner";
import ChatLoading from "../components/chat/ChatLoading";

import { useAuth } from "../context/context";
import SpinnerOverlay from "../components/shared/SpinnerOverlay";

type Message = {
	role: "user" | "assistant";
	content: string;
};

const Chat = () => {
	const auth = useAuth();

	const [chatMessages, setChatMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoadingChats, setIsLoadingChats] = useState<boolean>(true);

	const inputRef = useRef<HTMLInputElement | null>(null);
	const messageContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (messageContainerRef.current) {
			messageContainerRef.current.scrollTop =
				messageContainerRef.current.scrollHeight;
		}
	}, [chatMessages]);

	useLayoutEffect(() => {
		const getChats = async () => {
			try {
				if (auth?.isLoggedIn && auth.user) {
					const data = await getAllChats();
					setChatMessages([...data.chats]);
				}
				setIsLoadingChats(false);
			} catch (err) {
				console.log(err);
				setIsLoadingChats(false);
			}
		};
		getChats();
	}, []);

	const sendMsgHandler = async () => {
		const content = inputRef.current?.value as string;

		if (inputRef.current) inputRef.current.value = "";

		const newMessage: Message = { role: "user", content };
		setChatMessages((prev) => [...prev, newMessage]);

		// send request to backend
		setIsLoading(true);
		const chatData = await postChatRequest(content);
		setChatMessages([...chatData.chats]);
		setIsLoading(false);
	};

	const variants = {
		animate: {
			y: [0, -10, 0, -10, 0],
			transition: {
				type: "spring",
				y: { repeat: Infinity, duration: 4, stiffness: 100, damping: 5 },
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
			<div className={styles.chat} ref={messageContainerRef}>
				{isLoadingChats && <SpinnerOverlay />}
				{!isLoadingChats && (
					<>
						{chatMessages.length === 0 && placeHolder}
						{chatMessages.length !== 0 && chats}
						{isLoading && <ChatLoading />}
					</>
				)}
			</div>
			<div className={styles.inputContainer}>
				<div>
					<input type='text' maxLength={1500} ref={inputRef} disabled={isLoadingChats || isLoading ? true : false}/>
					<button className={styles.icon} onClick={sendMsgHandler}>
						<img alt='icon' src={sendIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
