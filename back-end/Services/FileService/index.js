const fileData = require("./../../Mock/FilesMockData/file.json");
exports.fileData = fileData;
const db = require("../Database/index.js");
const file = require("../../Models/File/index");
const make_comment = require("../CommentService/index").make_comment;
/*
{
    "fileID":1,
    "fileName":"VestibulumSedMagna.ppt",
    "fileType":"application/powerpoint",
    "fileShareDate":"1/31/2021",
    "fileSharedBy":[
        {
            "userID":75
        }
    ],
    "fileDownloads":46,
    "fileLikedBy":[
        {"userId":24},{"userId":86},{"userId":82},
        {"userId":12},{"userId":14},{"userId":34},
        {"userId":89},{"userId":23},{"userId":40},
        {"userId":60},{"userId":70},{"userId":89},
        {"userId":91},{"userId":42},{"userId":38},
        {"userId":78}
    ],
    "fileDislikedBy":[
        {"userId":78}
    ],
    "fileComments":[
        {"commentId":29},{"commentId":14},{"commentId":50},
        {"commentId":19},{"commentId":72},{"commentId":78},
        {"commentId":33},{"commentId":37},{"commentId":29},
        {"commentId":19}
    ]
}
 */

exports.get_file = (fileID) => {
  return file.findOne({ _id: fileID });
};

exports.post_file = (fileName, fileType) => {
  let newFile = new file({
    fileName: fileName,
    fileType: fileType,
    fileShareDate: new Date(),
    fileSharedBy: [],
    fileDownloads: 0,
    fileLikedBy: [],
    fileDislikedBy: [],
    fileComments: [],
  });
  newFile.save(err, (file) => {
    if (err) {
      console.log(err);
    }
    let id = file._id;
  });
  return id;
};
exports.delete_file = (fileID) => {
  return file.deleteOne({ _id: fileID });
};
exports.set_fileSharedBy = (userID, fileID) => {
  return file.findOneAndUpdate(
    { _id: fileID },
    { $push: { fileSharedBy: { _id: userID } } },
    { new: true }
  );
};
exports.like_file = (fileID, likedById) => {
  return file.findOneAndUpdate(
    { _id: fileID },
    { $push: { fileLikedBy: { _id: likedById } } },
    { new: true }
  );
};
exports.dislike_file = (fileID, dislikedById) => {
  return file.findOneAndUpdate(
    { _id: fileID },
    { $push: { fileDislikedBy: { _id: dislikedById } } },
    { new: true }
  );
};
exports.set_fileName = (fileID) => {
  return file.findOneAndUpdate(
    { _id: fileID },
    { $set: { fileName: fileData.fileName } },
    { new: true }
  );
};
exports.comment_on_file = (fileID, comment, userID) => {
  id = make_comment(comment, userID, null);
  return file.findOneAndUpdate(
    { _id: fileID },
    { $push: { fileComments: id } },
    { new: true }
  );
};
exports.increase_fileDownloads = (fileID) => {
  return file.findOneAndUpdate(
    { fileID: fileID },
    { $inc: { fileDownloads: 1 } },
    { new: true }
  );
};
exports.file_unlike = (fileID, userID) => {
  return file.findOneAndUpdate(
    { fileID: fileID },
    { $pull: { fileLikedBy: { userID: userID } } },
    { new: true }
  );
};
exports.file_undislike = (fileID, userID) => {
  return file.findOneAndUpdate(
    { fileID: fileID },
    { $pull: { fileDislikedBy: { userID: userID } } },
    { new: true }
  );
};

// /**
//  * Get a file by the fileID
//  * @param {*} fileID
//  * @returns [{fileObj}] || []
//  */
// exports.get_file = function (fileID) {
//     return fileData.filter(file => file.fileID == fileID)
// }

// /**
//  * Set fileName
//  * @param {*} fileID
//  * @param {*} newFileName
//  * @returns boolean, 0 if success, 1 if no such file
//  */
// exports.set_fileName = function (fileID, newFileName) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileName = newFileName;

