module.exports = (sequelize, DataTypes) => {
    const location = sequelize.define(
        "locations",
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

            userId: {
                type: DataTypes.STRING(255),
                allowNull: false,
                references: {
                    model: "users",
                    key: "phone",
                },
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
        { timestamps: true },
    );
    return location;
};
