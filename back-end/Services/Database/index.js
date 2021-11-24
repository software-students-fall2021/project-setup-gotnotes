require("dotenv").config({ path: "../../.env" });
var mongoose = require("mongoose");
var mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
console.log("Connected to MongoDB");
