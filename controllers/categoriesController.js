"use strict";
const categories = require("../models/categoryModel");
module.exports = {
  addCategory: async (req, res, next) => {
    let results = await categories.addCategory(req.body);
    if (results.success) {
      res
        .status(200)
        .send({ status: 1, message: results.message, data: results.data });
    } else {
      res.status(400).send({ status: 0, message: results.message, data: {} });
    }
  },
};
