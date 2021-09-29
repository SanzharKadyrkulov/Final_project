const express = require("express");
const LikeController = require("../controllers/likeController.js");
const router = express.Router();

router.post("/", LikeController.create);
router.delete("/:id", LikeController.delete);

module.exports = router;
