const { model, Schema } = require("mongoose");

const reservationSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  guest: {
    type: Number,
    required: true
  },
  additions: {
    type: Array,
    default: []
  },
  estatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Reservation", reservationSchema);
