const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

// var UserService = require("./index");
// const userData = require("./../../Mock/UsersMockData/users.json");
// const testUser = userData[0];

// describe("UserService", function () {
//   describe("get_user()", function () {
//     it("Should return [{userObj}] with given email", function () {
//       const user = UserService.get_user(testUser.userID);

//       expect(user[0]).to.deep.equalInAnyOrder(testUser);
//     });
//   });
//   describe("get_user_by_username()", function () {
//     it("Should return [{userObj}] with given username", function () {
//       const user = UserService.get_user_by_username(testUser.username);

//       expect(user[0]).to.deep.equalInAnyOrder(testUser);
//     });
//   });
//   describe("get_user_pass_hash()", function () {
//     it("Should return String pass hash of user with given email", function () {
//       const pasHash = UserService.get_user_pass_hash(testUser.userID);

//       expect(pasHash).to.be.equal(testUser.passwordHash);
//     });
//   });
//   describe("set_user_pass_hash()", function () {
//     it("Should return 0 and set user pass hash to newPassHash", function () {
//       const newPassHash = "newPassHash";

//       expect(
//         UserService.set_user_pass_hash(testUser.userID, newPassHash)
//       ).to.be.equal(0);

//       expect(testUser.passwordHash).to.be.equal(newPassHash);
//     });
//   });
//   describe("get_user_authority()", function () {
//     it("Should return Bool: user.isAdmin with given email", function () {
//       const isAdmin = UserService.get_user_authority(testUser.userID);

//       expect(isAdmin).to.be.equal(testUser.isAdmin);
//     });
//   });
//   describe("set_user_authority()", function () {
//     it("Should return 0 and set user.isAdmin to newAdmin", function () {
//       const newAdmin = 1;

//       expect(
//         UserService.set_user_authority(testUser.userID, newAdmin)
//       ).to.be.equal(0);

//       expect(testUser.isAdmin).to.be.equal(newAdmin);
//     });
//   });
//   describe("get_user_avatar_url()", function () {
//     it("Should return String: user.userAvatarUrl with given email", function () {
//       const userAvatarUrl = UserService.get_user_avatar_url(testUser.userID);

//       expect(userAvatarUrl).to.be.equal(testUser.userAvatarUrl);
//     });
//   });
//   describe("set_user_avatar_url()", function () {
//     it("Should return 0 and set user.userAvatarUrl to newAvatarUrl", function () {
//       const newAvatarUrl = "newAvatarUrl";

//       expect(
//         UserService.set_user_avatar_url(testUser.userID, newAvatarUrl)
//       ).to.be.equal(0);

//       expect(testUser.userAvatarUrl).to.be.equal(newAvatarUrl);
//     });
//   });
//   describe("get_user_first_name()", function () {
//     it("Should return String: user.firstName with given email", function () {
//       const firstName = UserService.get_user_first_name(testUser.userID);

//       expect(firstName).to.be.equal(testUser.firstName);
//     });
//   });
//   describe("set_user_first_name()", function () {
//     it("Should return 0 and set user.firstName to newFirstName", function () {
//       const newFirstName = "newFirstName";

//       expect(
//         UserService.set_user_first_name(testUser.userID, newFirstName)
//       ).to.be.equal(0);

//       expect(testUser.firstName).to.be.equal(newFirstName);
//     });
//   });
//   describe("get_user_last_name()", function () {
//     it("Should return String: user.lastName with given email", function () {
//       const lastName = UserService.get_user_last_name(testUser.userID);

//       expect(lastName).to.be.equal(testUser.lastName);
//     });
//   });
//   describe("set_user_last_name()", function () {
//     it("Should return 0 and set user.lastName to newLastName", function () {
//       const newLastName = "newLastName";

//       expect(
//         UserService.set_user_last_name(testUser.userID, newLastName)
//       ).to.be.equal(0);

//       expect(testUser.lastName).to.be.equal(newLastName);
//     });
//   });
//   describe("get_user_uni()", function () {
//     it("Should return String: user.userUni with given email", function () {
//       const userUni = UserService.get_user_uni(testUser.userID);

//       expect(userUni).to.be.equal(testUser.userUni);
//     });
//   });
//   describe("set_user_uni()", function () {
//     it("Should return 0 and set user.userUni to newUserUni", function () {
//       const newUserUni = "newUserUni";

//       expect(UserService.set_user_uni(testUser.userID, newUserUni)).to.be.equal(
//         0
//       );

//       expect(testUser.userUni).to.be.equal(newUserUni);
//     });
//   });
//   describe("get_user_subscribed()", function () {
//     it("Should return String: user.userUni with given email", function () {
//       const userSubscribed = UserService.get_user_subscribed(testUser.userID);

//       expect(userSubscribed).to.deep.equalInAnyOrder(testUser.userSubscribed);
//     });
//   });
//   describe("set_user_subscribed_add()", function () {
//     it("Should return 0 and Add {courseID: 1000} to user.userSubscribed", function () {
//       const addedCourseId = 1000;

//       expect(
//         UserService.set_user_subscribed_add(testUser.userID, addedCourseId)
//       ).to.be.equal(0);

