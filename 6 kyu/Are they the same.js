//https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length != array2.length)
    return false;

  array1 = array1.map((x) => x * x);

  array1 = array1.sort((a, b) => a - b);
  array2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] !== array1[i]) {
      return false;
    }
  }
  return true;
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

c = [9, 3, 3, 10, 1, 4, 1, 4, 9, 9, 1];
d = [81, 1, 16, 100, 81, 9, 9, 1, 1, 81, 16];

e = [1];
f = [1, 2, 18];

g = [5, 1, 10, 4, 3, 7, 2, 4, 6, 6];
h = [25, 49, 101, 16, 1, 4, 36, 16, 9, 36];

// console.log(comp(a, b)); //true
// console.log(comp(c, d)); //true
// console.log(comp(e, f)); //false
console.log(comp(g, h)); //false
