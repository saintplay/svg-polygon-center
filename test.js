'use strict'

var assert = require('assert');
var center = require('./');

describe('.center()', function () {
	it('should return the center of convex polygon', function () {
		var points = '128,224 256,224 256,352 128,352';
		var expected = {
			x: 192,
			y: 288
		};

		var actual = center(points);
		assert.deepEqual(actual, expected);
	});
});
