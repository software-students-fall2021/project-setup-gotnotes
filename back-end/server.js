require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_MINUTES = process.env.JWT_EXPIRATION_MINUTES
const check_jwt = require('./Services/Auth')

const { accountRouter, chatRouter, searchRouter, authRouter } = require("./Routes");
const { db_connect } = require("./Services/Database");
const validate = require("./Services/Validation");
const User = require("./Models/User");
const db = db_connect();

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/unis", searchRouter.unisRouter);
app.use("/unis/:uni", searchRouter.coursesRouter);
app.use("/unis/:uni/:course", searchRouter.filesRouter);
app.use("/unis/:uni/:course/:file", searchRouter.fileRouter);

app.use("/chats", chatRouter);
app.use("/account", accountRouter);

app.use("/signup", authRouter.signupRouter);
app.use("/login", authRouter.loginRouter);
app.use("/admin", authRouter.adminRouter);

app.listen(PORT, () => {
  console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
});
