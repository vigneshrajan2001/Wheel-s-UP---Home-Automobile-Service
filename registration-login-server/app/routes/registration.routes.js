module.exports = app => {
  const registration = require("../controllers/registration.controller.js");

  var router = require("express").Router();

  router.post("/", registration.create);
  router.get("/", registration.findAll);
  app.use("/api/registration", router);
};
