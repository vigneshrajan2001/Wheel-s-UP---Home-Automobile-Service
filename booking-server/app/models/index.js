const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const { application } = require("express");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.booking = require("./booking.model.js")(mongoose);

module.exports = db;
