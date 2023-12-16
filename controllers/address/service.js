const { AddressModel } = require("../../models");

const addressServices = {
    addAddress: async (data) => {
        try {
            return await AddressModel.create(data);
        } catch (error) {
            return error;
        }
    },

    addressById: async (addressId) => {
        try {
            return await AddressModel.findOne({
                where: { addressId },
            });
        } catch (error) {
            return error;
        }
    },

    addressByPhone: async (phone, limits, offsets) => {
        try {
            return await AddressModel.findAll({
                where: { customerId: phone },
                // include: [
                //   {
                //     model: AddressModel,
                //     as: "address", // Use the same alias as defined in the association
                //   },
                // ],
                limit: limits,
                offset: offsets,
            });
        } catch (error) {
            return error;
        }
    },

    editAddress: async (addressId, phone, updateObj) => {
        try {
            return await AddressModel.update(
                { updateObj },
                {
                    where: { addressId: addressId, customerId: phone },
                },
            );
        } catch (error) {
            return error;
        }
    },
};
module.exports = addressServices;
