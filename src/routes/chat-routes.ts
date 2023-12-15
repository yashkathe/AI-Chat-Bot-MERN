import express from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { deleteAllChats, generateChatCompletion, getAllChats } from "../controllers/chat-controllers.js";

const chatRoutes = express.Router();

// test
chatRoutes.get("/", (req, res, next) => {
	console.log("hi");
	res.send("hello from chatRoutes");
});

// protected API

chatRoutes.post(
	"/new",
	validate(chatCompletionValidator),
	verifyToken,
	generateChatCompletion
);

chatRoutes.get(
	"/all-chats",
	verifyToken,
	getAllChats
);

chatRoutes.delete(
    "/delete-all-chats",
    verifyToken,
    deleteAllChats
)

export default chatRoutes;
