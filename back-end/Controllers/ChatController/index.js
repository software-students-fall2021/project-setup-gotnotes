/**
 * var { Chat } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */
const ChatService = require("./../../Services/ChatService");

// Display list of all chats.
exports.chat_list = function (req, res) {

  res.send(ChatService.get_all_chats(req.params.userID));
};

// Display detail page for a specific chat.
exports.chat_detail = function (req, res) {
  res.send(ChatService.get_chat(req.params.courseID));
};
// Display users for a specific chat.
exports.chat_users_get = function (req, res) {
  res.send(ChatService.get_chat_users(req.params.courseID));
  
};
// Display chat create form on GET.
exports.chat_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: chat create GET");
  // only used when new course is created, so will be implemented in 
  // coursecontroller
};

// Handle chat create on POST.
exports.chat_create_post = function (req, res) {
    // only used when new course is created, so will be implemented in 
  // coursecontroller
  res.send("NOT IMPLEMENTED: chat create POST");
};

// Display chat delete form on GET.
exports.chat_delete_get = function (req, res) {
      // only used when old course is deleted, so will be implemented in 
  // coursecontroller
  res.send("NOT IMPLEMENTED: chat delete GET");
};

// Handle chat delete on POST.
exports.chat_delete_post = function (req, res) {
  // only used when old course is deleted, so will be implemented in 
  // coursecontroller
  res.send("NOT IMPLEMENTED: chat delete POST");
};
// Chat send message on POST.
exports.chat_message_post = function (req, res) {
  ChatService.addMessage(req.params.courseID, req.params.chatName, req.body.message, req.params.userID);
  res.send(ChatService.get_chat(req.params.courseID));
};
// Chat like message on POST.
exports.chat_like_message_post = function (req, res) {
  ChatService.likeMessage(req.params.courseID, req.body.message, req.params.userID);
  res.send(ChatService.get_chat(req.params.courseID));
};

// Display chat update form on GET.
exports.chat_update_get = function (req, res) {

  res.send("NOT IMPLEMENTED: chat update GET");
};

// Handle chat update on POST.
exports.chat_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: chat update POST");
};
