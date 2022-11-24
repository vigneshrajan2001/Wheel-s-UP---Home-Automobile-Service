const { booking } = require("../models");
const db = require("../models");
const bookingModel = require("../models/booking.model");
const Booking = db.booking;

exports.create = (req, res) => {
  const booking = new Booking({
    Vehicle:req.body.Vehicle,
    Vehiclemanufacturer:req.body.Vehiclemanufacturer,
    Vehiclemodel:req.body.Vehiclemodel,
    Mobilenum:req.body.Mobilenum,
    Address:req.body.Address,
    Fueltype:req.body.Fueltype,
    Servicedate:req.body.Servicedate,
  });

  booking
    .save(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while Booking the Service."
      });
    });
};
exports.findAll = (req, res) => {
  const Vehicle= req.query.Vehicle;
  var condition = Vehicle ? { Vehicle: { $regex: new RegExp(Vehicle), $options: "i" } } : {};

  Booking.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while booking."
      });
    });
};