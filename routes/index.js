const router = require("express").Router();
const addressRouter = require("./address.router");

router.use("*", (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log("=>", req.method, req.originalUrl);
  next();
});

router.use("/address", addressRouter);

router.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Not Found",
    route: req.originalUrl,
    method: req.method,
  });
});

module.exports = router;