//       expect(testUser.userSubscribed).to.deep.include.members([
//         { courseID: addedCourseId },
//       ]);
//     });
//   });
//   describe("set_user_subscribed_remove()", function () {
//     it("Should return 0 and Remove {courseID: 1000} from user.userSubscribed", function () {
//       const removedCourseId = 1000;

//       expect(
//         UserService.set_user_subscribed_remove(testUser.userID, removedCourseId)
//       ).to.be.equal(0);

//       expect(testUser.userSubscribed).to.not.deep.include.members([
//         { courseID: removedCourseId },
//       ]);
//     });
//   });
//   describe("get_user_liked()", function () {
//     it("Should return Arr user.userLiked with given email", function () {
//       const userLiked = UserService.get_user_liked(testUser.userID);

//       expect(userLiked).to.deep.equalInAnyOrder(testUser.userLiked);
//     });
//   });
//   describe("get_user_liked_count()", function () {
//     it("Should return Number: lenght of Arr user.userLiked with given email", function () {
//       const userLikedCount = UserService.get_user_liked_count(testUser.userID);

//       expect(userLikedCount).to.deep.equalInAnyOrder(testUser.userLiked.length);
//     });
//   });
//   describe("set_user_liked_add()", function () {
//     it("Should return 0 and Add {fileID: 1000} to user.userLiked", function () {
//       const addedFileeId = 1000;

//       expect(
//         UserService.set_user_liked_add(testUser.userID, addedFileeId)
//       ).to.be.equal(0);

//       expect(testUser.userLiked).to.deep.include.members([
//         { fileID: addedFileeId },
//       ]);
//     });
//   });
//   describe("set_user_liked_remove()", function () {
//     it("Should return 0 and Remove {fileID: 1000} from user.userLiked", function () {
//       const removedFileId = 1000;

//       expect(
//         UserService.set_user_liked_remove(testUser.userID, removedFileId)
//       ).to.be.equal(0);

//       expect(testUser.userLiked).to.not.deep.include.members([
//         { fileID: removedFileId },
//       ]);
//     });
//   });
//   describe("get_user_disliked()", function () {
//     it("Should return Arr user.userDisliked with given email", function () {
//       const userDisliked = UserService.get_user_disliked(testUser.userID);

//       expect(userDisliked).to.deep.equalInAnyOrder(testUser.userDisliked);
//     });
//   });
//   describe("get_user_disliked_count()", function () {
//     it("Should return Number: lenght of Arr user.userDisliked with given email", function () {
//       const userDislikedCount = UserService.get_user_disliked_count(
//         testUser.userID
//       );

//       expect(userDislikedCount).to.deep.equalInAnyOrder(
//         testUser.userDisliked.length
//       );
//     });
//   });
//   describe("set_user_disliked_add()", function () {
//     it("Should return 0 and Add {fileID: 1000} to user.userDisliked", function () {
//       const addedFileId = 1000;

//       expect(
//         UserService.set_user_disliked_add(testUser.userID, addedFileId)
//       ).to.be.equal(0);

//       expect(testUser.userDisliked).to.deep.include.members([
//         { fileID: addedFileId },
//       ]);
//     });
//   });
//   describe("set_user_disliked_remove()", function () {
//     it("Should return 0 and Remove {fileID: 1000} from user.userDisliked", function () {
//       const removedFileId = 1000;

//       expect(
//         UserService.set_user_disliked_remove(testUser.userID, removedFileId)
//       ).to.be.equal(0);

//       expect(testUser.userDisliked).to.not.deep.include.members([
//         { fileID: removedFileId },
//       ]);
//     });
//   });
//   describe("get_user_comment()", function () {
//     it("Should return Arr user.userComments with given email", function () {
//       const userComments = UserService.get_user_comment(testUser.userID);

//       expect(userComments).to.deep.equalInAnyOrder(testUser.userComments);
//     });
//   });
//   describe("get_user_comment_count()", function () {
//     it("Should return Number: lenght of Arr user.userComments with given email", function () {
//       const userCommentsCount = UserService.get_user_comment_count(
//         testUser.userID
//       );

//       expect(userCommentsCount).to.deep.equalInAnyOrder(
//         testUser.userComments.length
//       );
//     });
//   });
//   describe("set_user_comment_add()", function () {
//     it("Should return 0 and Add {commentId: 1000} to user.userComments", function () {
//       const addedCommentId = 1000;

//       expect(
//         UserService.set_user_comment_add(testUser.userID, addedCommentId)
//       ).to.be.equal(0);

//       expect(testUser.userComments).to.deep.include.members([
//         { commentId: addedCommentId },
//       ]);
//     });
//   });
//   describe("set_user_comment_remove()", function () {
//     it("Should return 0 and Remove {commentId: 1000} from user.userComments", function () {
//       const removedCommentId = 1000;

//       expect(
//         UserService.set_user_comment_remove(testUser.userID, removedCommentId)
//       ).to.be.equal(0);

//       expect(testUser.userComments).to.not.deep.include.members([
//         { commentId: removedCommentId },
//       ]);
//     });
//   });
// });
