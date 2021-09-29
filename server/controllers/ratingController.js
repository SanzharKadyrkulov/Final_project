const RatingService = require("../services/ratingService");

class RatingController {
  static create = async (req, res, next) => {
    try {
      let { email, rating, productId } = req.body;
      const profileData = {
        email,
        rating,
        productId,
      };
      await RatingService.create(profileData);
      return res.json({ message: "rating created" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = RatingController;
