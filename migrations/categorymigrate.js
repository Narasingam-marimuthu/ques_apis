const knex = require("../knex");
exports.up = function () {
  return knex.schema.createTable("categories", function (table) {
    table.uuid("id").primary();
    table.string("category_name").notNullable();
  });
};

exports.down = function () {
  return knex.schema.dropTable("categories");
};
