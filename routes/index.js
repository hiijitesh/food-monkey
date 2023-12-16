const router = require("express").Router();
const addressRouter = require("./address");
const foodRouter = require("./food");
const userRouter = require("./users");

router.use("*", (req, res, next) => {
    // eslint-disable-next-line no-console
    console.log("=>", req.method, req.originalUrl);
    next();
});

router.use("/address", addressRouter);
router.use("/food", foodRouter);
router.use("/users", userRouter);

router.use("*", (req, res) => {
    return res.status(404).json({
        message: "Not Found",
        route: req.originalUrl,
        method: req.method,
    });
});

module.exports = router;
