//Bruteforce
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[j] + nums[i] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//Hashmap

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};

//tests
let nums = [2, 5, 5, 11];
let target = 10;

console.log(twoSum(nums, target));
