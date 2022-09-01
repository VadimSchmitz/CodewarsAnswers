//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  return str.split(" ").map((item) => item.split("").reverse().join("")).join(" ");
}

a = "This is an example!"; //==> "sihT si na !elpmaxe"
b = "double  spaces"; //    ==> "elbuod  secaps"

console.log(reverseWords(a));
