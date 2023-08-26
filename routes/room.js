const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator"); 
const { createRoom, getRooms, getRoomsById } = require("../controller/roomC");
const router = Router();


router.get("/", getRooms);
router.get("/:id", [
  check("id", "Is a mongo id not valid").isMongoId(),
  fieldValidator
] ,getRoomsById);
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("address", "address is required").not().isEmpty(),
    check("capacity", "capacity is required").isNumeric(),
    check("price", "price is required").isNumeric(),
    check("hotel", "hotel is required").isMongoId(),
    check("categorie", "categorie is required").isMongoId(),
    check("startDay", "startDay is required").not().isEmpty(),
    check("endDay", "endDay is required").not().isEmpty(),
    check("img", "img is required").isArray(),
    check("amenities", "amenities is required").isArray(),
    fieldValidator,
  ],
  createRoom
);
//aun faltan mas rutas get, update, delete

module.exports = router;
