require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require("cors");

const {
  accountRouter,
  chatRouter,
  commentRouter,
  searchRouter,
  authRouter,
} = require("./Routes");
const { connection } = require("./Services/Database");
connection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/unis", searchRouter.unisRouter);
app.use("/courses", searchRouter.coursesRouter);
app.use("/files", searchRouter.fileRouter);

app.use("/comments", commentRouter);
app.use("/chats", chatRouter);
app.use("/account", accountRouter);

app.use("/signup", authRouter.signupRouter);
app.use("/login", authRouter.loginRouter);
app.use("/admin", authRouter.adminRouter);

app.listen(PORT, () => {
  console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
});
