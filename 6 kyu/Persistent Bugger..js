//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = eval([...String(num)].join("*"));
    count++;
  }
  return count;
}

function persistence(num) {
  let count = 0;
  num = num.toString();

  while (num.length > 1) {
    count++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return count;
}

a = 39; //--> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
b = 25; //--> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
c = 4; // --> 0 (because 4 is already a one-digit number)

// persistence(a);
persistence(b);
// persistence(c);
