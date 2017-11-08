/* global describe, it, before */

import chai from 'chai';
import center from '../dist/svg-polygon-center.min.js';

chai.expect();

const expect = chai.expect;

let points, expected;

describe('Returns the center of polygon', () => {
  before(() => {
    points = '128,224 256,224 256,352 128,352';
    expected = {
      x: 192,
      y: 288
    };
  });
  describe('when I give a convex polygon', () => {
    it('Should return the center', () => {
      const actual = center(points);

      expect(actual).to.deep.equal(expected);
    });
  });
});
