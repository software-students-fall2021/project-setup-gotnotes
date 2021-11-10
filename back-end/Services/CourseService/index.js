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


/**
 * Set course name- it might be updated
 * @param {*} courseID 
 * @param {*} courseName 
 * @returns 1 if succesfule edit 0 doesnt happen
 */
exports.set_course_courseName  = function (courseID, courseName) {
    const course = get_course_id(courseID)[0];

    if (!course) return 0;

    courseData = courseData.filter(course => course.courseID !== courseID);

    currentUser[0].courseName= courseName;

    courseData.push(couse);

    return 1;

}

/**
 * add new student to the course list
 * @param {*} courseID 
 * @param {*} studentID  
 * @returns 1 if succesfule addition 0 doesnt happen
 */
 exports.add_course_student = function (courseID, userID) {
    const course = get_course_id(courseID)[0];

    if (!course) return 0;

    courseData = courseData.filter(course => course.courseID !== courseID);

    const addStudent= {userID: userID }

    course[0].courseEnrolledStudents.push(addStudent);

    courseData.push(course);

    return 1;

}



