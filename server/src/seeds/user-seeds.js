//seed user data for login purposes. User/pass auth
import { User } from "../models/index.js";

const userData =
    { username: 'Admin', email: 'hi@gmail.com', password: 'hello' };

const seedUsers = async () => {
    await User.create(userData);
};

export default seedUsers;