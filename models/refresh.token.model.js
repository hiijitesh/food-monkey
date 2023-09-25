module.exports = (sequelize, DataTypes) => {
  const refreshToken = sequelize.define(
    "refreshToken",
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING(255),
        references: {
          model: "users",
          key: "phone",
        },
      },
    },
    { timestamps: false },
  );
  return refreshToken;
};
