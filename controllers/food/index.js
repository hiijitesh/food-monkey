const foodServices = require("./services");
const { errorResponse, invalidFieldResponse, successResponse } = require("../../utils");

const controllers = {
    createFood: async (req, res) => {
        try {
            const {
                name,
                quantity,
                fullPrice,
                halfPrice,
                isMainCourse,
                isStarter,
                isVeg,
                isSnacks,
                isBreakfast,
                isDessert,
            } = req.body;

            //   const user = req.user;
            // TODO: get restaurant id from restaurant table with user phone

            if (!name || !quantity || !fullPrice || !halfPrice) {
                return invalidFieldResponse(res, "These fields can't be empty");
            }

            const foodObj = {
                name,
                quantity,
                fullPrice,
                halfPrice,
                isMainCourse,
                isStarter,
                isVeg,
                isSnacks,
                isBreakfast,
                isDessert,
                // menuId:
            };
            const food = await foodServices.addFood(foodObj);
            return successResponse(res, food, "Food added successfully!");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "Food creation failed, try again");
        }
    },

    getAllFood: async (req, res) => {
        try {
            const { page, perPage } = req.body;
            //   const user = req.user;

            // TODO: get restaurant id from restaurant table
            const offset = (page - 1) * perPage;
            const limit = perPage;
            const food = await foodServices.allFood(limit, offset);
            return successResponse(res, food, "Food fetch successfully!");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "Food fetch failed, try again!");
        }
    },

    getFoodById: async (req, res) => {
        try {
            const { id } = req.params;
            //   const user = req.user;

            const food = await foodServices.foodById(id);
            return successResponse(res, food, "Food fetch successfully!");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "Food fetch failed, try again!");
        }
    },

    updateFoodById: async (req, res) => {
        try {
            const {
                id,
                name,
                quantity,
                fullPrice,
                halfPrice,
                isMainCourse,
                isStarter,
                isVeg,
                isSnacks,
                isBreakfast,
                isDessert,
            } = req.body;

            const updateObj = {
                name,
                quantity,
                fullPrice,
                halfPrice,
                isMainCourse,
                isStarter,
                isVeg,
                isSnacks,
                isBreakfast,
                isDessert,
                // menuId:
            };

            const food = await foodServices.editFood(id, updateObj);
            return successResponse(res, food, "Food update successfully!");
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, error.message, "Food update failed, try again!");
        }
    },
};

module.exports = controllers;
