function evensOnly(arr) {
  return arr.filter((item) => item % 2 === 0);
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
