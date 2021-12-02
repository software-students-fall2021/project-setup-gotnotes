var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FileSchema = new Schema({
  fileName: {
    type: String,
    required: "File Name cannot be empty",
  },
  fileLink: {type: String},
  fileType: { type: String },
  fileShareDate: { type: Date },
  fileSharedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
