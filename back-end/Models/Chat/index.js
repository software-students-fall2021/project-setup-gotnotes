var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChatSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    unique: true,
  },
  chatName: { type: String },
  chatMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  chatContent: [
    {
      message: {
        type: String,
        required: "Message cannot be empty",
      },
      messageBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      messageDate: { type: Date },
      mesageLikedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

//Export model
module.exports = mongoose.model("Chat", ChatSchema);
