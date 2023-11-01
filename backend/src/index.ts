import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

config();
const app = express();

// Middlewares
app.use(express.json());

// Connections and Listeners
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@new-cluster.syllbdh.mongodb.net/ai-chat-bot`
	)
	.then(() => {
		app.listen(process.env.PORT || 5000);
		console.log(`Server started on port ${process.env.PORT || 5000} and Mongo DB is connected`);
	})
	.catch((err) => {
		console.log(err);
	});
