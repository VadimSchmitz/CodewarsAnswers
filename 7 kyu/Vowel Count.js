//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return [...str].filter((element) => vowels.includes(element)).length;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

getCount("abracadabra"); //5
