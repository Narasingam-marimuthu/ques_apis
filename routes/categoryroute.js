module.exports = () => {
  const categoryRoute = require("express-promise-router")();
  const dotenv = require("dotenv");
  var categoryController = require("../controllers/categoriesController");
  dotenv.config();

  categoryRoute.route("/addCategories").post(categoryController.addCategory);

  categoryRoute.route("/getCategories").get(categoryController.getCategory);
  categoryRoute
    .route("/getCategories/:id")
    .get(categoryController.getCategoryById);

  categoryRoute
    .route("/editCategories/:id")
    .put(categoryController.editCategory);

  categoryRoute
    .route("/deleteCategories")
    .delete(categoryController.deleteCategory);

  return categoryRoute;
};
