let courseData = require('./../../Mock/CoursesMockData/courses.json')

/**
 * Get course by ID
 * @param {*} uniID 
 * @returns [{userObj}] || []
 */
 exports.get_course_id = function (courseID) {
    return uniData.filter(course => course.courseID === courseID)
}

/**
 * Get course by name
 * @param {*} courseName 
 * @returns [{userObj}] || []
 */
 exports.get_uni_name = function (courseName) {
    return uniData.filter(course => course.courseName === courseName)
}
