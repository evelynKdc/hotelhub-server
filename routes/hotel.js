const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator");
const { createHotel } = require("../controller/hotelC");
const router = Router();

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("phone", "phone is required").isLength({ min: 9, max: 9 }),
    fieldValidator,
  ],
  createHotel
);
//aun faltan mas rutas get, update, delete

module.exports = router;
