let courseData = require('./../../Mock/CoursesMockData/courses.json')
//Although we can get by id or course name the primary keys are courseID

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
 exports.get_course_name = function (courseName) {
    return uniData.filter(course => course.courseName === courseName)
}


/**
 * Get course enrolled students
 * @param {*} courseID
 * @returns [{courseEnroleldStudentsObj}] || []
 */
 exports.get_course_enrolled  = function (courseID) {
    const course = get_course_id(courseID)[0];
    if (course?.courseEnrolledStudents)
        return user.courseEnrolledStudents;
    return null;
}

/**
 * Get course shared files
 * @param {*} courseID 
 * @returns [{courseEnroleldStudentsObj}] || []
 */
 exports.get_course_files = function (courseID) {
    const course = get_course_id(courseID)[0];
    if (course?.courseSharedFiles)
        return course.courseSharedFiles;
    return null;
}


