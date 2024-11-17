// use DB_URL as listed in Render
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
  })
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'postgres',
      port: 5433,
      logging: false,
    }
  );

export default sequelize;