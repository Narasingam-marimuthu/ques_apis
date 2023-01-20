const knex = require("../knex");
const dotenv = require("dotenv");
const crypto = require("crypto");
const fileupload = require("../common/fileupload");
dotenv.config();

class Category {
  static async addCategory(req) {
    console.log(req.files.image, "req");
    try {
      let query = knex(process.env.CATEGORY).insert({
        id: crypto.randomUUID(),
        category_name: req.body.category_name,
        image: fileupload.imageLoop(req.files),
      });
      await query;
      return {
        success: true,
        message: "Category Added Successfully",
        data: {},
      };
    } catch (err) {
      return {
        success: false,
        message: err.message,
        data: {},
      };
    }
  }
  static async getCategory() {
    try {
      let query = knex(process.env.CATEGORY).select("id", "category_name");
      let results = await query;
      return { success: true, message: "Category list", data: results };
    } catch (err) {
      return {
        success: false,
        message: "Error occured while fetching learntype data",
        data: {},
      };
    }
  }
  static async getCategoryById(req) {
    console.log(req, "req");
    try {
      let id = req.params.id;
      let query = knex(process.env.CATEGORY)
        .where({ id: id })
        .select("category_name");
      let results = await query;
      return { success: true, message: "Category list", data: results };
    } catch (err) {
      return {
        success: false,
        message: "Error occured while fetching learntype data",
        data: {},
      };
    }
  }
  static async editCategory(req) {
    // console.log(req, "req");

    try {
      let id = req.params.id;
      let query = knex(process.env.CATEGORY).where({ id: id }).update({
        category_name: req.body.category_name,
      });
      await query;
      return { success: true, message: "Successfully edited", data: {} };
    } catch (err) {
      return {
        success: false,
        message: err.message,
        data: {},
      };
    }
  }

  static async deleteCategory(req) {
    try {
      let id = req.params.id;
      let query = knex(process.env.CATEGORY).where({ id: id }).del();
      await query;
      return { success: true, message: "Successfully Deleted", data: {} };
    } catch (err) {
      return {
        success: false,
        message: err.message,
        data: {},
      };
    }
  }
}

module.exports = Category;
