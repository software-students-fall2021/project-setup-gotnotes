const Comment = require("../../Models/Comment");

/**
 *
 * @param {String} commentId
 * @returns {Comment}
 */
exports.get_comment_by_id = async (commentId) => {
  return await Comment.findOne({ _id: commentId });
};

/**
 *
 * @param {String} fileId
 * @returns {[Comment]}
 */
exports.get_comments_by_file_id = async (fileId) => {
  return await Comment.find({ fileId: fileId });
};

/**
 *
 * @param {String} content
 * @param {String} sharedBy
 * @param {String} fileId
 * @param {String | null} parentCommentId
 * @returns {{comment: Comment|null, dbSaveErr: false|Error}}
 */
exports.create_comment = async (
  content,
  sharedBy,
  fileId,
  parentCommentId = null
) => {
  const new_comment = new Comment({
    content: content,
    shareDate: Date.now(),
    sharedBy: sharedBy,
    fileId: fileId,
    parentCommentId: parentCommentId,
    likes: [],
    dislikes: [],
  });

  const returnObj = {
    comment: null,
    dbSaveErr: false,
  };

  await new_comment
    .save()
    .then((comment) => {
      returnObj.comment = comment;
    })
    .catch((err) => {
      returnObj.dbSaveErr = err;
    });
  return returnObj;
};

/**
 *
 * @param {String} commentId
 * @param {String} content
 * @returns {Comment}
 */
exports.update_comment = async (commentId, content) => {
  return await Comment.findOneAndUpdate(
    { _id: commentId },
    { $set: { content: content, isEdited: true } },
    { new: true }
  );
};

/**
 *
 * @param {String} comment original comment obj
 * @param {"add"|"rmeove"} type add or remove
 * @param {String} fieldName one of the Arr fields in the comment model
 * @param {String} referenceId Id of item to be added/removed from the arr
 * @returns {Comment} a Comment obj
 */
exports.update_comment_arr_by_comment_id = async (
  comment,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !comment[fieldName].filter(
      (obj) => obj._id.toString() == referenceId.toString()
    ).length
  ) {
    newArr.push(referenceId, ...comment[fieldName]);
  } else if (type === "remove") {
    newArr.push(
      ...comment[fieldName].filter(
        (obj) => obj._id.toString() != referenceId.toString()
      )
    );
  } else {
    throw new Error(`Cannot add ${fieldName} twice`);
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await Comment.findOneAndUpdate(
    { _id: comment._id },
    { $set: updateObject },
    { new: true }
  );
};
