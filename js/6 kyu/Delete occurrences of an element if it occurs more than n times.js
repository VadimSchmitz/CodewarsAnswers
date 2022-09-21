//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

// const deleteNth = (arr, maxReps) => {
//   return arr.length
//     ? arr.reduce(
//         (acc, num, i) => {
//           acc.found[num] = acc.found[num] ? ++acc.found[num] : 1;
//           if (acc.found[num] <= maxReps) acc.arr.push(num);
//           return i === arr.length - 1 ? acc.arr : acc;
//         },
//         { found: {}, arr: [], arr2: [] }
//       )
//     : arr;
// };

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

//es5
const deleteNth = (a, x) => {
  let cache = {};
  return a.filter((num) => (cache[num] = cache[num] + 1 || 1) <= x);
};

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // =>[1,2,3,1,2,3]
// deleteNth([1, 1, 3, 3, 7, 2, 2, 2], 2); // =>[1, 1, 3, 3, 7, 2, 2, 2]

//n =2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2]
