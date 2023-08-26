const { model, Schema } = require("mongoose");

const categorieSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  estatus: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Categorie", categorieSchema);
