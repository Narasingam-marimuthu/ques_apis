const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
// const multer = require("multer");
// const db = require("./queries/category_queries");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
const upload = require("./uploadmiddleware");
app.use(upload);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("Hello From Team Yaash");
});
// error handler
app.use(function (err, req, res, next) {
  console.log("unknown error", err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});
app.listen(port, function () {
  console.log(`Run on ${port} `);
});

// app.get("/categories", db.getCategory);
// app.get("/categorie/:id", db.getCategoryById);
// app.post("/categorie", db.addCategory);
// app.put("/categorie/:id", db.updateCategory);
// app.delete("/categorie/:id", db.deleteCategor

const categoryRoute = require("./routes/categoryroute")();
app.use("/categories", categoryRoute);
