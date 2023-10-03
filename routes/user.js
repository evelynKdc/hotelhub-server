const { Router } = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/validator");
const { userPut, userDelete } = require("../controller/userC");
const router = Router();

router.put(
  "/:id",
  [
    check("id", "is not a mongo id valid").isMongoId(),
    fieldValidator,
  ],
  userPut
);

router.delete(
    "/:id",
    [
      check("id", "is not a mongo id valid").isMongoId(),
      fieldValidator,
    ],
    userDelete
  );

module.exports = router;