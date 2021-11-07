const userData = require('./../../Mock/UsersMockData/users.json')

const get_student_by_id = function (user_id) {
    return userData.filter(user => user.userID === user_id)
}

const get_students_by_course_id = function (course_id) {
    const students_by_course = [];
    userData.map((user) => {
        let count = 0;
        user.userSubscribed.map((course) => course.courseID === course_id && count++)
        count > 0 && students_by_course.push({username: user.username, userSubscribed: user.userSubscribed})
    })

    return students_by_course;
}



//console.log(get_student_by_id(10))

console.log(get_students_by_course_id(11))

