const { AddressModel } = require("../../models");

const addressServices = {
    addAddress: async (data) => {
        try {
            return await AddressModel.create(data);
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    },

    addressById: async (addressId) => {
        try {
            return await AddressModel.findOne({
                where: { addressId },
            });
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    },

    addressByPhone: async (phone, limits, offsets) => {
        try {
            return await AddressModel.findAll({
                where: { customerId: phone },
                // include: [
                //     {
                //         model: AddressModel,
                //         // as: "address", // Use the same alias as defined in the association
                //     },
                // ],
                limit: limits,
                offset: offsets,
            });
        } catch (error) {
            console.error(error.message);
            return error.message;
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
            console.error(error.message);
            return error.message;
        }
    },
};
module.exports = addressServices;
