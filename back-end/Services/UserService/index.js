const User = require("../../Models/User");

exports.create_user = async (email, username, passwordHash) => {
  const new_user = new User({
    email: email,
    username: username,
    passwordHash: passwordHash,
    isAdmin: false,
    userSubscribed: [],
    userLiked: [],
    userDisliked: [],
    userComments: [],
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
  }).then((user) => {
    returnObj.user = user;
  });
  return returnObj;
};

exports.make_admin = async (usernameOrEmail, isAdminNew) => {
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: { isAdmin: isAdminNew } },
    { new: true }
  );
};

exports.update_user_scalar_by_email_or_username = async (usernameOrEmail, updateObject) => {
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: updateObject },
    { new: true }
  );
}
exports.update_user_arr_by_email_or_username = async (usernameOrEmail, updateObject) => {
  
  return await User.findOneAndUpdate(
    { $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] },
    { $set: updateObject },
    { new: true }
  );
}

exports.set_user_avatar_url = (userID, newAvatarUrl) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $set: { userAvatarUrl: newAvatarUrl } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};


exports.delete_user = (userID) => {
  User.findOneAndDelete({ _id: userID }, (err) => {
    if (err) {
      console.log(err);
    }
  });
};


exports.get_users_by_course_id = (courseID) => {
  User.find({ userSubscribed: courseID }, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      return users;
    }
  });
};
