require("dotenv").config();
const PORT = process.env.PORT;

const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const {
  accountRouter,
  chatRouter,
  commentRouter,
  searchRouter,
  authRouter,
} = require("./Routes");

const WebSocketService = require("./Services/WebSocketService");

const { connection } = require("./Services/Database");
connection();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const onConnection = (socket) => {
  console.log(`User socketId: ${socket.id} connected`)
  WebSocketService(io, socket);
};

io.on("connection", onConnection);

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

httpServer.listen(PORT, () => {
  console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
});
