const express = require("express");
const CommentController = require("./../controllers/commentController.js");
const router = express.Router();

router.post("/", CommentController.create);
router.patch("/:id", CommentController.update);
router.delete("/:id", CommentController.delete);

module.exports = router;
