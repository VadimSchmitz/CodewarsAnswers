//https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

function stray(numbers) {
  return numbers.find((e) => numbers.filter((v) => v === e).length === 1);
}

console.log(stray([2, 1, 1]));
