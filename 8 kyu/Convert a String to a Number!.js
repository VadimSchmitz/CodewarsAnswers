//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = function (str) {
  var count = str.reduce(function (obj, b) {
    obj[b] = obj[b] + 1 || 1;
    return obj;
  }, {});

  return str.length == 10 && count.n == count.s && count.e == count.w
    ? true
    : false;
};

stringToNumber(["n", "s", "n", "s", "n", "s", "n", "n", "s"]);
stringToNumber(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
