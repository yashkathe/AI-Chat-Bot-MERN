import { Request, Response, NextFunction } from "express";
import { hash, compare } from "bcrypt";

import User from "../models/user-model.js";

export const getAllUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users = await User.find();
		return res.status(200).json({ message: "OK", users });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}
};

export const userSignUp = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await User.findOne({ email });

		if (existingUser)
			return res
				.status(409)
				.json({
					message: "ERROR",
					cause: "User with same email already exists",
				});

		const hashedPassword = await hash(password, 10);

		const user = new User({ name, email, password: hashedPassword });
		await user.save();

		return res.status(201).json({ message: "OK", user });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}
};

export const userLogin = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user)
			return res
				.status(409)
				.json({
					message: "ERROR",
					cause: "No account with given emailID found",
				});

		const isPasswordCorrect = await compare(password, user.password);
		if (!isPasswordCorrect)
			return res
				.status(403)
				.json({ message: "ERROR", cause: "Incorrect Password" });

		return res.status(200).json({ message: "OK", id: user._id.toString() });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "ERROR", cause: error.message });
	}
};
