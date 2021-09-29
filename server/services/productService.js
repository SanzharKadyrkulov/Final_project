const { Product, Like, Rating, Comment } = require("./../models/index.js");
const { Op } = require("sequelize");
const ErrorHandler = require("../utils/ErrorHandler.js");

class ProductService {
  static getAll = async (offset, _limit, q, type) => {
    // const limit = _limit;
    console.log(type, q);
    if (type && q) {
      return await Product.findAndCountAll({
        where: {
          [Op.and]: [
            {
              title: {
                [Op.iLike]: q + "%",
              },
            },
            {
              type: {
                [Op.iLike]: type,
              },
            },
          ],
        },
        limit: _limit,
        offset,
        include: [
          { model: Comment, as: "comments" },
          { model: Rating, as: "ratings" },
          { model: Like, as: "likes" },
        ],
      });
    }
    if (type) {
      return await Product.findAndCountAll({
        where: { type: { [Op.like]: type } },
        limit: _limit,
        offset,
        include: [
          { model: Comment, as: "comments" },
          { model: Rating, as: "ratings" },
          { model: Like, as: "likes" },
        ],
      });
    }
    if (q) {
      console.log(q);
      return await Product.findAndCountAll({
        where: {
          title: {
            [Op.iLike]: q + "%",
          },
        },
        limit: _limit,
        offset,
        include: [
          { model: Comment, as: "comments" },
          { model: Rating, as: "ratings" },
          { model: Like, as: "likes" },
        ],
      });
    } else {
      return await Product.findAndCountAll({
        limit: _limit,
        offset,
        include: [
          { model: Comment, as: "comments" },
          { model: Rating, as: "ratings" },
          { model: Like, as: "likes" },
        ],
      });
    }
  };

  static getOne = async (id) => {
    const product = await Product.findOne({
      where: { id },
      include: [
        { model: Comment, as: "comments" },
        { model: Rating, as: "ratings" },
        { model: Like, as: "likes" },
      ],
      // include: [
      //   { model: Comment, as: "comments" },
      //   { model: Rating, as: "Rating" },
      // ],
    });

    if (!product) throw ErrorHandler.BadRequest("product not found");

    return product;
  };

  static create = async ({ title, describtion, type, price, image }) => {
    return await Product.create({
      title,
      describtion,
      type,
      price,
      image,
    });
  };

  static update = async ({ title, describtion, type, price, image, id }) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw ErrorHandler.BadRequest("product not found");

    // title = title || product.title;
    // describtion = describtion || product.describtion;
    // type = type || product.type;
    // price = price || product.price;
    // image = image || product.image;

    return await Product.update(
      { title, describtion, type, price, image },
      { where: { id } }
    );
  };

  static delete = async (id) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw ErrorHandler.BadRequest("product not found");
    return await Product.destroy({ where: { id } });
  };
}

module.exports = ProductService;
