/**
 * var { Course } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

const UniService = require("./../../Services/UniService");
const CourseService = require("./../../Services/CourseService");

// Display list of all courses.
exports.list = function (req, res) {
  console.log(UniService.get_uni(req.params.uni));

  const uniDataRaw = UniService.get_uni(req.params.uni);
  const uniDataFull = uniDataRaw.map((uni) => {
    return {
      ...uni,
      uniCourses: uni.uniCourses.map(({ courseID }) => {
        return {
          courseID,
          courseName: CourseService.get_course(courseID)[0].courseName,
          courseSharedFileCount:
            CourseService.get_course(courseID)[0].courseSharedFiles.length,
        };
      }),
    };
  });

  res.send(uniDataFull);
};

// Display detail page for a specific course.
exports.course_detail = function (req, res) {
  const course = CourseService.get_course(req.params.courseID);
  res.send(course);
};

// Display course create form on GET.
exports.course_create_post = function (req, res) {
  CourseService.add_course(req.params.courseName)
  res.send("Course Created");

};

exports.course_add_student = function (req, res) {
  CourseService.add_course_student(req.params.courseID, req.params.studentID)
  res.send("Student Added");
};
exports.course_remove_student = function (req, res) {
  CourseService.remove_course_student(req.params.courseID, req.params.studentID)
  res.send("Student Removed");
};

exports.course_add_file = function (req, res) {
  CourseService.add_course_file(req.params.courseID, req.params.fileID)
  res.send("File Added");
};
exports.course_remove_file = function (req, res) {
  CourseService.remove_course_file(req.params.courseID, req.params.fileID)
  res.send("File Removed");
};

// Display course delete form on GET.
exports.course_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: course delete GET");
};

// Handle course delete on POST.
exports.course_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: course delete POST");
};

// Display course update form on GET.
exports.course_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: course update GET");
};

// Handle course update on POST.
exports.course_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: course update POST");
};
