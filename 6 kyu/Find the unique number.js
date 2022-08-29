//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript

function findUniq(arr) {
  return +arr.filter((value) => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

findUniq([1, 1, 1, 2, 1, 1]); //=== 2;
findUniq([0, 0, 0.55, 0, 0]); //=== 0.55;
findUniq([0, 0, 1]); //=== 1;

console.log([0]);
