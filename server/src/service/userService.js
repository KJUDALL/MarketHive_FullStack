// Business logic related to users - CRUD operations for management
import { User } from '../models/index.js';

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Failed to retrieve all users.');
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error(`User not found.`);
        }
        return user;
    } catch (error) {
        throw new Error('Error finding user.');
    }
};

const createUser = async (userData) => {
    try {
        const create = await User.create(userData);
        return create;
    } catch (error) {
        throw new Error(`Could not create user.`);
    }
};

export { getAllUsers, getUserById, createUser };