//https://www.codewars.com/kata/576b93db1129fcf2200001e6/javascript

function sumArray(arr) {
  return Array.isArray(arr)
    ? arr
        .sort(function (a, b) {
          return a - b;
        })
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr, 0)
    : 0;
}

sumArray([6, 2, 1, 8, 10]);
