const { model, Schema } = require("mongoose");

const hotelSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    required: [true, "El correo es requerido"],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  estatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Hotel", hotelSchema);