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
  likes: [
    {
      userId: String,
    },
  ],
});

//Export model
module.exports = mongoose.model("Message", MessageSchema);
