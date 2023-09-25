module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      foodId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "food",
          key: "id",
        },
      },

      customerId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "user",
          key: "phone",
        },
      },

      deliveryBoyId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "user",
          key: "phone",
        },
      },

      addressId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "address",
          key: "pin",
        },
      },

      restaurantId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: "restaurant",
          key: "restaurantId",
        },
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      distance: {
        type: DataTypes.INTEGER, // rating table
        allowNull: true,
      },

      deliveryCharge: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
    },
    { timestamps: true },
  );
  return order;
};
