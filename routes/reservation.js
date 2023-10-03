const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator");
const { createReaservation, getReservation } = require("../controller/reservationC");
const router = Router();

router.post(
  "/:id",
  [
    check("id", "id is required").isMongoId(),
    fieldValidator,
  ],
  createReaservation
);

router.get(
    "/:id",
    [
      check("id", "id is required").isMongoId(),
      fieldValidator,
    ],
    getReservation
  );

module.exports = router