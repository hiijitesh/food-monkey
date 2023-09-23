const { userController } = require("../controllers/");
const { isAuthenticated } = require("../utils/auth");
const router = require("express").Router();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.post("/logout", userController.userLogout);
router.post("/access-token", userController.getAccessToken);
router.post("/add-email", isAuthenticated, userController.addUserEmail);

module.exports = router;
