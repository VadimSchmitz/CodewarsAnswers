//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function high(x) {
  arr = [];
  x = x.split(" ");

  x.forEach((element) => {
    let splitEntry = element.split("");
    let sum = 0;

    splitEntry.forEach((element) => {
      return (sum += parseInt(alphabet.indexOf(element) + 1));
    });

    arr.push(sum);
  });

  indexOfHighest = arr.indexOf(Math.max(...arr));
  return x[indexOfHighest];
}

// let s = "man i need a taxi up to ubud";
let s = "b aa";

high(s);
