var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  content: {
    type: String,
    required: "Comment cannot be empty",
  },
  shareDate: {
    type: Date,
    required: true,
  },
  isEdited: {
    type: Boolean,
    default: false,
  },
  sharedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fileId: {
    type: Schema.Types.ObjectId,
    ref: "File",
    required: true,
  },
  parentCommentId: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: false,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

//Export model
module.exports = mongoose.model("Comment", CommentSchema);
