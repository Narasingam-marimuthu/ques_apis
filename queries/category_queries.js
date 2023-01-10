const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ques_app",
  password: "postgres",
  port: 5432,
});
const getCategory = (req, res) => {
  pool.query("SELECT * FROM categories ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM categories WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const addCategory = (req, res) => {
  console.log(req.body);
  const { category_name } = req.body;

  pool.query(
    "INSERT INTO categories(category_name) VALUES ($1)",
    [category_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Category added with ID: ${results.insertId}`);
    }
  );
};

const updateCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const { category_name } = req.body;

  pool.query(
    "UPDATE categories SET category_name = $1 WHERE id = $2",
    [category_name, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM categories WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
