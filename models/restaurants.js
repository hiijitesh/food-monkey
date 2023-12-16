module.exports = (sequelize, DataTypes) => {
    const restaurant = sequelize.define(
        "restaurant",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            addressId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "address",
                    key: "addressId",
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

            totalOrder: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
        },
        { timestamps: true },
    );
    return restaurant;
};
