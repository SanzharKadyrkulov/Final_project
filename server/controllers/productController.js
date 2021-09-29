const ProductService = require("../services/productService");

class ProductController {
  static getAll = async (req, res, next) => {
    try {
      let { _page, _limit, q, type } = req.query;
      _page = _page || 1;
      _limit = _limit || 3;
      const offset = _page * _limit - _limit;

      const products = await ProductService.getAll(offset, _limit, q, type);

      return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  static getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await ProductService.getOne(id);

      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      let { title, describtion, type, price, image } = req.body;
      // let { img } = req.files;
      const profileData = {
        title,
        describtion,
        type,
        price,
        image,
      };
      await ProductService.create(profileData);
      return res.json({ message: "product created" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      let { title, describtion, type, price, image } = req.body;
      const { id } = req.params;
      await ProductService.update({
        title,
        describtion,
        type,
        price,
        image,
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

      await ProductService.delete(id);

      return res.json({ message: "deleted" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ProductController;
