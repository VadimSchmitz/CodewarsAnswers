//https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

toJadenCase = function (string) {
  return string
    .split(" ")
    .map((element) => element.replace(element[0], element[0].toUpperCase()))
    .join(" ");
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
