"use strict";
const Category = require("../models/categoryModel");
const categoryroute = require("../routes/categoryroute");
module.exports = {
  addCategory: async (req, res, next) => {
    console.log(req, "req");
    let results = await Category.addCategory(req);
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, data: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, data: {} });
    }
  },
  getCategory: async (req, res, next) => {
    let results = await Category.getCategory();
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, data: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, data: {} });
    }
  },
  getCategoryById: async (req, res, next) => {
    let result = await Category.getCategoryById(req);
    if (result.success) {
      res
        .status(200)
        .send({ status: 1, message: result.message, result: result.data });
    } else {
      res.status(400).send({ status: 0, message: result.message, result: {} });
    }
  },
  editCategory: async (req, res, next) => {
    // console.log(req, "req");

    let results = await Category.editCategory(req);
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, data: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, data: {} });
    }
  },
  deleteCategory: async (req, res, next) => {
    let results = await Category.deleteCategory(req.body);
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, data: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, data: {} });
    }
  },
};
