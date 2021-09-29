const express = require("express");
const router = express();

const userRoutes = require("./userRoutes.js");
const authRoutes = require("./authRoutes.js");
const productRoutes = require("./productRoutes.js");
const commentRoutes = require("./commentRoutes.js");
const ratingRoutes = require("./ratingRoutes.js");
const likeRoutes = require("./likeRoutes.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.use("/user", userRoutes);
router.use("/", authRoutes);
router.use("/Products", productRoutes);
router.use("/comments", commentRoutes);
router.use("/rating", ratingRoutes);
router.use("/like", likeRoutes);

module.exports = router;
