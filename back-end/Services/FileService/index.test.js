const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

// const FileService = require("./index");
// const fileData = FileService.fileData;
// const testFile = fileData[0];

// describe("FileService", function () {
//   describe("get_file()", function () {
//     it("Should return [{fileObj}] with given ID", function () {
//       const file = FileService.get_file(testFile.fileID);

//       expect(file[0]).to.deep.equalInAnyOrder(testFile);
//     });
//   });
//   describe("set_fileName()", function () {
//     it("Should return 0, and the fileName should be changed", function () {
//       const newName = "testFileName";
//       const file = FileService.set_fileName(testFile.fileID, newName);

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0].fileName
//       ).to.be.equal(newName);
//     });
//   });
//   describe("set_fileType()", function () {
//     it("Should return 0, and the fileType should be changed", function () {
//       const newType = "testFileType";
//       const file = FileService.set_fileType(testFile.fileID, newType);

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0].fileType
//       ).to.be.equal(newType);
//     });
//   });
//   describe("set_fileShareDate()", function () {
//     it("Should return 0, and the fileShareDate should be changed", function () {
//       const newShareDate = "testFileShareDate";
//       const file = FileService.set_fileShareDate(testFile.fileID, newShareDate);

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileShareDate
//       ).to.be.equal(newShareDate);
//     });
//   });
//   describe("set_fileSharedBy()", function () {
//     it("Should return 0, and the fileSharedBy Arr should look like: [{userID: newSharedBy}]", function () {
//       const newSharedBy = 12;
//       const file = FileService.set_fileSharedBy(testFile.fileID, newSharedBy);

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileSharedBy[0]
//       ).to.deep.equalInAnyOrder({ userID: newSharedBy });
//     });
//   });
//   describe("get_fileDownloads()", function () {
//     it("Should return correct download count", function () {
//       const file = FileService.get_file(testFile.fileID);

//       expect(file[0].fileDownloads).to.be.equal(testFile.fileDownloads);
//     });
//   });

//   describe("set_fileDownloads_increase()", function () {
//     it("Should return 0, and the fileDownloads should be incremented by one", function () {
//       const oldDownloadCount = testFile.fileDownloads;

//       const file = FileService.set_fileDownloads_increase(testFile.fileID);

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileDownloads
//       ).to.be.equal(oldDownloadCount + 1);
//     });
//   });
//   describe("set_fileLikedBy_like()", function () {
//     it("Should return 0, and the fileLikedBy Arr should include {userId: newLikedId}", function () {
//       const newLikedId = 1000;
//       const file = FileService.set_fileLikedBy_like(
//         testFile.fileID,
//         newLikedId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileLikedBy
//       ).to.deep.include.members([{ userId: newLikedId }]);
//     });
//   });

//   describe("set_fileLikedBy_unlike()", function () {
//     it("Should return 0, and the fileLikedBy Arr should NOT include {userId: newLikedId}", function () {
//       const unlikedId = 1000;
//       const file = FileService.set_fileLikedBy_unlike(
//         testFile.fileID,
//         unlikedId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileLikedBy
//       ).to.not.deep.include.members([{ userId: unlikedId }]);
//     });
//   });
//   describe("set_fileDislikedBy_dislike()", function () {
//     it("Should return 0, and the fileDislikedBy Arr should include {userId: newDislikedId}", function () {
//       const newDislikedId = 1000;
//       const file = FileService.set_fileDislikedBy_dislike(
//         testFile.fileID,
//         newDislikedId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileDislikedBy
//       ).to.deep.include.members([{ userId: newDislikedId }]);
//     });
//   });

//   describe("set_fileDislikedBy_undislike()", function () {
//     it("Should return 0, and the fileDislikedBy Arr should NOT include {userId: newDislkedId}", function () {
//       const undislikedId = 1000;
//       const file = FileService.set_fileDislikedBy_undislike(
//         testFile.fileID,
//         undislikedId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileDislikedBy
//       ).to.not.deep.include.members([{ userId: undislikedId }]);
//     });
//   });

//   describe("set_fileComments_add()", function () {
//     it("Should return 0, and the fileComments Arr should include {commentId: newCommentId}", function () {
//       const newCommentId = 1000;
//       const file = FileService.set_fileComments_add(
//         testFile.fileID,
//         newCommentId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileComments
//       ).to.deep.include.members([{ commentId: newCommentId }]);
//     });
//   });

//   describe("set_fileComments_remove()", function () {
//     it("Should return 0, and the fileComments Arr should NOT include {commentId: removedCommentId}", function () {
//       const removedCommentId = 1000;

//       const file = FileService.set_fileComments_remove(
//         testFile.fileID,
//         removedCommentId
//       );

//       expect(file).to.be.equal(0);

//       expect(
//         fileData.filter((file) => file.fileID === testFile.fileID)[0]
//           .fileComments
//       ).to.not.deep.include.members([{ userId: removedCommentId }]);
//     });
//   });
// });
