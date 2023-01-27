const knex = require("../knex");
exports.up = function () {
  return (
    knex.schema
      // .createTable("questions_type", function (table) {
      //   table.uuid("id").primary();
      //   table.string("name").nullable();
      //   table.text("description", "longtext").nullable();
      //   table.smallint("isactive").defaultTo(1);
      //   table.integer("isdeleted").defaultTo(1);
      //   table.timestamp("createddate").defaultTo(knex.fn.now());
      //   table.timestamp("modifieddate").defaultTo(knex.fn.now());
      // })
      .createTable("questions", function (table) {
        table.uuid("id").primary();
        table.integer("category").references("id").inTable("categories");
        table.integer("type").references("id").inTable("questions_type");
        table.text("title", "longtext").nullable();
        table.text("question", "longtext").nullable();
        table.integer("answer").defaultTo(0);
        table.integer("mark").defaultTo(0);
        table.smallint("isactive").defaultTo(1);
        table.integer("isdeleted").defaultTo(1);
        table.timestamp("createddate").defaultTo(knex.fn.now());
        table.timestamp("modifieddate").defaultTo(knex.fn.now());
      })
      .createTable("options", function (table) {
        table.increments("id").notNullable().primary();
        table.integer("question").references("id").inTable("questions");
        table.string("option1").nullable();
        table.string("option2").nullable();
      })
  );
};

exports.down = function () {
  return knex.schema.dropTable("questions_type");
};
