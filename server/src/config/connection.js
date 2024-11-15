//connect to DB. See image from rahul
// use DB_URL as listed in Render
let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
        dialect: 'postgres',
      port: 5433
    },
  );
}