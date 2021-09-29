const LikeService = require("../services/LikeService");

class LikeController {
  static create = async (req, res, next) => {
    try {
      let { email, productId } = req.body;
      const profileData = {
        email,
        productId,
      };
      await LikeService.create(profileData);
      return res.json({ message: "Like created" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;

      await LikeService.delete(id);

      return res.json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = LikeController;
