const knex = require("../knex");
exports.seed = async function (Promise) {
  let tableName = "ques_category";
  let rows = [
    {
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
