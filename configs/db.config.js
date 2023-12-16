/* eslint-disable no-console */
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

const db = {
  sequelize: sequelizeInstance,
  Sequelize: Sequelize,
};

const authenticateDatabase = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Database connected ✅");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};

const synchronizeDatabase = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log(`Database synced ✅ with ${process.env.DATABASE_NAME}`);
  } catch (error) {
    console.error("Database synchronization error:", error.message);
    throw error;
  }
};

const dbConnection = async () => {
  await authenticateDatabase();
  await synchronizeDatabase();
};
module.exports = { sequelizeInstance, db, dbConnection };
