var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FileSchema = new Schema({
  name: {
    type: String,
    required: "File Name cannot be empty",
  },
  uri: { type: String },
  type: { type: String },
  shareDate: { type: Date },
  downloads: { type: Number },
  sharedBy: {
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
});

//Export model
module.exports = mongoose.model("File", FileSchema);
