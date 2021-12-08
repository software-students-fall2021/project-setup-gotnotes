const File = require("../../Models/File/index");

exports.get_all_files = async () => {
  return await File.find()
    .populate("sharedBy")
    .populate("likes")
    .populate("dislikes");
};

exports.get_file_by_id = async (fileID) => {
  return await File.findOne({ _id: fileID })
    .populate("sharedBy")
    .populate("likes")
    .populate("dislikes");
};

exports.create_file = async (name, uri, type, shareDate, sharedBy) => {
  const returnObj = {
    file: null,
    dbSaveErr: false,
  };
  let new_file = new File({
    name: name,
    uri: uri,
    type: type,
    shareDate: shareDate,
    sharedBy: sharedBy,
    likes: [],
    dislikes: [],
    downloads: 0,
  });
  await new_file
    .save()
    .then(async (file) => {
      returnObj.file = await file.populate("sharedBy").execPopulate();
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
    .populate("sharedBy")
    .populate("likes")
    .populate("dislikes");
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
    newArr.push(
      ...file[fieldName].filter(
        (obj) => obj._id.toString() != referenceId.toString()
      )
    );
  } else {
    throw new Error(`Cannot add ${fieldName} twice`);
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await File.findOneAndUpdate(
    { _id: file._id },
    { $set: updateObject },
    { new: true }
  )
    .populate("sharedBy")
    .populate("likes")
    .populate("dislikes");
};

exports.delete_file_by_file_id = async (fileId) => {
  await File.findOneAndDelete({ _id: fileId });
};
