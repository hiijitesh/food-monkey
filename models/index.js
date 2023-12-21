/* eslint-disable no-console */
const { sequelizeInstance, db } = require("../configs/dbConfig");
const { DataTypes } = require("sequelize");

// create schemas here
db.user = require("./users")(sequelizeInstance, DataTypes);
db.refreshToken = require("./refreshToken")(sequelizeInstance, DataTypes);
db.address = require("./address")(sequelizeInstance, DataTypes);
db.location = require("./location")(sequelizeInstance, DataTypes);
db.restaurant = require("./restaurants")(sequelizeInstance, DataTypes);
db.food = require("./food")(sequelizeInstance, DataTypes);
db.menu = require("./menu")(sequelizeInstance, DataTypes);
db.order = require("./order")(sequelizeInstance, DataTypes);

const UserModel = db.user;
const RestaurantModel = db.restaurant;
const OrderModel = db.order;
const FoodModel = db.food;
const MenuModel = db.menu;
const AddressModel = db.address;
const RefreshTokenModel = db.refreshToken;
const LocationModel = db.location;

UserModel.hasMany(AddressModel, { foreignKey: "userId" });
AddressModel.belongsTo(UserModel, { foreignKey: "userId" });

UserModel.hasMany(LocationModel, { foreignKey: "userId" });
LocationModel.belongsTo(UserModel, { foreignKey: "userId" });

UserModel.hasMany(RestaurantModel, { foreignKey: "ownerId" });
RestaurantModel.belongsTo(UserModel, { foreignKey: "ownerId" });

UserModel.hasMany(OrderModel, { foreignKey: "customerId" });
OrderModel.belongsTo(UserModel, { foreignKey: "customerId" });

MenuModel.hasMany(RestaurantModel, { foreignKey: "menuId" });
RestaurantModel.belongsTo(MenuModel, { foreignKey: "menuId" });

MenuModel.hasMany(FoodModel, { foreignKey: "menuId" });
FoodModel.belongsTo(MenuModel, { foreignKey: "menuId" });

module.exports = {
    UserModel,
    OrderModel,
    RestaurantModel,
    FoodModel,
    MenuModel,
    AddressModel,
    RefreshTokenModel,
};
