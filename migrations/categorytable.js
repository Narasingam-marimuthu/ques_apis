const knex = require("../knex");
exports.up = function () {
  return knex.schema.createTable("ques_category", function (table) {
    table.increments("id").notNullable().primary();
    table.string("category_name").notNullable();
  });
};

exports.down = function () {
  return knex.schema.dropTable("sysnx_users");
};
