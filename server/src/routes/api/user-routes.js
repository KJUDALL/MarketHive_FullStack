import express from 'express';
import { getAllUsers, getUserById, createUser } from "../../service/userService.js";

const router = express.Router();

//GET /users (get all users)
router.get('/', getAllUsers);

//GET a user by id 
router.get('/:id', getUserById);

//POST /users (create new user)
router.post('/', createUser);

export default router;