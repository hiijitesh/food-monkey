module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define(
    "restaurant",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      OwnerId: {
        type: DataTypes.INTEGER, // user's phone
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },

      address: {
        type: DataTypes.INTEGER, // reference of Address Table
        allowNull: false,
        references: {
          model: "address",
          key: "id",
        },
      },

      menu: {
        type: DataTypes.INTEGER, // menu Table
        allowNull: true,
      },

      rating: {
        type: DataTypes.INTEGER, // rating table
        allowNull: true,
      },

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
