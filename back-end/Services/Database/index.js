require("dotenv").config();
const mongoose = require("mongoose");

exports.db_connect = function db_connect() {
    
    const db_url = process.env.TEST ? process.env.DB_URL_TEST : process.env.DB_URL;
    mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    return db;
}
