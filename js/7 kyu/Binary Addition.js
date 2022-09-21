//https://www.codewars.com/kata/551f37452ff852b7bd000139/javascript

function addBinary(a, b) {
  return Number(a + b).toString(2);
}

console.log(addBinary(1, 1)); // --> "10" (1 + 1 = 2 in decimal or 10 in binary)
console.log(addBinary(5, 9)); // --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
