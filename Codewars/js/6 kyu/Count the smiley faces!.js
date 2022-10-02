//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
  res = arr.join("").match(/(:|;)(-|~|)(\)|D)/g);
  return res != null ? res.length : 0;
}

console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":>  :~(  :(  ;-> ;>  :>  ;~>"]));
