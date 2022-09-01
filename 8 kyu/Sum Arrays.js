//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/javascript

function sum(numbers) {
  return numbers.length > 0 ? numbers.reduce((a, b) => a + Number(b)) : 0;
}

console.log(sum([1, 5.2, 4, 0, -1]));
