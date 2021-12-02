const File = require("../../Models/File/index");

exports.get_all_files = async () => {
  return await File.find()
    .populate("fileSharedBy")
    .populate("likes")
    .populate("dislikes")
    .populate("comments");
};

exports.get_file_by_id = async (fileID) => {
  return await File.findOne({ _id: fileID })
    .populate("fileSharedBy")
    .populate("likes")
    .populate("dislikes")
    .populate("comments");
};

exports.create_file = async (
  fileName,
  fileLink,
  fileType,
  fileShareDate,
  fileSharedBy
) => {
  const returnObj = {
    file: null,
    dbSaveErr: false,
  };
  let new_file = new File({
    fileName: fileName,
    fileLink: fileLink,
    fileType: fileType,
    fileShareDate: fileShareDate,
    fileSharedBy: fileSharedBy,
    likes: [],
    dislikes: [],
    comments: [],
    fileDownloads: 0,
  });
  await new_file
    .save()
    .populate("fileSharedBy")
    .then((file) => {
      returnObj.file = file;
    })
    .catch((err) => {
      returnObj.dbSaveErr = err;
    });
  return returnObj;
};

exports.update_file_scalar_by_file_id = async (fileId, updateObject) => {
  return await File.findOneAndUpdate(
    { _id: fileId },
    { $set: updateObject },
    { new: true }
  )
    .populate("fileSharedBy")
    .populate("likes")
    .populate("dislikes")
    .populate("comments");
};

exports.update_file_arr_by_file_id = async (
  file,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !file[fieldName].filter((obj) => obj._id == referenceId).length
  ) {
    newArr.push(referenceId, ...file[fieldName]);
  } else if (type === "remove") {
    newArr.push(...file[fieldName].filter((obj) => obj._id != referenceId));
  } else {
    throw new Error("Cannot add item twice");
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await File.findOneAndUpdate(
    { _id: file._id },
    { $set: updateObject },
    { new: true }
  )
  .populate("fileSharedBy")
  .populate("likes")
  .populate("dislikes")
  .populate("comments");
};
