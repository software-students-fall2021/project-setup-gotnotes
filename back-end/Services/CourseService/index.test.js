const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

// const CourseService = require("./index");
// const courseData = CourseService.courseData;
// const testCourse = courseData[0];

// describe("CourseService", function () {
//   describe("get_course()", function () {
//     it("Should return [{courseObj}] with given ID", function () {
//       const course = CourseService.get_course(testCourse.courseID);

//       expect(course[0]).to.deep.equalInAnyOrder(testCourse);
//     });
//   });
//   describe("set_courseName()", function () {
//     it("Should return 0, and the courseName should be changed", function () {
//       const newName = "testCourseName";
//       const course = CourseService.set_courseName(testCourse.courseID, newName);

//       expect(course).to.be.equal(0);

//       expect(
//         courseData.filter(
//           (course) => course.courseID === testCourse.courseID
//         )[0].courseName
//       ).to.be.equal(newName);
//     });
//   });

//   describe("set_courseEnrolledStudents_add()", function () {
//     it("Should return 0, and the courseEnrolledStudents Arr should include {userId: enrolledStudentId}", function () {
//       const enrolledStudentId = 1000;
//       const course = CourseService.set_courseEnrolledStudents_add(
//         testCourse.courseID,
//         enrolledStudentId
//       );

//       expect(course).to.be.equal(0);

//       expect(
//         courseData.filter(
//           (course) => course.courseID === testCourse.courseID
//         )[0].courseEnrolledStudents
//       ).to.deep.include.members([{ userId: enrolledStudentId }]);
//     });
//   });

//   describe("set_courseEnrolledStudents_remove()", function () {
//     it("Should return 0, and the courseEnrolledStudents Arr should NOT include {userId: removedStudentId}", function () {
//       const removedStudentId = 1000;
//       const course = CourseService.set_courseEnrolledStudents_remove(
//         testCourse.courseID,
//         removedStudentId
//       );

//       expect(course).to.be.equal(0);

//       expect(
//         courseData.filter(
//           (course) => course.courseID === testCourse.courseID
//         )[0].courseEnrolledStudents
//       ).to.not.deep.include.members([{ userId: removedStudentId }]);
//     });
//   });
//   describe("set_courseSharedFiles_add()", function () {
//     it("Should return 0, and the courseSharedFiles Arr should include {fileID: newFileId}", function () {
//       const newFileId = 1000;
//       const course = CourseService.set_courseSharedFiles_add(
//         testCourse.courseID,
//         newFileId
//       );

//       expect(course).to.be.equal(0);

//       expect(
//         courseData.filter(
//           (course) => course.courseID === testCourse.courseID
//         )[0].courseSharedFiles
//       ).to.deep.include.members([{ fileID: newFileId }]);
//     });
//   });

//   describe("set_courseSharedFiles_remove()", function () {
//     it("Should return 0, and the courseSharedFiles Arr should NOT include {fileID: removedFileId}", function () {
//       const removedFileId = 1000;
//       const course = CourseService.set_courseSharedFiles_remove(
//         testCourse.courseID,
//         removedFileId
//       );

//       expect(course).to.be.equal(0);

//       expect(
//         courseData.filter(
//           (course) => course.courseID === testCourse.courseID
//         )[0].courseSharedFiles
//       ).to.not.deep.include.members([{ fileID: removedFileId }]);
//     });
//   });
// });
