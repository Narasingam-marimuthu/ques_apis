module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "marine_ques",
      charset: "utf8",
      pool: {
        min: 2,
        max: 5,
      },
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "marine_ques",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
