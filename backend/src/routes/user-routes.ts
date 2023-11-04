import express from "express";

const userRoutes = express.Router();

import { getAllUsers, userSignUp, userLogin } from "../controllers/user-controllers.js";
import {
	loginValidator,
	signUpValidator,
	validate,
} from "../utils/validators.js";

userRoutes.get("/", getAllUsers);

userRoutes.post("/signup", validate(signUpValidator), userSignUp);

userRoutes.post("/login", validate(loginValidator), userLogin);

export default userRoutes;
