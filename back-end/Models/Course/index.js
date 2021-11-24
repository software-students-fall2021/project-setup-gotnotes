var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  courseName: {
    type: String,
    required: "Course Name cannot be empty",
  },
  courseEnrolledStudents: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  courseSharedFiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
});

CourseSchema.virtual("courseEnrolledStudentCount").get(function () {
  return this.courseEnrolledStudents.length;
});

CourseSchema.virtual("courseSharedFileCount").get(function () {
  return this.courseSharedFiles.length;
});

//Export model
module.exports = mongoose.model("Course", CourseSchema);
