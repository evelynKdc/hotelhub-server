const { model, Schema } = require("mongoose");

const hotelSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  address: {
    type: String,
    required: true,
  },
  estatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Hotel", hotelSchema);
