const Comment = require("../../Models/Comment");

exports.get_comment_by_id = (commentId) => {
  return Comment.findOne({ _id: commentId });
};

exports.get_comments_by_file_id = async (fileId) => {
  await Comment.find({ fileId: fileId });
};

exports.create_comment = async (content, sharedBy, fileId, parentCommentId) => {
  const new_comment = parentCommentId
    ? new Comment({
        content: content,
        shareDate: Date.now(),
        sharedBy: sharedBy,
        fileId: fileId,
        parentCommentId: parentCommentId,
        likes: [],
        dislikes: [],
      })
    : new Comment({
        content: content,
        shareDate: Date.now(),
        sharedBy: sharedBy,
        fileId: fileId,
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

exports.update_comment = async (commentId, content) => {
  return await Comment.findOneAndUpdate(
    { _id: commentId },
    { $set: { content: content, isEdited: true } },
    { new: true }
  );
};

exports.update_comment_arr_by_comment_id = async (
  comment,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !comment[fieldName].filter((obj) => obj._id == referenceId).length
  ) {
    newArr.push(referenceId, ...comment[fieldName]);
  } else if (type === "remove") {
    newArr.push(...comment[fieldName].filter((obj) => obj._id != referenceId));
  } else {
    throw new Error("Cannot add item twice");
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await Course.findOneAndUpdate(
    { _id: comment._id },
    { $set: updateObject },
    { new: true }
  );
};
