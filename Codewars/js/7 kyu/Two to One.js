//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript

function longest(s1, s2) {
  set = new Set([...s1, ...s2]);
  return [...set].sort().join("");
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
longest(a, b); //-> "abcdefklmopqwxy"
