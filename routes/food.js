const { foodController } = require("../controllers");
const router = require("express").Router();

router.post("/new", foodController.createFood);
router.get("/all", foodController.getAllFood);
router.put("/update", foodController.updateFoodById);

router.get("/:id", foodController.getFoodById);

module.exports = router;
