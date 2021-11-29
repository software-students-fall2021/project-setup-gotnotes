require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;

const { accountRouter, chatRouter, searchRouter } = require("./Routes");
const { db_connect } = require("./Services/Database");
const validate = require("./Services/Validation");

const User = require("./Models/User");

const app = express();
const db = db_connect();

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

app.get("/admin", (req, res) => {
  console.log(req);
  res.send("Admin Request Received");
});

app.post("/admin", (req, res) => {});

app.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log(username, email, password, confirmPassword);

  //extra backend validation for direct api calls
  if (username && email && password && confirmPassword) {
    try {
      const err = validate(username, email, password, confirmPassword);
      console.log("validation err: ", err);
      if (err) throw new Error(err);

      await User.create({
        email: email,
        username: username,
        passwordHash: await bcrypt.hash(password, 10),
        isAdmin: false,
        userSubscribed: [],
        userLiked: [],
        userDisliked: [],
        userComments: [],
      }).then((err, newUser) => {
        if (err) throw new Error(err);
        console.log("user: ", newUser);

        const token = jwt.sign(
          { email: newUser.email, username: newUser.username },
          process.env.JWT_SECRET,
          { expiresIn: "30m" }
        );
        res.json([{ token: `Bearer ${token}` }]);
      });
    } catch (error) {
      if (error.message.includes("E11000") && error.message.includes("email"))
        error.message = "A user with that email already exists";
      if (error.message.includes("E11000") && error.message.includes("username"))
        error.message = "A user with that username already exists";
      res.json([{ error: error.message }]);
    }
  } else {
    res.json([{ error: "Please enter all fields" }]);
  }
});

app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  if ((username || email) && password) {
    try {
      User.find(
        { $or: [{ username: username }, { email: email }] },
        async function (err, users) {
          if (err) throw new Error(err);
          if (!users.length) throw new Error("Incorrect Password or Email");

          const isValid = await bcrypt.compare(req.body.password, user[0].pass);
          if (!isValid) throw new Error("Incorrect Password or Email");

          const token = jwt.sign(
            { email: users[0].email, username: users[0].username },
            process.env.JWT_SECRET,
            { expiresIn: "30m" }
          );

          res.json([{ token: `Bearer ${token}` }]);
        }
      );
    } catch (error) {
      if (error.message.includes("Duplicate entry"))
        error.message = "A user with that email already exists";
      res.json([{ error: error.message }]);
    }
  } else {
    res.json([{ error: "Please enter all fields" }]);
  }
});
/*
 */
app.listen(PORT, () => {
  console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
});
