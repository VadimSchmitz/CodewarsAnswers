//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  return [...iterable].filter(
    (element, index) => element !== iterable[index - 1]
  );
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); //== ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder("ABBCcAD")); //== ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // == [1,2,3]

// expected [ 'A', 'B', 'C', 'c', 'D' ] to deeply equal [ 'A', 'B', 'C', 'c', 'A', 'D' ]
