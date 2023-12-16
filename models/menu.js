module.exports = (sequelize, DataTypes) => {
    const menu = sequelize.define(
        "menu",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.ENUM("veg", "non-veg", "breakfast", "snacks", "main-course", "starter", "desserts"),
                defaultValue: "veg",
                allowNull: false,
            },
        },
        {
            timestamps: true,
            freezeTableName: true,
        },
    );

    return menu;
};
