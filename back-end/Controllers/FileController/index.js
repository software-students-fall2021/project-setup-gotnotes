/**
 * var { File } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

const FileService = require("./../../Services/FileService");
const UserService = require("./../../Services/UserService");
const CommentService = require("./../../Services/CommentService");

// Display list of all files.
exports.file_list = function (req, res) {
  //TODO needs to send the whole file with the comment data and user data included as a big json here
  //Use as many other services as you can
  const fileDataRaw = FileService.get_file(req.params.file);
  const fileDataFull = fileDataRaw.map((file) => ({
    ...file,
    fileComments: file.fileComments.map((comment) => {
      const commentSingle = CommentService.get_comment(comment.commentId)[0];

      return {
        ...commentSingle,
        commentedBy: commentSingle.commentedBy.map((user) => ({
          ...user,
          userAvatarUrl: UserService.get_user_avatar_url(user.userId),
          username: UserService.get_user(user.userId).username,
        })),
      };
    }),
  }));
  res.send(fileDataFull);
};

// Display detail page for a specific file.
exports.file_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: file detail: " + req.params.id);
};

// Display file create form on GET.
exports.file_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: file create GET");
};

// Handle file create on POST.
exports.file_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: file create POST");
};

// Display file delete form on GET.
exports.file_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: file delete GET");
};

// Handle file delete on POST.
exports.file_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: file delete POST");
};

// Display file update form on GET.
exports.file_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: file update GET");
};

// Handle file update on POST.
exports.file_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: file update POST");
};
