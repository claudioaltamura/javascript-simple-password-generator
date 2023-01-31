var expect = require('chai').expect;
var getPassword = require('../index.js').getPassword;

describe('password', function () {

    it('should return password', function () {
      expect(getPassword()).to.not.be.null;
    });

})