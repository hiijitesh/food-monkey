module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define(
    "menus",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        values: ["veg", "non-veg", "breakfast, snacks", "main-course", "starter", "desserts"],
        defaultValue: "veg",
      },
    },
    {
      timestamps: true,
    },
  );
  return menu;
};
