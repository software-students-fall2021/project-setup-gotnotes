const User = require("../../Models/User");

exports.create_user = async (email, username, passwordHash) => {
  const new_user = new User({
    email: email,
    username: username,
    passwordHash: passwordHash,
    isAdmin: false,
    subscribed: [],
    likes: [],
    dislikes: [],
    comments: [],
  });

  const returnObj = {
    user: null,
    dbSaveErr: false,
  };

  await new_user
    .save()
    .then((user) => {
      returnObj.user = user;
    })
    .catch((err) => {
      returnObj.dbSaveErr = err;
    });

  return returnObj;
};

exports.get_user_by_email_or_username = async (usernameOrEmail) => {
  const returnObj = {
    user: null,
  };
  await User.findOne({
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
  })
    .populate("subscribed")
    .populate("likes")
    .populate("dislikes")
    .populate("comments")
    .populate("shared")
    .then((user) => {
      returnObj.user = user;
    });
  return returnObj;
};

exports.make_admin = async (usernameOrEmail, isAdminNew) => {
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: { isAdmin: isAdminNew } },
    { new: true }
  )
    .populate("subscribed")
    .populate("likes")
    .populate("dislikes")
    .populate("comments")
    .populate("shared");
};

exports.update_user_scalar_by_email_or_username = async (
  usernameOrEmail,
  updateObject
) => {
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: updateObject },
    { new: true }
  )
    .populate("subscribed")
    .populate("likes")
    .populate("dislikes")
    .populate("comments")
    .populate("shared");
};

exports.update_user_arr_by_email_or_username = async (
  usernameOrEmail,
  user,
  type,
  fieldName,
  referenceId
) => {
  const newArr = [];
  if (
    type === "add" &&
    !user[fieldName].filter(
      (obj) => obj._id.toString() == referenceId.toString()
    ).length
  ) {
    newArr.push(referenceId, ...user[fieldName]);
  } else if (type === "remove") {
    newArr.push(
      ...user[fieldName].filter(
        (obj) => obj._id.toString() != referenceId.toString()
      )
    );
  } else {
    throw new Error(`Cannot add ${fieldName} twice`);
  }

  const updateObject = {
    [fieldName]: newArr,
  };
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: updateObject },
    { new: true }
  )
    .populate("subscribed")
    .populate("likes")
    .populate("dislikes")
    .populate("comments")
    .populate("shared");
};

exports.delete_user = (userID) => {
  User.findOneAndDelete({ _id: userID }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
