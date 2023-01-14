const knex = require("../knex");

class Category {
  static async addCategory(req) {
    try {
      let query = knex(categories).insert({
        category_name: req.category_name,
      });
      await query;
      return {
        success: true,
        massage: "Category Added Successfully",
        data: {},
      };
    } catch (err) {
      return {
        success: false,
        massage: err.message,
        data: {},
      };
    }
  }
}

module.exports = Category;
