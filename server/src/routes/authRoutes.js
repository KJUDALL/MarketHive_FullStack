// Routes related to authentication
//Handles authentication routes like /login or /signup
import express from 'express';
import { registration, loginUser, logoutUser } from '../controllers/user-controller';

const router = express.Router();

//register new user
router.post('/registration', registration);

//login user
router.post('/login', loginUser);

//logout user
router.post('/logout', logoutUser);

export default router;