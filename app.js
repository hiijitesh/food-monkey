/* eslint-disable no-console */
const express = require("express");
const PORT = process.env.PORT || 6400;

const { dbConnection } = require("./models");
const app = express();

app.use(express.json());

dbConnection()
  .then(function () {
    app.listen(PORT, function () {
      console.log(`Server is running on the port ${PORT} ✳️ ✳️ ✳️`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
