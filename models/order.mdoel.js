module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      foodId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "food",
          key: "id",
        },
      },

      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },

      deliveryBoyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },

      addressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "address",
          key: "id",
        },
      },

      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "restaurant",
          key: "id",
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
