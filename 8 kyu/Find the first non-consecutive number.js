//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(b) {
  let f = b.find((e, i) => e !== i + arr[0]);
  return Number.isInteger(f) ? f : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
