const { sequelizeInstance } = require("../configs/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const db = {
  sequelize: sequelizeInstance,
  Sequelize: Sequelize,
};

// create schemas here

const dbConnection = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Database connected ✅✅ ");

    // Use the `sync()` method to sync the models with the database.
    // The `force` option determines whether to drop and recreate the tables (true) or simply create them if they don't exist (false).
    await db.sequelize.sync({ force: false });
    console.log(`Database synced ✅ with ${process.env.DATABASE_NAME}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};

module.exports = { db, dbConnection };
