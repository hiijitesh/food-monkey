module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    "address",
    {
      addressId: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      pin: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "location",
          key: "locationId",
        },
        allowNull: true,
      },

      streetName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      houserNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      flatNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      landmark: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: true },
  );
  return address;
};
