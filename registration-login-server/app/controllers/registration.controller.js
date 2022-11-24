const { registration } = require("../models");
const db = require("../models");
const registrationModel = require("../models/registration.model");
const Registration = db.registration;

exports.create = (req, res) => {
  const registration = new Registration({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  });

  registration
    .save(registration)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Registration."
      });
    });
};
exports.findAll = (req, res) => {
  const email= req.query.email;
  var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};

  Registration.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};