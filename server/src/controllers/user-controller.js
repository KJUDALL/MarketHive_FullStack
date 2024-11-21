//  Handles user-related logic.
import { request, response } from "express";
import { User } from '../models';
import jwt from 'jsonwebtoken';

// Login 
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await user.validPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Validation failed.' });
    }
};

//Register 
const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error registering user.' });
    }
};

export default {login, register };