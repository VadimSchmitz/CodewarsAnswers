//https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 9 3 4 -5"));
