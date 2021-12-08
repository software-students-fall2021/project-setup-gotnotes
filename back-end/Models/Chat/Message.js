var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  message: {
    type: String,
    required: "Message cannot be empty",
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  dateSent: { type: Date },
  likes: [String],
});

module.exports = mongoose.model("Message", MessageSchema);
