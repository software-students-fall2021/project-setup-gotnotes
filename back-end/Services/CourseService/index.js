const courseData = require('./../../Mock/CoursesMockData/courses.json')
exports.courseData = courseData
//Although we can get by id or course name the primary keys are courseID

/*
{
    "courseID":1,
    "courseName":"Glamour",
    "courseEnrolledStudents":[
        {"userId":32},
        {"userId":87}
    ],
    "courseSharedFiles":[
        {"fileID":51},{"fileID":70},{"fileID":38},{"fileID":95},{"fileID":85},
        {"fileID":26},{"fileID":20},{"fileID":45},{"fileID":11},{"fileID":24},
        {"fileID":87},{"fileID":25},{"fileID":14},{"fileID":60},{"fileID":10},
        {"fileID":97},{"fileID":91},{"fileID":33},{"fileID":21},{"fileID":10},
        {"fileID":12},{"fileID":90},{"fileID":47},{"fileID":49},{"fileID":15},
        {"fileID":98},{"fileID":70},{"fileID":79},{"fileID":68},{"fileID":30},
        {"fileID":22},{"fileID":14},{"fileID":98},{"fileID":12},{"fileID":95},
        {"fileID":56},{"fileID":67},{"fileID":17},{"fileID":99},{"fileID":89},
        {"fileID":30},{"fileID":32},{"fileID":47},{"fileID":93},{"fileID":92},
        {"fileID":16},{"fileID":79},{"fileID":69}
    ]
},
*/
/**
 * Get course by ID
 * @param {*} uniID 
 * @returns [{userObj}] || []
 */
exports.get_course_id = function (courseID) {
    return uniData.filter(course => course.courseID === courseID)
}

/**
 * Get course enrolled students
 * @param {*} courseID
 * @returns [{courseEnroleldStudentsObj}] || []
 */
exports.get_course_enrolled = function (courseID) {
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
exports.set_course_courseName = function (courseID, courseName) {
    const course = get_course_id(courseID)[0];

    if (!course) return 0;

    courseData = courseData.filter(course => course.courseID !== courseID);

    course.courseName = courseName;

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

    const addStudent = { userID: userID }

    course.courseEnrolledStudents.push(addStudent);

    courseData.push(course);

    return 1;

}



