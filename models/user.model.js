module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      phone: {
        type: DataTypes.STRING, // primary key
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

      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      isOwner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      isDeliverBoy: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      totalOrder: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

      numberOfShop: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    { timestamps: true },
  );
  return user;
};
