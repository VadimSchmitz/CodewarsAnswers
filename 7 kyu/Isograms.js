//https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript

function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size ? true : false;
}

a = "Dermatoglyphics"; //--> true
b = "aba"; //--> false
c = "moOse"; //--> false (ignore letter case)

console.log(isIsogram(c));
