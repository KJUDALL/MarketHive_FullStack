// Routes related to authentication
//Handles authentication routes like /login or /signup
import express from 'express';
import { register, login } from '../controllers/user-controller.js';

const router = express.Router();

//register new user
router.post('/registration', register);

//login user
router.post('/login', login);

// //logout user
// router.post('/logout', logoutUser);

export default router;