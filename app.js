/* eslint-disable no-console */
const express = require("express");
const PORT = process.env.PORT || 6400;

const { dbConnection } = require("./configs/db.config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/users");
const router = require("./routes");
const { isAuthenticated } = require("./utils/auth");

app.use("/user", userRouter);
app.use(isAuthenticated, router);

dbConnection()
  .then(function () {
    app.listen(PORT, function () {
      console.log(`Server is running on the port ${PORT} ✳️ ✳️ ✳️`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
