//https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript

// var summation = function (num) {
//   return Array.from(Array(num+1).keys()).reduce((a, b) => a + b, 0);
// };

const summation = n => n * (n + 1) / 2;

summation(8);
