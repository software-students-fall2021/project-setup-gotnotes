const courseData = require("./../../Mock/CoursesMockData/courses.json");
exports.courseData = courseData;
const db = require("../Database/index.js");
const Course = require("./../../Models/Course");

/*
{
    "courseID":1,
    "courseName":"Glamour",
    "courseEnrolledStudents":[
        {"userId":32},
        {"userId":87}
    ],
    "courseSharedFiles":[
        {"fileID":51},{"fileID":70},{"fileID":38},{"fileID":95},{"fileID":85},
        {"fileID":26},{"fileID":20},{"fileID":45},{"fileID":11},{"fileID":24},
        {"fileID":87},{"fileID":25},{"fileID":14},{"fileID":60},{"fileID":10},
        {"fileID":97},{"fileID":91},{"fileID":33},{"fileID":21},{"fileID":10},
        {"fileID":12},{"fileID":90},{"fileID":47},{"fileID":49},{"fileID":15},
        {"fileID":98},{"fileID":70},{"fileID":79},{"fileID":68},{"fileID":30},
        {"fileID":22},{"fileID":14},{"fileID":98},{"fileID":12},{"fileID":95},
        {"fileID":56},{"fileID":67},{"fileID":17},{"fileID":99},{"fileID":89},
        {"fileID":30},{"fileID":32},{"fileID":47},{"fileID":93},{"fileID":92},
        {"fileID":16},{"fileID":79},{"fileID":69}
    ]
},
*/

exports.get_course = (courseID) => {
  return Course.findOne({ _id: courseID });
};

exports.add_course = (courseName) => {
  let course = new Course({
    courseName: courseName,
    courseEnrolledStudents: [],
    courseSharedFiles: [],
  });
  course.save(err, (newCourse) => {
    if (err) {
      console.log(err);
    }
    let id = newCourse._id;
  });
  return id;
};

exports.add_student = (courseID, studentID) => {
  Course.findOne({ _id: courseID }, (err, course) => {
    if (err) {
      console.log(err);
    } else {
      course.courseEnrolledStudents.push({ _id: studentID });
      course.save((err) => {
        console.log(err);
      });
    }
  });
};
exports.remove_student = (courseID, studentID) => {
  Course.findOne({ _id: courseID }, (err, course) => {
    if (err) {
      console.log(err);
    } else {
      course.courseEnrolledStudents.pull({ _id: studentID });
      course.save((err) => {
        console.log(err);
      });
    }
  });
};
exports.add_file = (courseID, fileID) => {
  Course.findOne({ _id: courseID }, (err, course) => {
    if (err) {
      console.log(err);
    } else {
      course.courseSharedFiles.push({ _id: fileID });
      course.save((err) => {
        console.log(err);
      });
    }
  });
};
exports.remove_file = (courseID, fileID) => {
  Course.findOne({ _id: courseID }, (err, course) => {
    if (err) {
      console.log(err);
    } else {
      course.courseSharedFiles.pull({ _id: fileID });
      course.save((err) => {
        console.log(err);
      });
    }
  });
};

// NON DB FUNCTIONS

// /**
//  * Get course by ID
//  * @param {*} courseID
//  * @returns [{courseObj}] || []
//  */
// exports.get_course = function (courseID) {
//     console.log(courseID)
//     return courseData.filter(course => course.courseID == courseID)
// }

// /**
//  * Get course by ID
//  * @param {*} courseID, the ID of the course to be edited
//  * @param {*} newCourseName, the new course name to be given
//  * @returns boolean: 0 if success, 1 if course not found
//  */
// exports.set_courseName = function (courseID, newCourseName) {
//     const course = exports.get_course(courseID)[0]
//     if (!course) return 1

//     course.courseName = newCourseName

//     return 0
// }

// /**
//  * add new student to the course list
//  * @param {*} courseID
//  * @param {*} enrolledStudentId
//  * @returns boolean: 0 if success, 1 if no such course
//  */
// exports.set_courseEnrolledStudents_add = function (courseID, enrolledStudentId) {
//     const course = exports.get_course(courseID)[0];

//     if (!course) return 1;

//     course.courseEnrolledStudents.push({ userId: enrolledStudentId })

//     return 0;

// }

// /**
//  * add new student to the course list
//  * @param {*} courseID
//  * @param {*} removedStudentId
//  * @returns boolean: 0 if success, 1 if no such course
//  */
// exports.set_courseEnrolledStudents_remove = function (courseID, removedStudentId) {
//     const course = exports.get_course(courseID)[0];

//     if (!course) return 1;

//     const newEnrolledStudents = course.courseEnrolledStudents.filter(student => student.userId !== removedStudentId)

//     course.courseEnrolledStudents = newEnrolledStudents

//     return 0;

// }

// /**
//  * add new file to the course shared file list
//  * @param {*} courseID
//  * @param {*} sharedFileId
//  * @returns boolean: 0 if success, 1 if no such course
//  */
// exports.set_courseSharedFiles_add = function (courseID, sharedFileId) {
//     const course = exports.get_course(courseID)[0];

//     if (!course) return 1;

//     course.courseSharedFiles.push({ fileID: sharedFileId })

//     return 0;

// }

// /**
//  * remove file from course shared file list
//  * @param {*} courseID
//  * @param {*} removedFileId
//  * @returns boolean: 0 if success, 1 if no such course
//  */
// exports.set_courseSharedFiles_remove = function (courseID, removedFileId) {
//     const course = exports.get_course(courseID)[0];

//     if (!course) return 1;

//     const newSharedFiles = course.courseSharedFiles.filter(file => file.fileID !== removedFileId)

//     course.courseSharedFiles = newSharedFiles

//     return 0;

// }
