// Setup and configured backend server - use Express.js to create/manage server
const forceDatabaseRefresh = false;

import express from 'express';
import { Sequelize } from 'sequelize';
import authenticateToken from './middleware/auth';
import authRoutes from './routes/authRoutes';
import apiRoutes from './routes/api/api-routes';

const app = express() 
const PORT = process.env.PORT || 3001;

//apply middleware
app.use(authenticateJWT);
app.use(express.json());

//Routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

//Main entry point for the back end. Ensure it imports and uses routes, connects to the database, and configures middleware (e.g., express.json()).
app.listen(PORT, () => {
    console.log('Server has started.')
});