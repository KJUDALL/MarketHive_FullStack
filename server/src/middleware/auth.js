//file to implement JWTs and provide secure user auth
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ email, password: hashedPassword });
//   await user.save();
//   res.status(201).send('User registered');
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
//     res.json({ token });
//   } else {
//     res.status(401).send('Invalid credentials');
//   }
// });

// module.exports = router;
import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const token = req.header(Authorization)?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: token needed.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //verifies token with secret key
        req.user = decoded; //attach token user info to req object
        next(); //move to next route
    } catch (error) {
        res.status(403).json({ message: 'Invalid token.' });
    }
};

export default authenticateToken;
