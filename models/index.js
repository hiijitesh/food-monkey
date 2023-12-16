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

// UserModel has many restaurants
UserModel.hasMany(RestaurantModel, {
    foreignKey: "ownerId",
    as: "restaurants",
});
// RestaurantModel belongs to a user
RestaurantModel.belongsTo(UserModel);

// RestaurantModel.hasMany(FoodModel, {
//   foreignKey: "restaurantId",
//   as: "restaurants",
// });

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
    as: "restaurants",
});
RestaurantModel.belongsTo(MenuModel);

// Define the association
MenuModel.hasMany(FoodModel, { foreignKey: "menuId" });
FoodModel.belongsTo(MenuModel);

module.exports = {
    UserModel,
    OrderModel,
    RestaurantModel,
    FoodModel,
    MenuModel,
    AddressModel,
    RefreshTokenModel,
};
