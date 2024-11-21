import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import sequelize from "../config/connection";

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
});

//Hash user password for security
User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

//validate password 
User.prototype.validPassword = async function (password) {
    return bcrypt.compare(passwordm, this.password);
};

export default User;