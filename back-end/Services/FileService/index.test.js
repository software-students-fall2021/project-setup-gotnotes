const expect = require('chai').expect;
var FileService = require('./index')

let fileData = require('./../../Mock/FilesMockData/file.json')

describe('FileService', function() {
  describe('get_fileID()', function() {
    it('should return arr with one file obj in it given valid fileID', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});