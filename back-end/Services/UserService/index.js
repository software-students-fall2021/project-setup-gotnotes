const db = require("../Database/index.js");
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

exports.make_admin = (userID) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $set: { isAdmin: true } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};
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

exports.add_user_uni = (userID, newUni) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $push: { userUni: newUni } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.add_user_subscribed = (userID, newSubscribed) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $push: { userSubscribed: newSubscribed } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.delete_user_subscribed = (userID, newSubscribed) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $pull: { userSubscribed: newSubscribed } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_liked = (userID, newLiked) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $push: { userLiked: newLiked } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_disliked = (userID, newDisliked) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $push: { userDisliked: newDisliked } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_unliked = (userID, newUnliked) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $pull: { userLiked: newUnliked } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_undisliked = (userID, newUndisliked) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $pull: { userDisliked: newUndisliked } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_comment = (userID, newComment) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $push: { userComments: newComment } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.user_uncomment = (userID, newComment) => {
  User.findOneAndUpdate(
    { _id: userID },
    { $pull: { userComments: newComment } },
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

/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email
 * @returns [{userObj}] || []
 */
exports.get_user = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user;
    }
  });
};

/**
 * Get a user by the username
 * @param {*} username
 * @returns [{userObj}] || []
 */
exports.get_user_by_id = (userID) => {
  User.findOne({ _id: userID }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user;
    }
  });
};

/**
 * Return the pass hash of a user with given email, if no such user return null
 * @param {*} email
 * @returns String || null
 */
exports.get_user_pass_hash = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.passwordHash;
    }
  });
};

/**
 * Sets a new pass hash for the user with given email
 * @param {*} email the email of the user, praimry key
 * @param {*} newPassHash the new pass hash to be inserted
 * @returns 0 if success, 1 of no such user
 */
exports.set_user_pass_hash = (email, newPassHash) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { passwordHash: newPassHash } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

/**
 * Checks whether user with given email is an admin, returns true if admin, false if not
 * @param {*} email
 * @returns boolean || null, true if user is admin, false otherwise, null if no such user
 */
exports.get_user_authority = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.isAdmin;
    }
  });
};

exports.set_user_authority = (email, newAuthority) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { isAdmin: newAuthority } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

/**
 * Return the avatar url of the user with given email
 * @param {*} email
 * @returns String || null
 */
exports.get_user_avatar_url = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userAvatarUrl;
    }
  });
};

/**
 * sets the new user avatar url for the user with given email, returns 0 if success, 1 if no such user
 * @param {*} email
 * @param {*} newAvatarUrl
 * @returns 1 || 0
 */
exports.set_user_avatar_url = (email, newAvatarUrl) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { userAvatarUrl: newAvatarUrl } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_first_name = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.firstName;
    }
  });
};

exports.set_user_first_name = (email, newFirstName) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { firstName: newFirstName } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_last_name = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.lastName;
    }
  });
};

exports.set_user_last_name = (email, newLastName) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { lastName: newLastName } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_uni = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.uni;
    }
  });
};

exports.set_user_uni = (email, newUni) => {
  User.findOneAndUpdate(
    { email: email },
    { $set: { uni: newUni } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_subscribed = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userSubscribed;
    }
  });
};

exports.set_user_subscribed_add = (email, addedCourseId) => {
  User.findOneAndUpdate(
    { email: email },
    { $addToSet: { userSubscribed: addedCourseId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.set_user_subscribed_remove = (email, removedCourseId) => {
  User.findOneAndUpdate(
    { email: email },
    { $pull: { userSubscribed: removedCourseId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_liked = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userLiked;
    }
  });
};

exports.get_user_liked_count = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userLiked.length;
    }
  });
};

exports.set_user_liked_add = (email, addedFileId) => {
  User.findOneAndUpdate(
    { email: email },
    { $addToSet: { userLiked: addedFileId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.set_user_liked_remove = (email, removedFileId) => {
  User.findOneAndUpdate(
    { email: email },
    { $pull: { userLiked: removedFileId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_disliked = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userDisliked;
    }
  });
};

exports.get_user_disliked_count = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userDisliked.length;
    }
  });
};

exports.set_user_disliked_add = (email, addedFileId) => {
  User.findOneAndUpdate(
    { email: email },
    { $addToSet: { userDisliked: addedFileId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.set_user_disliked_remove = (email, removedFileId) => {
  User.findOneAndUpdate(
    { email: email },
    { $pull: { userDisliked: removedFileId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.get_user_comment = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userComment;
    }
  });
};

exports.get_user_comment_count = (email) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.userComment.length;
    }
  });
};

exports.set_user_comment_add = (email, addedCommentId) => {
  User.findOneAndUpdate(
    { email: email },
    { $addToSet: { userComment: addedCommentId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

exports.set_user_comment_remove = (email, removedCommentId) => {
  User.findOneAndUpdate(
    { email: email },
    { $pull: { userComment: removedCommentId } },
    { new: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
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
