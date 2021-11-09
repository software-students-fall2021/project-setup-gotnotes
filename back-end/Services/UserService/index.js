let userData = require('./../../Mock/UsersMockData/users.json')

/**
 * Get a user by the email, which is the unique key of users table
 * @param {email} email 
 * @returns [{userObj}] || []
 */
const get_user_by_email = function (email) {
    return userData.filter(user => user.userID === email)
}

/**
 * Get a user by the username
 * @param {*} username 
 * @returns [{userObj}] || []
 */
const get_user_by_username = function (username) {
    return userData.filter(user => user.username === username)
}

/**
 * Return the pass hash of a user with given email, if no such user return null
 * @param {*} email 
 * @returns String || null
 */
const get_user_pass_hash_by_email = function (email) {
    const user = userData.filter(user => user.userID === email);
    if (user[0].passwordHash)
        return user[0].passwordHash
    return null;
}

const set_user_pass_hash_by_email = function (email, newPassHash){
    const currentUser = get_user_by_email(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.passwordHash = newPassHash;

    userData.push(currentUser);

    return 0;
}


/**
 * Checks whether user with given email is an admin, returns true if admin, false if not
 * @param {*} email 
 * @returns boolean
 */
const get_user_authority_by_email = function (email) {
    return get_user_by_email(email)[0].isAdmin;
}

const set_user_authority_by_email = function (email, newAuthority) {
    const currentUser = get_user_by_email(email)[0];

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.isAdmin = newAuthority;

    userData.push(currentUser);

    return 0;
}

/**
 * Return the avatar url of the user with given email
 * @param {*} email 
 * @returns String || null
 */
const get_user_avatar_url_by_email = function (email) {
    const user = get_user_by_email(email);
    if (user[0].userAvatarUrl)
        return user[0].userAvatarUrl
    return null;
}

/**
 * sets the new user avatar url for the user with given email, returns 0 if success, 1 if no such user
 * @param {*} email 
 * @param {*} newAvatarUrl 
 * @returns 1 || 0
 */
const set_user_avatar_url_by_email = function (email, newAvatarUrl) {
    const currentUser = get_user_by_email(email);

    if (!currentUser) return 1;

    userData = userData.filter(user => user.userID !== email);

    currentUser.userAvatarUrl = newAvatarUrl;

    userData.push(currentUser);

    return 0;

}






const get_users_by_course_id = function (course_id) {
    const students_by_course = [];
    userData.map((user) => {
        let count = 0;
        user.userSubscribed.map((course) => course.courseID === course_id && count++)
        count > 0 && students_by_course.push({ username: user.username, userSubscribed: user.userSubscribed })
    })

    return students_by_course;
}




//console.log(get_student_by_id(10))

console.log(get_students_by_course_id(11))