//     return 0;
// }

// /**
//  * Set a new fileType
//  * @param {*} fileID
//  * * @param {*} newFileType
//  * @returns boolean, 0 if success, 1 if no such file
//  */
// exports.set_fileType = function (fileID, newFileType) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileType = newFileType;

//     return 0;
// }

// /**
//  * Set a new fileType
//  * @param {*} fileID
//  * * @param {*} newFileShareDate
//  * @returns boolean, 0 if success, 1 if no such file
//  */
// exports.set_fileShareDate = function (fileID, newFileShareDate) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileShareDate = newFileShareDate;

//     return 0;
// }

// /**
//  * Set a new fileType
//  * @param {*} fileID, file id
//  * * @param {*} newFileSharedBy, a user obj
//  * @returns boolean, 0 if success, 1 if no such file
//  */
// exports.set_fileSharedBy = function (fileID, newFileSharedById) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileSharedBy = [{ userID: newFileSharedById }];

//     return 0;
// }

// /**
//  * Get file downloads
//  * @param {*} fileID
//  * @returns number || -1
//  */
exports.get_fileDownloads = (fileID) => {
  const file = exports.get_file(fileID)[0];
  if (!file) {
    return -1;
  }
  return file.fileDownloads;
};

// /**
//  * Increase file download counter by one
//  * @param {*} fileID
//  * @returns boolean, 0 if success, 1 if no such file
//  */
// exports.set_fileDownloads_increase = function (fileID) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileDownloads += 1;

//     return 0;
// }

// /**
//  * Set fileLikedBy like
//  * @param {*} fileLikedBy, like
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileLikedBy_like = function (fileID, likedById) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileLikedBy.push({ userId: likedById });

//     return 0;
// }

// /**
//  * Set fileLikedBy unlike
//  * @param {*} fileLikedBy, unlike
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileLikedBy_unlike = function (fileID, unlikedById) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     const newLikedBy = currentFile.fileLikedBy.filter(user => user.userId !== unlikedById);

//     currentFile.fileLikedBy = newLikedBy;

//     fileData.push(currentFile);

//     return 0;
// }

// /**
//  * Set fileDislikedBy like
//  * @param {*} fileDislikedBy, like
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileDislikedBy_dislike = function (fileID, dislikedById) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileDislikedBy.push({ userId: dislikedById });

//     fileData.push(currentFile);

//     return 0;
// }

// /**
//  * Set fileDislikedBy unlike
//  * @param {*} fileDislikedBy, unlike
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileDislikedBy_undislike = function (fileID, undislikedById) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     const newDislikedBy = currentFile.fileDislikedBy.filter(user => user.userId !== undislikedById);

//     currentFile.fileDislikedBy = newDislikedBy;

//     fileData.push(currentFile);

//     return 0;
// }

// /**
//  * Set fileAddComments
//  * @param {*} commentId
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileComments_add = function (fileID, commentId) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     currentFile.fileComments.push({commentId: commentId});

//     fileData.push(currentFile);

//     return 0;
// }

// /**
//  * Set fileRemoveComments
//  * @param {*} fileComments
//  * @returns [{fileObj}] || []
//  */
// exports.set_fileComments_remove = function (fileID, commentId) {
//     const currentFile = exports.get_file(fileID)[0];

//     if (!currentFile) return 1;

//     const newComments = currentFile.fileComments.filter(comment => comment.commentId !== commentId)
//     currentFile.fileComments = newComments;

//     fileData.push(currentFile);

//     return 0;
// }
exports.delete_file_comment = (fileID, commentId) => {
  file.findOneAndDelete(
    { _id: fileID, fileComments: { $elemMatch: { _id: commentId } } },
    (err, doc) => {
      if (err) {
        console.log(err);
      }
      console.log(doc);
    }
  );
  file.save();
};
