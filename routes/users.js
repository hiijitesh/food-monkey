const { userController } = require("../controllers");
const { isAuthenticated } = require("../utils/auth");
const router = require("express").Router();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.post("/logout", userController.userLogout);

router.post("/access-token", userController.getAccessToken);

router.post("/add-email", isAuthenticated, userController.addUserEmail);
router.post("/profileImage", isAuthenticated, userController.addProfilePhoto);
router.get("/all", isAuthenticated, userController.getAllUsers);

router.get("/:phone", isAuthenticated, userController.getUserById);

module.exports = router;
