const { addressController } = require("../controllers");
const router = require("express").Router();

router.post("/new", addressController.createAddress);
router.get("/all", addressController.getAddressByUserId);
router.put("/update", addressController.updateAddress);

router.get("/:addressId", addressController.getAddressById);

module.exports = router;
