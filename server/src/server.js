// Setup and configured backend server - use Express.js to create/manage server
const forceDatabaseRefresh = false;

import express from 'express';
import { Sequelize } from 'sequelize';

const PORT = process.env.PORT || 3001;

//Main entry point for the back end. Ensure it imports and uses routes, connects to the database, and configures middleware (e.g., express.json()).