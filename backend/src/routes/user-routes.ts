import express from "express";

const userRoutes = express.Router();

import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";

userRoutes.get("/", getAllUsers);

userRoutes.post("/signup", userSignUp);

export default userRoutes;
