//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript

function invert(array) {
  return array.map((item) => item * -1);
}

invert([1, 2, 3, 4, 5]); //== [-1,-2,-3,-4,-5]
invert([1, -2, 3, -4, 5]); //== [-1,2,-3,4,-5]
invert([]); // == []
