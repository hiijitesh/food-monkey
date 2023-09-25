const { addressController } = require("../controllers/");
const { isAuthenticated } = require("../utils/auth");
const router = require("express").Router();

router.post("/new", addressController.createAddress);

module.exports = router;
