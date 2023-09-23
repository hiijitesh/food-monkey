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
      lat: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
      long: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: true,
      },
    },
    { freezeTableName: true },
    {
      timestamps: true,
    },
  );
  return location;
};
