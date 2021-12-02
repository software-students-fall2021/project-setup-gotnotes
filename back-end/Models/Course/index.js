var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  courseName: {
    type: String,
    required: "Course Name cannot be empty",
  },
  courseUni: {
    type: Schema.Types.ObjectId,
    ref: "Uni",
  },
  subscribed: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  files: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
});

module.exports = mongoose.model("Course", CourseSchema);
