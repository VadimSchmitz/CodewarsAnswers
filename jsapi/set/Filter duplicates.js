//filtering duplicates
let arr = [1, 2, 3, 4, 5, 1, 2, 2, 5];
let mySet = new Set(arr);
const uniqueArray = [...mySet];

console.log(uniqueArray);
