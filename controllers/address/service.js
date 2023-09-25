const { AddressModel } = require("../../models");

const addressServices = {
  addAddress: async (data) => {
    try {
      return await AddressModel.create(data);
    } catch (error) {
      return error;
    }
  },
};
module.exports = addressServices;
