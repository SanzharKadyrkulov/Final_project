const CommentService = require("../services/commentService");

class CommentController {
  static create = async (req, res, next) => {
    try {
      let { email, comment, date, productId } = req.body;
      const profileData = {
        email,
        comment,
        date,
        productId,
      };
      await CommentService.create(profileData);
      return res.json({ message: "comment created" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      let { email, comment, date, productId } = req.body;
      const { id } = req.params;
      await CommentService.update({
        email,
        comment,
        date,
        productId,
        id,
      });
      return res.json({ message: "updated" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;

      await CommentService.delete(id);

      return res.json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CommentController;
