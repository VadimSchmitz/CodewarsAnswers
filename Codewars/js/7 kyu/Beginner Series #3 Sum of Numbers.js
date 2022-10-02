//https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

function getSum(a, b) {
  [a, b] = a > b ? [b, a] : [a, b];

  let result = 0;
  while (a <= b) {
    result += a;
    a++;
  }
  return result;
}

// getSum(1, 0); //--> 1 (1 + 0 = 1)
console.log(getSum(10, 20)); // --> 3 (1 + 2 = 3)
// getSum(0, 1); // --> 1 (0 + 1 = 1)
// getSum(1, 1); // --> 1 (1 since both are same)
// getSum(-1, 0); // --> -1 (-1 + 0 = -1)
// getSum(-1, 2); //--> 2 (-1 + 0 + 1 + 2 = 2)
