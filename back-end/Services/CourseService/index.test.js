const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

var courseService = require('./index')
let uniData = require('./../../Mock/CoursesMockData/courses.json')
const testCourse = courseData[0];

describe('courseService', function () {
    describe('get_course_id()', function () {
        it('should return arr with one course obj in it given valid courseID', function () {

            const course = courseService.get_course_id(testCourse.courseID)

            expect(course[0]).to.deep.equalInAnyOrder(testCourse);

        });
    });
});