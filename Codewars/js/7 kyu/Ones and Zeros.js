//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
