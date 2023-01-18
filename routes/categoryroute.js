module.exports = () => {
  const categoryRoute = require("express-promise-router")();
  const dotenv = require("dotenv");
  var categoryController = require("../controllers/categoriesController");
  dotenv.config();

  categoryRoute.route("/addCategories").post(categoryController.addCategory);

  categoryRoute.route("/getCategories").get(categoryController.getCategory);
  categoryRoute.route("/id").get(categoryController.getCategory);

  categoryRoute.route("/editCategories").put(categoryController.editCategory);

  categoryRoute
    .route("/deletCategories")
    .delete(categoryController.deleteCategory);

  return categoryRoute;
};
