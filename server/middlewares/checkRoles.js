const ErrorHandler = require("../utils/ErrorHandler");

const checkRole = () => {
  return (req, res, next) => {
    try {
      const { user } = req;
      console.log(user);
      if (user.role !== "admin") {
        return next(ErrorHandler.ForbiddenError("У вас нет доступа"));
      }

      next();
    } catch (e) {
      return next(ErrorHandler.UnauthorizedError());
    }
  };
};

module.exports = checkRole;
