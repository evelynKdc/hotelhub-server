const { model, Schema } = require("mongoose");

const roomSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  address: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  estatus: {
    type: Boolean,
    default: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
  availableDates: [Date],
  img: [String],
  amenities:{
    type: Array,
    default: []
  } ,


});

module.exports = model("Room", roomSchema);
