var assert = require('chai').assert;
var rover = require("./testApp.js").roverClass;


describe("getDirectionIndex finds the index of 'N', 'E', 'S', 'W'", function () {
    it("should return index of 'N' in array as 0", function () {
        assert.equal(new rover().getDirectionIndex("N"), 0);
    })
});

describe('runMission()', function () {
    it('should be a working function', function () {
        assert.isFunction(new rover().runMission, "great, mission deployed on Mars!");
    })
});

describe("new rover is an object of class Rover", function () {
    it("should return value as an object", function () {
        assert.isObject(new rover());
    })
});

describe("directions is an array = ['N', 'E', 'S', 'W']", function () {
    it('should return value as an array', function () {
        assert.isArray(new rover().directions);
    })
});
