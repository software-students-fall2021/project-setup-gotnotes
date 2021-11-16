const userData = require('./../../Mock/UsersMockData/users.json');

exports.userData = userData;


/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
exports.get_user = function (email) {
    return userData.filter(user => user.userID === email)
}

/**
 * Get a user by the username
 * @param {*} username 
 * @returns [{userObj}] || []
 */
exports.get_user_by_username = function (username) {
    return userData.filter(user => user.username === username)
}

/**
 * Return the pass hash of a user with given email, if no such user return null
 * @param {*} email 
 * @returns String || null
 */
exports.get_user_pass_hash = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.passwordHash)
        return user.passwordHash
    return null;
}

/**
 * Sets a new pass hash for the user with given email
 * @param {*} email the email of the user, praimry key
 * @param {*} newPassHash the new pass hash to be inserted
 * @returns 0 if success, 1 of no such user
 */
exports.set_user_pass_hash = function (email, newPassHash) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.passwordHash = newPassHash;

    return 0;
}

/**
 * Checks whether user with given email is an admin, returns true if admin, false if not
 * @param {*} email 
 * @returns boolean || null, true if user is admin, false otherwise, null if no such user
 */
exports.get_user_authority = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.isAdmin)
        return user.isAdmin
    return null;
}

exports.set_user_authority = function (email, newAuthority) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.isAdmin = newAuthority;

    return 0;
}

/**
 * Return the avatar url of the user with given email
 * @param {*} email 
 * @returns String || null
 */
exports.get_user_avatar_url = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userAvatarUrl)
        return user.userAvatarUrl
    return null;
}

/**
 * sets the new user avatar url for the user with given email, returns 0 if success, 1 if no such user
 * @param {*} email 
 * @param {*} newAvatarUrl 
 * @returns 1 || 0
 */
exports.set_user_avatar_url = function (email, newAvatarUrl) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.userAvatarUrl = newAvatarUrl;

    return 0;

}

exports.get_user_first_name = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.firstName)
        return user.firstName
    return null;
}

exports.set_user_first_name = function (email, newFirstName) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.firstName = newFirstName;

    return 0;

}

exports.get_user_last_name = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.lastName)
        return user.lastName
    return null;
}

exports.set_user_last_name = function (email, newLastName) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.lastName = newLastName;

    return 0;

}

exports.get_user_uni = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userUni)
        return user.userUni
    return null;
}

exports.set_user_uni = function (email, newUniId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.userUni = newUniId;

    return 0;

}


exports.get_user_subscribed = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userSubscribed)
        return user.userSubscribed
    return null;
}

exports.set_user_subscribed_add = function (email, addedCourseId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    const addedCourseData = { courseID: addedCourseId }

    currentUser.userSubscribed.push(addedCourseData);

    return 0;

}

exports.set_user_subscribed_remove = function (email, removedCourseId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.userSubscribed = currentUser.
        userSubscribed.
        filter(course =>
            course.courseID !== removedCourseId
        )

    return 0;

}

exports.get_user_liked = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userLiked)
        return user.userLiked
    return null;
}

exports.get_user_liked_count = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userLiked)
        return user.userLiked.length
    return null;
}
exports.set_user_liked_add = function (email, addedFileId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    const addedFileData = { fileID: addedFileId }

    currentUser.userLiked.push(addedFileData);

    return 0;

}

exports.set_user_liked_remove = function (email, removedFileId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.userLiked = currentUser.
        userLiked.
        filter(file =>
            file.fileID !== removedFileId
        )

    return 0;

}

exports.get_user_disliked = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userDisliked)
        return user.userDisliked
    return null;
}
exports.get_user_disliked_count = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userDisliked)
        return user.userDisliked.length
    return null;
}

exports.set_user_disliked_add = function (email, addedFileId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    const addedFileData = { fileID: addedFileId }

    currentUser.userDisliked.push(addedFileData);

    return 0;

}

exports.set_user_disliked_remove = function (email, removedFileId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;


    currentUser.userDisliked = currentUser.
        userLiked.
        filter(file =>
            file.fileID !== removedFileId
        )


    return 0;

}

exports.get_user_comment = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userComments)
        return user.userComments
    return null;
}

exports.get_user_comment_count = function (email) {
    const user = exports.get_user(email)[0];
    if (user?.userComments)
        return user.userComments.length
    return null;
}

exports.set_user_comment_add = function (email, addedCommentId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    const addedCommentData = { commentId: addedCommentId }

    currentUser.userComments.push(addedCommentData);

    return 0;

}

exports.set_user_comment_remove = function (email, removedCommentId) {
    const currentUser = exports.get_user(email)[0];

    if (!currentUser) return 1;

    currentUser.userComments = currentUser.
        userLiked.
        filter(comment =>
            comment.commentId !== removedCommentId
        )

    return 0;

}



exports.get_users_by_course_id = function (course_id) {
    const students_by_course = [];
    userData.map((user) => {
        let count = 0;
        user.userSubscribed.map((course) => course.courseID === course_id && count++)
        count > 0 && students_by_course.push({ username: user.username, userSubscribed: user.userSubscribed })
    })

    return students_by_course;
}