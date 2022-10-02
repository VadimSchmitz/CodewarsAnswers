//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

var isSquare2 = function (n) {
  if (n < 0) return false;
  return !String(Math.sqrt(n)).includes(".");
};

var isSquare = function (n) {
  return String(Math.sqrt(n)) % 1 === 0;
};

a = -1; // =>  false
b = 0; //=>  true
c = 3; //=>  false
d = 4; // =>  true
e = 25; // =>  true
f = 26; // =>  false

isSquare(a);
isSquare(b);
isSquare(c);
isSquare(d);
isSquare(e);
