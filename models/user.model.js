module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      addressId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "address",
          key: "addressId",
        },
      },

      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      isOwner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isDeliveryBoy: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      totalOrder: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

      numberOfShop: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { timestamps: true },
  );
  return user;
};
