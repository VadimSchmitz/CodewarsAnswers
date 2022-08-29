//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript

function zero(operator) {
  return operator
    ? eval([0, operator[0], operator[1]].join().replaceAll(",", ""))
    : 0;
}
function one(operator) {
  return operator
    ? eval([1, operator[0], operator[1]].join().replaceAll(",", ""))
    : 1;
}
function two(operator) {
  return operator
    ? eval([2, operator[0], operator[1]].join().replaceAll(",", ""))
    : 2;
}
function three(operator) {
  return operator
    ? eval([3, operator[0], operator[1]].join().replaceAll(",", ""))
    : 3;
}
function four(operator) {
  return operator
    ? eval([4, operator[0], operator[1]].join().replaceAll(",", ""))
    : 4;
}
function five(operator) {
  return operator
    ? eval([5, operator[0], operator[1]].join().replaceAll(",", ""))
    : 5;
}
function six(operator) {
  return operator
    ? eval([6, operator[0], operator[1]].join().replaceAll(",", ""))
    : 6;
}
function seven(operator) {
  return operator
    ? eval([7, operator[0], operator[1]].join().replaceAll(",", ""))
    : 7;
}
function eight(operator) {
  return operator
    ? eval([8, operator[0], operator[1]].join().replaceAll(",", ""))
    : 8;
}
function nine(operator) {
  return operator
    ? eval([9, operator[0], operator[1]].join().replaceAll(",", ""))
    : 9;
}

function plus(num) {
  return num ? ["+", num] : ["+"];
}
function minus(num) {
  return num ? ["-", num] : ["-"];
}
function times(num) {
  return num ? ["*", num] : ["*"];
}
function dividedBy(num) {
  return num ? ["/", num] : ["/"];
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
