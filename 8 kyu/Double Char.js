//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
  return [...str]
    .map((item) => {
      return item + item;
    })
    .join("");
}

a = "String"; //   -> "SSttrriinngg"
b = "Hello World"; // -> "HHeelllloo  WWoorrlldd"
c = "1234!_ "; //  -> "11223344!!__  "

doubleChar(a);

console.log(doubleChar(a));
