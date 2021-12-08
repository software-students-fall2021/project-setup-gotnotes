var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChatSchema = new Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
  },
  name: { type: String },
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

//Export model
module.exports = mongoose.model("Chat", ChatSchema);
