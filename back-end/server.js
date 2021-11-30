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


app.post("/login", async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (usernameOrEmail && password) {
    try {
      await User.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      }).then(async (user) => {
        if (!user) throw new Error("Incorrect Password or Email");

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) throw new Error("Incorrect Password or Email");

        const token = jwt.sign(
          { email: user.email, username: user.username },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRATION_MINUTES }
        );

        res.json([{ token: `Bearer ${token}` }]);
      });
    } catch (error) {
      res.json([{ error: error.message }]);
    }
  } else {
    res.json([{ error: "Please enter all fields" }]);
  }
});

app.listen(PORT, () => {
  console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
});
