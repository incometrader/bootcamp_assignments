var jasmine = require("jasmine");
var findMinMax = require("../src/minMax");

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 9] for [2, 4, 6, 8, 9]', function () {
        expect(findMinMax([2, 4, 6, 8, 9])).toEqual([2, 9]);
      });

      it('should return [0, 9] for [2, 1, 3, 9, 0, 5, 7]', function () {
        expect(findMinMax([2, 1, 3, 9, 0, 5, 7])).toEqual([0, 9]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [5, 100] for [5, 10, 20, 90, 30, 70, 80, 100, 88]', function () {
        expect(findMinMax([88, 10, 20, 90, 30, 70, 80, 100, 5])).toEqual([5, 100]);
      });

      it('should return [3, 910] for [4, 910, 720, 790, 430, 70, 80, 100, 88, 105, 306, 609, 3]', function () {
        expect(findMinMax([4, 910, 720, 790, 430, 70, 80, 100, 88, 105, 306, 609, 3])).toEqual([3, 910]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [10] for [10, 10, 10]', function () {
        expect(findMinMax([10, 10, 10])).toEqual([10]);
      });

      it('should return [55] for [55, 55]', function () {
        expect(findMinMax([55, 55])).toEqual([55]);
      });

    });

  });

})();