const { errorResponse, invalidFieldResponse, successResponse, forbiddenResponse } = require("../../utils");

const addressServices = require("./service");

const addressControllers = {
    createAddress: async (req, res) => {
        try {
            const { pin, streetName, houserNumber, flatNumber, landmark } = req.body;

            const user = req.user;

            if (!pin || !streetName || !houserNumber || !flatNumber) {
                return invalidFieldResponse(res, "These fields can't be empty");
            }

            // get location id using lat long
            const addressObj = {
                pin,
                streetName,
                houserNumber,
                flatNumber,
                landmark,
                customerId: user.phone,
                // locationId: location.locationId,
            };

            const address = await addressServices.addAddress(addressObj);
            return successResponse(res, address, "Address added successfully!");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "address creation failed, try again");
        }
    },

    getAddressByUserId: async (req, res) => {
        try {
            const { phone } = req.user;
            const { page, perPage } = req.body;
            if (!phone) {
                return forbiddenResponse(res, false, "your are not authorized");
            }
            const offset = (page - 1) * perPage;
            const limit = perPage;
            const data = await addressServices.addressByPhone(phone, limit, offset);

            return successResponse(res, data, "Done");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "address fetch failed, try again");
        }
    },

    getAddressById: async (req, res) => {
        try {
            const { phone } = req.user;
            const { addressId } = req.params;
            if (!phone) {
                return forbiddenResponse(res, false, "your are not authorized");
            }

            if (!addressId) {
                return invalidFieldResponse(res, addressId, "address id missing");
            }

            const data = await addressServices.addressById(addressId);

            return successResponse(res, data, "Done");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "address fetch failed, try again");
        }
    },

    updateAddress: async (req, res) => {
        try {
            const { phone } = req.user;
            const { pin, streetName, houserNumber, flatNumber, landmark, addressId } = req.body;

            if (!phone) {
                return forbiddenResponse(res, false, "your are not authorized");
            }
            if (!addressId) {
                return invalidFieldResponse(res, "provide address id");
            }

            const updateObj = {
                pin,
                streetName,
                houserNumber,
                flatNumber,
                landmark,
            };

            const add = await addressServices.editAddress(addressId, phone, updateObj);

            return successResponse(res, add, "address update");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "address updating failed, try again");
        }
    },
};
module.exports = addressControllers;
