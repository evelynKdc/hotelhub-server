const { model, Schema } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  lastname: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    required: [true, "El correo es requerido"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  phone: {
    type: String,
    required: true,
  },
  estatus: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  }
});

module.exports = model("User", userSchema);
