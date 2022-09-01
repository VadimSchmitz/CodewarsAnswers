//https://www.codewars.com/kata/56747fd5cb988479af000028/javascript

function getMiddle(s) {
  if (s.length == 1) return s;
  return s.length % 2 == 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);
}

console.log(getMiddle("test")); //should return "es"
console.log(getMiddle("testing")); //should return "t"
console.log(getMiddle("middle")); //should return "dd"
console.log(getMiddle("A")); //should return "A"
