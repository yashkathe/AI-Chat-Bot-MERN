import mongoose from "mongoose";

import chatSchema from "./chat-model.js";

const schema = mongoose.Schema;

const userSchema = new schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
    chats:[ chatSchema ]
});

export default mongoose.model("User", userSchema)