module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      fullname: String,
      email: String,
      password:String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Registartion = mongoose.model("registration", schema);
  return Registartion;
};
