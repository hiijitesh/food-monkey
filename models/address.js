module.exports = (sequelize, DataTypes) => {
    const address = sequelize.define(
        "addresses",
        {
            addressId: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER(1),
                references: {
                    model: "users",
                    key: "phone",
                },
            },
            pin: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            locationId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "locations",
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
