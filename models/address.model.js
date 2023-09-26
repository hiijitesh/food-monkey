module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    "address",
    {
      pin: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      addressId: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: "location",
          key: "locationId",
        },
        allowNull: true,
      },

      // customerId: {
      //   type: DataTypes.STRING(255)
      //   allowNull: true,
      //   references: {
      //     model: "users",
      //     key: "phone",
      //   },
      // },

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
