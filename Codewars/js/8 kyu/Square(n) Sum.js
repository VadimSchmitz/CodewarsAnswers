//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0 //instantiates sum);
}

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

arr = [10, 10]; //1085
squareSum(arr);
