const { AddressModel } = require("../../models");
const locationModel = require("../../models/location.model");
const { errorResponse, invalidFieldResponse, successResponse } = require("../../utils");

const addressServices = require("./service");

const addressControllers = {
  createAddress: async (req, res) => {
    try {
      const { pin, streetName, houserNumber, flatNumber, landmark, lat, long } = req.body;

      const user = req.userInfo;

      if (!pin || !streetName || !houserNumber || !flatNumber) {
        return invalidFieldResponse(res, "These fields can't be empty");
      }

      // get location id using lat long
      const location = await locationModel.create({ lat, long });

      const addressObj = {
        pin,
        streetName,
        houserNumber,
        flatNumber,
        landmark,
        customerId: user.phone,
        locationId: location.locationId,
      };

      const address = await addressServices.addAddress(addressObj);
      console.log(address);
      return successResponse(res, address, "Address added successfully!");
    } catch (error) {
      return errorResponse(res, error.message, "address creation failed, try again");
    }
  },
};
module.exports = addressControllers;
