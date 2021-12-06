const { check_auth } = require("./../../Services/Auth");

const UserService = require("./../../Services/UserService");
const CommentService = require("./../../Services/CommentService");

exports.get_comments_by_file_id = async (req, res) => {
  res.json(await CommentService.get_comments_by_file_id(req.body.fileId));
};

exports.create_comment = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { content, fileId, parentCommentId } = req.body;

    if (!(content && fileId && parentCommentId))
      throw new Error("Please Enter All Fields");

    const queryResult = await CommentService.create_comment(
      content,
      user._id,
      fileId,
      parentCommentId
    );
    if (queryResult.dbSaveErr) throw new Error(queryResult.dbSaveErr);

    await UserService.update_user_arr_by_email_or_username(
      user.username,
      user,
      "add",
      "comments",
      queryResult.comment._id
    );

    res.json([queryResult]);
  } catch (err) {
    if (err.message.includes("session"))
      err.message = "Please sign in to comment";

    res.json([{ error: err.message }]);
  }
};

exports.update_comment = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { content, fileId, parentCommentId, commentId } = req.body;

    if (!(content && fileId && parentCommentId))
      throw new Error("Please Enter All Fields");

    const comment = CommentServide.get_comment(commentId);
    if (!comment) throw new Error("No such Comment");

    if (comment.sharedBy != user._id)
      throw new Error("You can only edit your comments");

    const queryResult = await CommentService.update_comment(
      comment._id,
      content
    );
    if (queryResult.dbSaveErr) throw new Error(queryResult.dbSaveErr);
    res.json([queryResult]);
  } catch (err) {
    if (err.message.includes("session"))
      err.message = "Please sign in to comment";

    res.json([{ error: err.message }]);
  }
};

exports.update_user_like_dislike = async (req, res) => {
  try {
    const { documentId, type, likeDislike } = JSON.parse(req.body.updateData);
    if (!(documentId && type && likeDislike))
      throw new Error(
        "please include a documentId, type in req.body.updateData"
      );

    const user = await check_auth(req);

    const fieldName = likeDislike === "like" ? "likes" : "dislikes";

    const comment = await CommentService.get_comment_by_id(documentId);

    const queryResult = await CommentService.update_comment_arr_by_comment_id(
      comment,
      type,
      fieldName,
      user._id
    );

    if (!queryResult) throw new Error("No such Comment");

    res.json([queryResult]);
  } catch (err) {
    res.json([{ error: err.message }]);
  }
};
