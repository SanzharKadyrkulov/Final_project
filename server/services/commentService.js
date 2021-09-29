const { Comment } = require("../models");
const ErrorHandler = require("../utils/ErrorHandler.js");

class CommentService {
  static create = async ({ email, comment, date, productId }) => {
    return await Comment.create({
      email,
      comment,
      date,
      productId,
    });
  };

  static update = async (profileData) => {
    let { email, comment, date, productId } = profileData;

    const profile = await Comment.findOne({ where: { id } });
    if (!profile) throw ErrorHandler.BadRequest("Comment not found");

    email = email || profile.email;
    comment = comment || profile.comment;
    date = date || profile.date;
    productId = productId || profile.productId;

    return await Comment.update(
      { email, comment, date, productId },
      { where: { id } }
    );
  };
  static delete = async (id) => {
    const school = await Comment.findOne({ where: { id } });
    if (!school) throw ErrorHandler.BadRequest("Comment not found");
    return await Comment.destroy({ where: { id } });
  };
}

module.exports = CommentService;
