/**
 * var { Uni } = require('./../../Models');
 * we will implement this when we have the mongodb models, schemas ...
 * */

const UniService = require("./../../Services/UniService");

// Display list of all unis.
exports.uni_list = function (req, res) {
  res.send(
    UniService.uniData.map((uni) => ({
      uniID: uni.uniID,
      uniLogoPath: uni.uniLogoPath,
      uniName: uni.uniName,
      uniStudentCount: uni.uniStudents.length,
    }))
  );
};

// Display detail page for a specific uni.
exports.uni_detail_get = function (req, res) {
  const data = req.body;
  const { uniID } = data;
  res.send(UniService.get_uni_by_id(uniID));
};

// Handle uni create on POST.
exports.uni_create = function (req, res) {
  const data = req.body;
  const { uniName, uniLogoPath } = data;
  UniService.uni_create(uniName, uniLogoPath);
  res.send("uniCreated");
};

  //an example situation:
  //make a call to service.createuni
  //make a call to service.addCoursesToUni()

  //res.send('NOT IMPLEMENTED: uni create POST');

// Display uni delete form on GET.
exports.uni_delete_post = function (req, res) {
  UniService.delete_uni(req.params.id);
  res.send("UniDeleted");
};

exports.uni_add_course_post = function (req, res) {
  const data = req.body;
  const { uniID, courseID } = data;
  UniService.add_course_to_uni(uniID, courseID);
  res.send("CourseAdded");
};

exports.uni_delete_course_post = function (req, res) {
  const data = req.body;
  const { uniID, courseID } = data;
  UniService.delete_course_from_uni(uniID, courseID);
  res.send("CourseDeleted");
};

exports.uni_add_student_post = function (req, res) {
  const data = req.body;
  const { uniID, userID } = data;
  UniService.add_student_to_uni(uniID, userID);
  res.send("StudentAdded");
};

exports.uni_delete_student_post = function (req, res) {
  const data = req.body;
  const { uniID, userID } = data;
  UniService.delete_student_from_uni(uniID, userID);
  res.send("StudentDeleted");
};