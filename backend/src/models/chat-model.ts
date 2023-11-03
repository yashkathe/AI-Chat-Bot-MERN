import mongoose from "mongoose";

import { randomUUID } from "crypto";

const schema = mongoose.Schema;

const chatSchema = new schema({
	id: {
		type: String,
		default: randomUUID(),
	},
	role: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

export default mongoose.model("Chat", chatSchema);
