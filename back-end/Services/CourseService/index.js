const Course = require("./../../Models/Course");

exports.get_all_courses = async () => {
  return await Course.find()
    .populate("subscribed")
    .populate("courseUni")
    .populate("files");
};

exports.get_course_by_id = async (courseID) => {
  return await Course.findOne({ _id: courseID })
    .populate("subscribed")
    .populate("courseUni")
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
    .then(async (course) => {
      returnObj.course = await course.populate("courseUni").execPopulate();
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

/**
 *
 * @param {{Course}} course
 * @param {"add"|"remove"} type
 * @param {"subsvribed"|"files"} fieldName
 * @param {String} referenceId
 * @returns
 */
exports.update_course_arr_by_course_id = async (
  course,
  type,
  fieldName,
  referenceId
) => {
  console.log(course);
  console.log(fieldName);
  const newArr = [];
  if (
    type === "add" &&
    !course[fieldName].filter(
      (obj) => obj._id.toString() == referenceId.toString()
    ).length
  ) {
    newArr.push(referenceId, ...course[fieldName]);
  } else if (type === "remove") {
    newArr.push(
      ...course[fieldName].filter(
        (obj) => obj._id.toString() != referenceId.toString()
      )
    );
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
