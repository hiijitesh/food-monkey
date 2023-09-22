require("dotenv").config();
const { Sequelize } = require("sequelize");

// Create a new instance of `Sequelize` with configuration options for connecting to the database.
const sequelizeInstance = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    port: "5432",
    dialect: "postgres",
  },
);

module.exports = { sequelizeInstance };
