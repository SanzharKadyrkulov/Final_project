const express = require("express");
const RatingController = require("../controllers/ratingController");
const router = express.Router();

router.post("/", RatingController.create);
// router.patch("/:id", RatingController.update);
// router.delete("/:id", RatingController.delete);

module.exports = router;
