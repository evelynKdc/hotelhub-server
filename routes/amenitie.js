const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator");
const { createAmenitie } = require("../controller/amenitieC");
const router = Router();

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("price", "price is required").isNumeric(),
    fieldValidator,
  ],
  createAmenitie
);
//aun faltan mas rutas get, update, delete

module.exports = router;
