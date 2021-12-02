const Course = require("./../../Models/Course");

exports.get_all_courses = async () => {
  return await Course.find().populate("subscribed").populate("files");
};

exports.get_course_by_id = async (courseID) => {
  return await Course.find({ _id: courseID })
    .populate("subscribed")
    .populate("files");
};

exports.create_course = async (newCourseName, courseUniId) => {
  const returnObj = {
    course: null,
    dbSaveErr: false,
  };
  let new_course = new Course({
    courseName: newCourseName,
    courseUni: courseUniId,
    subscribed: [],
    files: [],
  });
  await new_course
    .save()
    .populate("courseUni")
    .then((course) => {
      returnObj.course = course;
    })
    .catch((err) => {
      returnObj.dbSaveErr = err;
    });
  return returnObj;
};

exports.update_course_scalar_by_course_id = async (courseId, updateObject) => {
  return await Uni.findOneAndUpdate(
    { _id: courseId },
    { $set: updateObject },
    { new: true }
  )
    .populate("courseUni")
    .populate("subscribed")
    .populate("files");
};
exports.update_course_arr_by_course_id = async (
  course,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !course[fieldName].filter((obj) => obj._id == referenceId).length
  ) {
    newArr.push(referenceId, ...course[fieldName]);
  } else if (type === "remove") {
    newArr.push(...course[fieldName].filter((obj) => obj._id != referenceId));
  } else {
    throw new Error("Cannot add item twice");
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await Course.findOneAndUpdate(
    { _id: course._id },
    { $set: updateObject },
    { new: true }
  )
    .populate("courseUni")
    .populate("subscribed")
    .populate("files");
};
