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
  res.send("NOT IMPLEMENTED: course detail: " + req.params.id);
};

// Display course create form on GET.
exports.course_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: course create GET");
};

// Handle course create on POST.
exports.course_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: course create POST");
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
