const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator");
const { createCategorie } = require("../controller/categorieC");
const router = Router();

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    fieldValidator,
  ],
  createCategorie
);
//aun faltan mas rutas get, update, delete

module.exports = router;
