// Setup and configured backend server - use Express.js to create/manage server
const forceDatabaseRefresh = false;

import express from 'express';
import { Sequelize } from 'sequelize';
import authenticateToken from './middleware/auth.js';
import authRoutes from './routes/authRoutes.js';
import apiRoutes from './routes/api/api-routes.js';
import sequelize from './config/connection.js';
import seedAll from './seeds/index.js';

const app = express() 
const PORT = process.env.PORT || 3001;

//apply middleware

app.use(express.json());

//Routes
app.use('/auth', authRoutes);
app.use(authenticateToken);
app.use('/api', apiRoutes);


//Main entry point for the back end. Ensure it imports and uses routes, connects to the database, and configures middleware (e.g., express.json()).
sequelize.sync({force: true}).then(async () => {
    await seedAll(); //seeds all the data
    app.listen(PORT, () => {
        console.log('Server has started.')
    });
    });