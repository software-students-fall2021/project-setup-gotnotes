const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

// var CommentService = require("./index");
// let commentData = CommentService.commentData;
// const testComment = commentData[0];

// describe("uniService", function () {
//   describe("get_comment()", function () {
//     it("should return comment", function () {
//       const comment = CommentService.get_comment(testComment.commentID);

//       expect(comment[0]).to.deep.equalInAnyOrder(testComment);
//     });
//   });
// });

