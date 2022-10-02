//https://www.codewars.com/kata/559590633066759614000063/javascript

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}

a = [1, 2, 3, 4, 5]; // --> [1,5]
minMax(a)