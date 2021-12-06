var express = require("express");
var router = express.Router({ mergeParams: true });

// Require controller modules.
var { chatController } = require("../../Controllers");

//list all chats (logged in user only, else return null)
router.get("/", (req, res) => {
  res.send("Chat List All Req Received by User: USER_ID");
});

//chat content list (only if logged in user is subscribed in chat)
router.get("/:chatID", (req, res) => {
  res.send("Chat list messages req for chat: CHAT_ID, by user: USER_ID");
});

//chat add message
router.post("/:chatID/newMessage", (req, res) => {
  res.send(
    "Chat add messages req for chat: CHAT_ID, by user: USER_ID, message: message_id"
  );
});

//chat like/unlike message
router.post("/:chatID/likeMessage", (req, res) => {
  res.send(
    "Chat add messages req for chat: CHAT_ID, by user: USER_ID, message: message_id"
  );
});

module.exports = router;
