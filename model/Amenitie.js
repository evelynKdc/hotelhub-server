const { model, Schema } = require("mongoose");

const amenitieSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  price: {
    type: Number,
    required: true,
  },
  estatus: {
    type: Boolean,
    default: true,
  },

});

module.exports = model("Amenitie", amenitieSchema);