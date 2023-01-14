const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const db = require("./queries/category_queries");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Hello From Team Yaash");
});

app.listen(port, function () {
  console.log(`Run on ${port}`);
});

// app.get("/categories", db.getCategory);
// app.get("/categorie/:id", db.getCategoryById);
// app.post("/categorie", db.addCategory);
// app.put("/categorie/:id", db.updateCategory);
// app.delete("/categorie/:id", db.deleteCategory);
