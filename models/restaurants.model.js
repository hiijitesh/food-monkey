module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define(
    "restaurant",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      OwnerId: {
        type: DataTypes.STRING(255), // user's phone
        allowNull: false,
        references: {
          model: "user",
          key: "phone",
        },
      },

      address: {
        type: DataTypes.STRING(255), // reference of Address Table
        allowNull: false,
        references: {
          model: "address",
          key: "pin",
        },
      },

      // menu: {
      //   type: DataTypes.STRING(255), // menu Table
      //   allowNull: true,
      //   references: {
      //     model: "menu",
      //     key: "id",
      //   },
      // },

      // rating: {
      //   type: DataTypes.INTEGER, // rating table
      //   allowNull: true,
      // },

      openTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      closeTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      shopImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      totalOrder: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    { timestamps: true },
  );
  return restaurant;
};
