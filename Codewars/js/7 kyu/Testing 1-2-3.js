//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

var number = function (a) {
  return a.map((element, index) => `${index + 1}: ${element}`);
};

a = ["a", "b", "c"]; //, ["1: a", "2: b", "3: c"]
number(a);
