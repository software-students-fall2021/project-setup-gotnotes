const userData = require('./../../Mock/UsersMockData/users.json');
import users from '../../Models/User/index'
exports.userData = userData;

exports.create_user = (username, firstName, lastName) => {
    new_user = new users({
        username: username,
        firstName: firstName,
        lastName: lastName,
        // Not to sure what to do about the passwordHash
        isAdmin: false,
        userAvatarUrl: "",
        userUni: "",
        passwordHash: "",
        userSubscribed: [],
        userLiked: [],
        userDisliked: [],
        userComments: [],
    })
    new_user.save(err, user => {
        if (err) {
            console.log(err);
        }
        else {
            let id = user._id;
            return id;
        }
    })
}

exports.make_admin = (userID) => {
    users.findOneAndUpdate({_id: userID}, {$set: {isAdmin: true}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })    
}
exports.set_user_avatar_url = (userID, newAvatarUrl) => {
    users.findOneAndUpdate({_id: userID}, {$set: {userAvatarUrl: newAvatarUrl}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.add_user_uni = (userID, newUni) => {
    users.findOneAndUpdate({_id: userID}, {$push: {userUni: newUni}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.add_user_subscribed = (userID, newSubscribed) => {
    users.findOneAndUpdate({_id: userID}, {$push: {userSubscribed: newSubscribed}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.delete_user_subscribed = (userID, newSubscribed) => {
    users.findOneAndUpdate({_id: userID}, {$pull: {userSubscribed: newSubscribed}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}



exports.user_liked = (userID, newLiked) => {
    users.findOneAndUpdate({_id: userID}, {$push: {userLiked: newLiked}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.user_disliked = ( userID, newDisliked) => {
    users.findOneAndUpdate({_id: userID}, {$push: {userDisliked: newDisliked}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.user_unliked = (userID, newUnliked) => {
    users.findOneAndUpdate({_id: userID}, {$pull: {userLiked: newUnliked}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.user_undisliked = (userID, newUndisliked) => {
    users.findOneAndUpdate({_id: userID}, {$pull: {userDisliked: newUndisliked}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.user_comment = (userID, newComment) => {
    users.findOneAndUpdate({_id: userID}, {$push: {userComments: newComment}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.user_uncomment = (userID, newComment) => {
    users.findOneAndUpdate({_id: userID}, {$pull: {userComments: newComment}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.delete_user = (userID) => {
    users.findOneAndDelete({_id: userID}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}




/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
exports.get_user = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user;
        }
    })
}

/**
 * Get a user by the username
 * @param {*} username 
 * @returns [{userObj}] || []
 */
exports.get_user_by_id = (userID) => {
    users.findOne({_id: userID}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user;
        }
    })
}

/**
 * Return the pass hash of a user with given email, if no such user return null
 * @param {*} email 
 * @returns String || null
 */
exports.get_user_pass_hash = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.passwordHash;
        }
    })
}



/**
 * Sets a new pass hash for the user with given email
 * @param {*} email the email of the user, praimry key
 * @param {*} newPassHash the new pass hash to be inserted
 * @returns 0 if success, 1 of no such user
 */
exports.set_user_pass_hash = (email, newPassHash) => {
    users.findOneAndUpdate({email: email}, {$set: {passwordHash: newPassHash}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

/**
 * Checks whether user with given email is an admin, returns true if admin, false if not
 * @param {*} email 
 * @returns boolean || null, true if user is admin, false otherwise, null if no such user
 */
exports.get_user_authority = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.isAdmin;
        }
    })
}


exports.set_user_authority = (email, newAuthority) => {
    users.findOneAndUpdate({email: email}, {$set: {isAdmin: newAuthority}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}


/**
 * Return the avatar url of the user with given email
 * @param {*} email 
 * @returns String || null
 */
exports.get_user_avatar_url = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userAvatarUrl;
        }
    })
}


/**
 * sets the new user avatar url for the user with given email, returns 0 if success, 1 if no such user
 * @param {*} email 
 * @param {*} newAvatarUrl 
 * @returns 1 || 0
 */
exports.set_user_avatar_url = (email, newAvatarUrl) => {
    users.findOneAndUpdate({email: email}, {$set: {userAvatarUrl: newAvatarUrl}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}   

exports.get_user_first_name = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.firstName;
        }
    })
}

exports.set_user_first_name = (email, newFirstName) => {
    users.findOneAndUpdate({email: email}, {$set: {firstName: newFirstName}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.get_user_last_name = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.lastName;
        }
    })
}

exports.set_user_last_name = (email, newLastName) => {
    users.findOneAndUpdate({email: email}, {$set: {lastName: newLastName}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.get_user_uni = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.uni;
        }
    })
}

exports.set_user_uni = (email, newUni) => {
    users.findOneAndUpdate({email: email}, {$set: {uni: newUni}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}


exports.get_user_subscribed = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userSubscribed;
        }
    })
}


exports.set_user_subscribed_add = (email, addedCourseId) => {
    users.findOneAndUpdate({email: email}, {$addToSet: {userSubscribed: addedCourseId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.set_user_subscribed_remove =  (email, removedCourseId) => {
    users.findOneAndUpdate({email: email}, {$pull: {userSubscribed: removedCourseId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.get_user_liked = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userLiked;
        }
    })
}

exports.get_user_liked_count = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userLiked.length;
        }
    })
}


exports.set_user_liked_add = (email, addedFileId) =>{
    users.findOneAndUpdate({email: email}, {$addToSet: {userLiked: addedFileId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.set_user_liked_remove = (email, removedFileId) => {
    users.findOneAndUpdate({email: email}, {$pull: {userLiked: removedFileId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.get_user_disliked = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userDisliked;
        }
    })
}


exports.get_user_disliked_count = (email) =>{
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userDisliked.length;
        }
    })
}

exports.set_user_disliked_add = (email, addedFileId) => {
    users.findOneAndUpdate({email: email}, {$addToSet: {userDisliked: addedFileId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.set_user_disliked_remove = (email, removedFileId) => {
    users.findOneAndUpdate({email: email}, {$pull: {userDisliked: removedFileId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}


exports.get_user_comment = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userComment;
        }
    })
}

exports.get_user_comment_count = (email) => {
    users.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            return user.userComment.length;
        }
    })
}

exports.set_user_comment_add = (email, addedCommentId) => {
    users.findOneAndUpdate({email: email}, {$addToSet: {userComment: addedCommentId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

exports.set_user_comment_remove = (email, removedCommentId) => {
    users.findOneAndUpdate({email: email}, {$pull: {userComment: removedCommentId}}, {new: true}, (err) => {
        if (err) {
            console.log(err);
        }
    })
}



exports.get_users_by_course_id = (courseID) => {
    users.find({userSubscribed: courseID}, (err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            return users;
        }
    })
}