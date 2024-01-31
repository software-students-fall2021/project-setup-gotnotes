const MessageService = require("./Services/ChatService");

let users = [];

let rooms = [];

let chats = [];

const addUser = (courseId, userId, username, userAvatarUrl, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ courseId, userId, username, userAvatarUrl, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUsers = (courseId) => {
  return users.filter((user) => user.courseId === courseId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const getUserBySocketId = (socketId) => {
  return users.find((user) => user.socketId == socketId);
};

const addChat = (courseId) => {
  !chats.some((chat) => chat.courseId == courseID) &&
    chats.push({ courseId: courseId, content: [] });
};

const addChatContent = (courseId, messageObj) => {
  const currentChat = chats.find((chat) => chat.courseId == courseId);
  currentChat.content.push(messageObj);
};

const editChatContent = (courseId, messageObj, likeUserId) => {
  const currentChat = chats.find((chat) => chat.courseId == courseId);
  const currentMessage = currentChat.content.find(
    (message) =>
      message.dateSent.toString() == messageObj.dateSent.toString() &&
      message.sender.toString() == messageObj.sender.toString()
  );
  if (
    !currentMessage.likes.some(
      (userId) => userId.toString() == likeUserId.toString()
    )
  ) {
    currentMessage.likes.push(likeUserId.toString());
  } else {
    currentMessage.likes = currentMessage.likes.filter(
      (userId) => userId.toString() != likeUserId.toString()
    );
  }
  return currentMessage;
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //
  socket.on(
    "JoinCourseChat",
    ({ courseId, userId, username, userAvatarUrl }) => {
      socket.join(courseId);
      addUser(courseId, userId, username, userAvatarUrl, socket.id);
      addChat(courseId);
      io.in(courseId).emit("users", getUsers(courseId));
    }
  );

  //send and get message
  socket.on(
    "SendMessage",
    ({ courseId, userId, message, dateSent = Date.now(), likes = [] }) => {
      addChatContent(courseId, {
        message: message,
        sender: userId,
        dateSend: dateSent,
        likes: [],
      });
      io.in(courseId).emit("getMessage", {
        sender: userId,
        message,
        dateSent,
        likes,
      });
    }
  );

  //send and get like data
  socket.on(
    "LikeMessage",
    ({ courseId, userId, message, dateSent, likeUserId }) => {
      const currentMessage = editChatContent(
        courseId,
        { sender: userId, message: message, dateSent: dateSent },
        likeUserId
      );
      io.in(courseId).emit("getLike", {
        currentMessage,
      });
    }
  );

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    const user = getUserBySocketId(socket.id);
    removeUser(socket.id);
    io.in().emit("getUsers", getUsers(user.courseId));
  });
});
