function wave(str) {
  return str
    .split("")
    .map(
      (element, index) =>
        str.slice(0, index) +
        str[index].replace(element, element.toUpperCase()) +
        str.slice(index + 1)
    )
    .filter((x) => x != str);
}

wave("hello"); // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave("hello"));
console.log(wave("two words"));
