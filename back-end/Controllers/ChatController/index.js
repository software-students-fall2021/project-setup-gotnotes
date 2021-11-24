/**
 * var { Chat } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

// Display list of all chats.
exports.chat_list = function (req, res) {
  res.send("NOT IMPLEMENTED: chat list");
};

// Display detail page for a specific chat.
exports.chat_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: chat detail: " + req.params.id);
};

// Display chat create form on GET.
exports.chat_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: chat create GET");
};

// Handle chat create on POST.
exports.chat_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: chat create POST");
};

// Display chat delete form on GET.
exports.chat_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: chat delete GET");
};

// Handle chat delete on POST.
exports.chat_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: chat delete POST");
};

// Display chat update form on GET.
exports.chat_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: chat update GET");
};

// Handle chat update on POST.
exports.chat_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: chat update POST");
};
