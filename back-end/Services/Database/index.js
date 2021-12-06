require("dotenv").config();
const mongoose = require("mongoose");

exports.db_url = process.env.TEST
  ? process.env.DB_URL_TEST
  : process.env.DB_URL;

mongoose.connect(exports.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

exports.db = mongoose.connection;
exports.db.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
