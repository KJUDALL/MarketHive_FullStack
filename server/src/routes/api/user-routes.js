import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
} from '../../controllers/user-controller.js';

const userRouter = express.Router();

//GET /users (get all users)
router.get('/', getAllUsers);

//GET a user by id 
router.get('/:id', getUserById);

//POST /users (create new user)
router.post('/', createUser);

export default userRouter;