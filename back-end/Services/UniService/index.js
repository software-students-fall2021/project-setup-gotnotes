const Uni = require("../../Models/Uni/index");

exports.get_all_unis = async () => {
  return await Uni.find().populate("uniCourses");
};

exports.get_uni_by_id = async (uniId) => {
  return await Uni.findOne({ _id: uniId }).populate("uniCourses");
};

exports.create_uni = async (uniName, uniLogoPath) => {
  const returnObj = {
    uni: null,
    dbSaveErr: false,
  };
  let new_uni = new Uni({
    uniName: uniName,
    uniLogoPath: uniLogoPath,
    uniStudents: [],
    uniCourses: [],
  });
  await new_uni
    .save()
    .then((uni) => {
      returnObj.uni = uni;
    })
    .catch((err) => {
      returnObj.dbSaveErr = err;
    });
  return returnObj;
};

exports.update_uni_scalar_by_uni_id = async (uniId, updateObject) => {
  return await Uni.findOneAndUpdate(
    { _id: uniId },
    { $set: updateObject },
    { new: true }
  ).populate("uniCourses");
};

exports.update_uni_arr_by_uni_id = async (
  uni,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !uni[fieldName].filter(
      (obj) => obj._id.toString() == referenceId.toString()
    ).length
  ) {
    newArr.push(referenceId, ...uni[fieldName]);
  } else if (type === "remove") {
    newArr.push(
      ...uni[fieldName].filter(
        (obj) => obj._id.toString() != referenceId.toString()
      )
    );
  } else {
    throw new Error("Cannot add item twice");
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await Uni.findOneAndUpdate(
    { _id: uni._id },
    { $set: updateObject },
    { new: true }
  ).populate("uniCourses");
};
