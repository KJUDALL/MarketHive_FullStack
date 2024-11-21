//Service folder contains service layer - includes business logic and interactions with DB
// This file - Business logic related to authentication
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import { parseAst } from 'vite';

const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email } }); // find user by email
    if (!user || !(await user.validPassword(password))) { //if no valid email, error out
        throw new Error('Invalid email or password!');
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1hr' }); //generate token for new user
};

const registerUser = async (userData) => { //create new user
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw new Error('Error creating new user profile.');
    }
};

export { loginUser, registerUser };