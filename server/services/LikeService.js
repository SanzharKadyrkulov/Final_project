const { Like } = require("../models");
const ErrorHandler = require("../utils/ErrorHandler.js");

class LikeService {
  static create = async ({ email, productId }) => {
    return await Like.create({
      email,
      productId,
    });
  };

  static delete = async (id) => {
    const school = await Like.findOne({ where: { id } });
    if (!school) throw ErrorHandler.BadRequest("Like not found");
    return await Like.destroy({ where: { id } });
  };
}

module.exports = LikeService;
