function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((item) => item.length < 6);
}
// test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]
