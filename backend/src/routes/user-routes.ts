import express from 'express'

const userRoutes = express.Router()

import { getAllUsers } from '../controllers/user-controllers.js';

userRoutes.get('/', getAllUsers )

export default userRoutes