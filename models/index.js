/* eslint-disable no-console */
const { sequelizeInstance } = require("../configs/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const db = {
  sequelize: sequelizeInstance,
  Sequelize: Sequelize,
};

// create schemas here
db.user = require("./user.model")(sequelizeInstance, DataTypes);
db.refreshToken = require("./refresh.token.model")(sequelizeInstance, DataTypes);
db.address = require("./address.model")(sequelizeInstance, DataTypes);
db.location = require("./location.model")(sequelizeInstance, DataTypes);
db.restaurant = require("./restaurants.model")(sequelizeInstance, DataTypes);
db.food = require("./food.model")(sequelizeInstance, DataTypes);
db.menu = require("./menu.model")(sequelizeInstance, DataTypes);
db.order = require("./order.model")(sequelizeInstance, DataTypes);

const UserModel = db.user;
const RestaurantModel = db.restaurant;
const OrderModel = db.order;
const FoodModel = db.food;
const MenuModel = db.menu;
const AddressModel = db.address;
const RefreshTokenModel = db.refreshToken;

UserModel.hasMany(RestaurantModel, {
  foreignKey: "ownerId",
  as: "restaurant",
});
RestaurantModel.belongsTo(UserModel);

UserModel.hasMany(AddressModel, {
  foreignKey: "customerId",
  as: "address",
});
AddressModel.belongsTo(UserModel);

UserModel.hasMany(OrderModel, {
  foreignKey: "customerId",
  as: "order",
});
OrderModel.belongsTo(UserModel);

MenuModel.hasMany(RestaurantModel, {
  foreignKey: "menuId",
  as: "restaurant",
});
RestaurantModel.belongsTo(MenuModel);

// Define the association
MenuModel.hasMany(FoodModel, { foreignKey: "menuId" });
FoodModel.belongsTo(MenuModel);

const dbConnection = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Database connected ✅✅ ");
    // The `force` option determines whether to drop and recreate the tables (true) or simply create them if they don't exist (false).
    await db.sequelize.sync({ force: false });
    console.log(`Database synced ✅ with ${process.env.DATABASE_NAME}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};

module.exports = {
  db,
  dbConnection,
  UserModel,
  OrderModel,
  RestaurantModel,
  FoodModel,
  MenuModel,
  AddressModel,
  RefreshTokenModel,
};
