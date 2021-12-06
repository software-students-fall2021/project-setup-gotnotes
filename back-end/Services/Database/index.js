require("dotenv").config();
const mongoose = require("mongoose");

exports.db_url = process.env.TEST
  ? process.env.DB_URL_TEST
  : process.env.DB_URL;

exports.connection = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(exports.db_url, connectionParams);
    console.log("Connected to Database at ", exports.db_url);
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
