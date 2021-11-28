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
  res.send(FileService.get_file(req.params.file));
};

// Display file create form on GET.
exports.file_create_post = function (req, res) {
  FileService.post_file(req.params.fileName, req.params.fileType);
  res.send("Done");
};


// Display file delete form on GET.
exports.file_delete_post = function (req, res) {
  FileService.delete_file(req.params.file);
  res.send("NOT IMPLEMENTED: file delete GET");
};

exports.file_like_post = function (req, res) {
  FileService.like_file(req.params.file, req.params.user);
  res.send("liked");
};

exports.file_unlike_post = function (req, res) {
  FileService.unlike_file(req.params.file, req.params.user);
  res.send("unliked");
};

exports.file_undislike_post = function (req, res) {
  FileService.undislike_file(req.params.file, req.params.user);
  res.send("undisliked");
};


exports.file_dislike_post = function (req, res) {
  FileService.dislike_file(req.params.file, req.params.user);
  res.send("disliked");
};

exports.file_comment_post = function (req, res) {
  FileService.comment_on_file(req.params.file, req.params.comment, req.params.user);
  res.send("commented");
};

exports.file_download_get = function (req, res) {
  FileService.increase_fileDownloads(req.params.file);
  res.send("we definitely downloaded the file because we most definitely actually store it yes of course.");
};

exports.file_comment_get = function (req, res) {
  const fileDataRaw = FileService.get_file(req.params.file);
  const fileDataFull = fileDataRaw.map((file) => ({
    ...file,
    fileComments: file.fileComments.map((comment) => {
      const commentSingle = CommentService.get_comment(comment.commentId)[0];
      return {commentSingle};
    }),
  }));
  res.send(fileDataFull);
};

// Display file update form on GET.
exports.file_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: file update GET");
};

// Handle file update on POST.
exports.file_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: file update POST");
};
