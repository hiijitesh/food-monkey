module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    "location",
    {
      // coordinates: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   value: [],
      //   defaultValue: [0, 0],
      //   allowNull: true,
      // },
      locationId: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      lat: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: true,
      },
      long: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    },
  );
  return location;
};
