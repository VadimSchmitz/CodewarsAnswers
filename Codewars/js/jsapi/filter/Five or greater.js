function fiveAndGreaterOnly(arr) {
  return arr.filter((word) => word >= 5);
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
