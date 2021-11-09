const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

var UserService = require('./index')
let userData = require('./../../Mock/UsersMockData/users.json')
const testUser = userData[0];

describe('UserService', function () {
    describe('get_user()', function () {
        it('should return arr with one user obj in it given valid email', function () {

            const user = UserService.get_user(testUser.userID)

            expect(user[0]).to.deep.equalInAnyOrder(testUser);

        });
    });
});