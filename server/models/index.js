const sequelize = require("./../db.js");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "user" },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});
const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  describtion: { type: DataTypes.TEXT },
  type: { type: DataTypes.STRING },
  image: { type: DataTypes.TEXT },
  price: { type: DataTypes.INTEGER },
});

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
  comment: { type: DataTypes.STRING },
  date: { type: DataTypes.STRING },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER },
});

const Like = sequelize.define("like", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
});

Product.hasMany(Comment);
Comment.belongsTo(Product);

Product.hasMany(Like);
Like.belongsTo(Product);

Product.hasMany(Rating);
Rating.belongsTo(Product);

module.exports = {
  User,
  Product,
  Comment,
  Rating,
  Like,
};
