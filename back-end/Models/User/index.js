var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: "Email cannot be empty",
    unique: true,
  },
  username: {
    type: String,
    required: "Username cannot be empty",
    unique: true,
  },
  passwordHash: { type: String },
  isAdmin: { type: Boolean },
  userAvatarUrl: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  userUni: {
    type: Schema.Types.ObjectId,
    ref: "Uni",
  },
  subscribed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  shared: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
