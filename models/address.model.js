module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    "address",
    {
      pin: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },

      streetName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      houserNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      flatNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      landmark: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      locationId: {
        type: DataTypes.STRING,
        // references: {
        //   model: "location",
        //   key: "id",
        // },
        allowNull: false,
      },
    },
    { timestamps: true },
  );
  return address;
};
