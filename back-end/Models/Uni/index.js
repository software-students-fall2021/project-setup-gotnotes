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

//Export model
module.exports = mongoose.model("Uni", UniSchema);
