//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
  return array.length > 0
    ? array.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / array.length
    : 0;
}

console.log(find_average([1, 2, 3]));
