var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FileSchema = new Schema({
  fileName: {
    type: String,
    required: "File Name cannot be empty",
  },
  fileType: { type: String },
  fileShareDate: { type: Date },
  fileSharedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  liked: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  disliked: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  fileDownloads: { type: Number },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

//Export model
module.exports = mongoose.model("File", FileSchema);
