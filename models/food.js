module.exports = (sequelize, DataType) => {
    const food = sequelize.define(
        "foods",
        {
            name: {
                type: DataType.STRING,
                allowNull: false,
            },

            quantity: {
                type: DataType.INTEGER,
                allowNull: false,
            },

            fullPrice: {
                type: DataType.INTEGER,
                allowNull: false,
            },

            halfPrice: {
                type: DataType.INTEGER,
                allowNull: true,
            },

            isMainCourse: {
                type: DataType.BOOLEAN,
                defaultValue: false,
            },

            isStarter: {
                type: DataType.BOOLEAN,
                defaultValue: false,
            },

            isVeg: {
                type: DataType.BOOLEAN,
                defaultValue: true,
            },

            isSnacks: {
                type: DataType.BOOLEAN,
                defaultValue: false,
            },

            isBreakfast: {
                type: DataType.BOOLEAN,
                defaultValue: false,
            },

            isDessert: {
                type: DataType.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return food;
};
