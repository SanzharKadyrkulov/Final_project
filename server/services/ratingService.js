const { Rating } = require("../models/index.js");

class RatingService {
  static create = async ({ email, rating, productId }) => {
    return await Rating.create({
      email,
      rating,
      productId,
    });
  };
}

module.exports = RatingService;
