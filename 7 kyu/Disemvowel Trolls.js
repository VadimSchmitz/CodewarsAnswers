//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let NotAllowed = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  return [...str].filter((i) => !NotAllowed.includes(i)).join("");
}

function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!")
console.log(disemvowel2("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!")
