//Show tables in DB and connect with schema
import sequelize from '../config/connection.js';
import { DataTypes } from 'sequelize';

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 5, 
    },
});

export default Product;

