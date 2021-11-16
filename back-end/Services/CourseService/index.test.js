const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

const courseService = require('./index')
const courseData = courseService.courseData 
const testCourse = courseData[0];

describe('CourseService', function () {
    describe('get_course()', function () {
        it('should return arr with one course obj in it given valid courseID', function () {

            const course = courseService.get_course(testCourse.courseID)

            expect(course[0]).to.deep.equalInAnyOrder(testCourse);

        });
    });
});