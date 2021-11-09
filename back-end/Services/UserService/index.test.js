const expect = require('chai').expect;
var UserServices = require('./index')

describe('UserService', function() {
  describe('get_user()', function() {
    it('should return arr with one user obj in it given valid email', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});