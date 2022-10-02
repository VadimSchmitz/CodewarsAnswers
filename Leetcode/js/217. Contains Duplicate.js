/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

nums = [1, 2, 3, 1];
containsDuplicate(nums);
