//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/javascript

function removeEveryOther(arr) {
  let i = arr.length;
  while (i--) i % 2 === 1 && arr.splice(i, 1);
  return arr;
}

function removeEveryOther(arr) {
  return arr.filter(function (_, index) {
    return index % 2 === 0;
  });
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
