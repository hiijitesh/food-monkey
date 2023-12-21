module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define(
        "orders",
        {
            // foodId: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            //     references: {
            //         model: "foods",
            //         key: "id",
            //     },
            // },
            customerId: {
                type: DataTypes.INTEGER(1),
                references: {
                    model: "users",
                    key: "phone",
                },
            },

            deliveryBoyId: {
                type: DataTypes.STRING(255),
                allowNull: false,
                references: {
                    model: "users",
                    key: "phone",
                },
            },

            addressId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "addresses",
                    key: "addressId",
                },
            },

            restaurantId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "restaurants",
                    key: "id",
                },
            },

            price: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },

            distance: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },

            deliveryCharges: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: true,
            },
        },
        { timestamps: true },
    );
    return order;
};
