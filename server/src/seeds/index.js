import sequelize from "../config/connection";
import seedProducts from "./product-seeds";

const seedAll = async () => {
    try {
        await sequelize.sync({ alter: true }); //doesn't remove existing data
        console.log('Database synced without dropping tables.');

        await seedProducts();
        console.log('Products seeded.');

        process.exit(0); //exits without an error
    } catch (err) {
        console.error('Error occurred when attempting to seed database.');
        process.exit(1); //exits but with an error
    }
};


seedAll();