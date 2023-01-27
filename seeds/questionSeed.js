const knex = require("../knex");
const crypto = require("crypto");

exports.seed = async function (promise) {
  let tableName1 = "questions";
  let tableName2 = "options";
  let allQuestions = [
    {
      id: crypto.randomUUID(),
      category: 4,
      title: "",
      question: `hello , are you there ?    `,
      answer: 2,
      mark: 1,
    },
  ];
  let options = [{ option1: `yes`, option2: `no` }];
  for (let index = 0; index < allQuestions.length; index++) {
    let query = knex(tableName1)
      .where({ question: allQuestions[index].question.trim() })
      .andWhere("isdeleted", 1)
      .first();
    let results = await query;
    if (!results || !results.id) {
      let [question] = await knex
        .insert(allQuestions[index])
        .into(tableName1)
        .returning("*");
      await knex
        .insert({ ...options[index], question: allQuestions.id })
        .into(tableName2);
    }
  }
};
