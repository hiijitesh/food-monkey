const router = require("express").Router();
const userRouter = require("./user.router");

router.use("*", (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log("=>", req.method, req.originalUrl);
  next();
});

// router.use("/user", userRouter);

router.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Not Found",
    route: req.originalUrl,
    method: req.method,
  });
});

module.exports = router;
