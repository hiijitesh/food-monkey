module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "food",
          key: "id",
        },
      },

      deliveryBoyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "phone",
        },
      },

      addressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "address",
          key: "addressId",
        },
      },

      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "restaurants",
          key: "id",
        },
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      distance: {
        type: DataTypes.INTEGER,
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
