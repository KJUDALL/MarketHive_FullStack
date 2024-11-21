//file to implement JWTs and provide secure user auth
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