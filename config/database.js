/**
 * @file Manages database connection configuration.
 * @author Kelompok 4 - FSW 2
 */

const { Sequelize } = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "CijwzWZcgqo5YP1blW5c",
  DB_HOST = "containers-us-west-129.railway.app",
  DB_NAME = "railway",
  DB_PORT = "7906",
  DB_URI = "postgresql://postgres:CijwzWZcgqo5YP1blW5c@containers-us-west-129.railway.app:7906/railway"
} = process.env;

const db = new Sequelize(DB_URI, {
  define:{
    timestamps:false
  }
})

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT
  },
  db
};
