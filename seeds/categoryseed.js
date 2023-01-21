const knex = require("../knex");
const crypto = require("crypto");

exports.seed = async function (Promise) {
  let tableName = "categories";
  let rows = [
    {
      id: crypto.randomUUID(),
      category_name: "super",
    },
  ];

  for (let index = 0; index < rows.length; index++) {
    let query = knex(tableName).where(
      "category_name",
      rows[index].category_name.trim()
    );
    let results = await query;
    if (results.length) {
    } else {
      await knex.insert(rows[index]).into(tableName);
    }
  }
};
