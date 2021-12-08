const { check_auth } = require("./../../Services/Auth");

const UserService = require("./../../Services/UserService");
const CommentService = require("./../../Services/CommentService");

/**
 *
 * @param {{params:{fileId:String}}} req obj that has a body property with a fileId field
 * @param {*} res
 * @returns {[comment]} Arr of all the comments that have the given fileId
 */
exports.get_comments_by_file_id = async (req, res) => {
  res.json(await CommentService.get_comments_by_file_id(req.params.fileId));
};

/**
 *
 * @param {{body:{content: String,fileId: String,parentCommentId: String}}} req
 * @param {*} res
 * @returns {[{comment}] | [{error: String}]}
 */
exports.create_comment = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { content, fileId, parentCommentId } = req.body;

    if (!(content && fileId))
      throw new Error(
        "Please Enter content:String and fileId:String in req.body"
      );

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
/**
 *
 * @param {{body:{content:String, fileId:String, parentCommentId:String, commentId:String}}} req
 * @param {*} res
 * @returns {[{comment}] | [{error: String}]} res.queryResult
 */
exports.update_comment = async (req, res) => {
  try {
    const user = await check_auth(req);
    const { content, commentId } = req.body;

    if (!(content && commentId))
      throw new Error("Please Enter content: String, commentId:String");

    const comment = await CommentService.get_comment_by_id(commentId);
    if (!comment) throw new Error("No such Comment");

    if (comment.sharedBy.toString() != user._id.toString())
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
/**
 *
 * @param {{body:{ documentId:String, type:"add"|"remove", likeDislike:"like"|"dislike"}}} req
 * @param {*} res
 * @returns {[{comment}] | [{error: String}]} res.queryResult
 */
exports.update_user_like_dislike = async (req, res) => {
  try {
    const { documentId, type, likeDislike } = req.body;
    if (!(documentId && type && likeDislike))
      throw new Error(
        "please include a documentId, type, likeDislike in req.body"
      );

    const user = await check_auth(req);

    const fieldName = likeDislike === "like" ? "likes" : "dislikes";

    const comment = await CommentService.get_comment_by_id(documentId);

    if (
      comment.likes.filter((userId) => userId.toString() == user._id.toString())
        .length > 0 &&
      likeDislike === "dislike"
    )
      await CommentService.update_comment_arr_by_comment_id(
        comment,
        "remove",
        "likes",
        user._id
      );

    if (
      comment.dislikes.filter(
        (userId) => userId.toString() == user._id.toString()
      ).length > 0 &&
      likeDislike === "like"
    )
      await CommentService.update_comment_arr_by_comment_id(
        comment,
        "remove",
        "dislikes",
        user._id
      );

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
