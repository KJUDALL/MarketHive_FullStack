import sequelize from "../config/connection.js";
import seedProducts from "./product-seeds.js";
import seedUsers from "./user-seeds.js";

const seedAll = async () => {
    try {
        // await sequelize.sync({ force: true }); //drops existing data for project sake
        console.log('Database synced without dropping tables.');
        
        await seedProducts();
        console.log('Products seeded.');
        await seedUsers();

        // process.exit(0); //exits without an error
    } catch (err) {
        console.error('Error occurred when attempting to seed database.');
        // process.exit(1); //exits but with an error
    }
};

export default seedAll;