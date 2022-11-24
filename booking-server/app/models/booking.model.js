module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Vehicle:String,
      Vehiclemanufacturer:String,
      Vehiclemodel:String,
      Mobilenum:String,
      Address:String,
      Fueltype:String,
      Servicedate:String,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Booking = mongoose.model("booking", schema);
  return Booking;
};
