var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UniSchema = new Schema({
  uniName: {
    type: String,
    required: "Uni Name cannot be empty",
  },
  uniLogoPath: { type: String },
  uniStudents: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  uniCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

UniSchema.virtual("uniStudentCount").get(function () {
  return this.uniStudents.length;
});

UniSchema.virtual("uniCourseCount").get(function () {
  return this.uniCourses.length;
});

//Export model
module.exports = mongoose.model("Uni", UniSchema);
