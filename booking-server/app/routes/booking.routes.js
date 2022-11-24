module.exports = app => {
  const booking = require("../controllers/booking.controller.js");

  var router = require("express").Router();

  router.post("/", booking.create);
  router.get("/", booking.findAll);
  app.use("/api/booking", router);
};
