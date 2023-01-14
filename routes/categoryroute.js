module.exports = () => {
  const categoryRoute = require("express-promise-route");
  const dotenv = require("dotenv");
  var categoryController = require("../controllers/categoriesController");
  dotenv.config();

  categoryRoute.route("/addCategories").post(categoryController.addCategory);
};
