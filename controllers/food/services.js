const { FoodModel } = require("../../models");

const foodServices = {
  addFood: async (foodObject) => {
    try {
      return await FoodModel.create(foodObject);
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  editFood: async (foodId, foodObject) => {
    try {
      return await FoodModel.update({ foodObject }, { where: { id: foodId } });
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  foodById: async (foodId) => {
    try {
      return await FoodModel.findOne({ where: { id: foodId } });
    } catch (error) {
      console.error(error);
      return error;
    }
  },

  allFood: async (limits, offsets) => {
    try {
      return await FoodModel.findAll({ limit: limits, offset: offsets });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
module.exports = foodServices;
