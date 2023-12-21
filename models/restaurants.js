module.exports = (sequelize, DataTypes) => {
    const restaurant = sequelize.define(
        "restaurants",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            addressId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "addresses",
                    key: "addressId",
                },
            },

            ownerId: {
                type: DataTypes.STRING(255),
                allowNull: false,
                references: {
                    model: "users",
                    key: "phone",
                },
            },

            menuId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "menu",
                    key: "id",
                },
            },

            // rating: {
            //   type: DataTypes.INTEGER, // rating table
            //   allowNull: true,
            // },

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

            totalOrders: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
        },
        { timestamps: true },
    );
    return restaurant;
};
