const { Router } = require("express");
const { check } = require("express-validator");
const { registerAuth, loginAuth } = require("../controller/authC");
const { fieldValidator } = require("../middlewares/validator");
const router = Router();

router.post(
  "/register",
  [
    check("name", "name is required").not().isEmpty(),
    check("lastname", "lastname is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 6 }),
    check("phone", "phone is required").isLength({ min: 9, max: 9 }),
    fieldValidator,
  ],
  registerAuth
);
router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    fieldValidator,
  ],
  loginAuth
);
module.exports = router;
