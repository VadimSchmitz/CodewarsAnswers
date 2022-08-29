//https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript

function order(words) {
  regex = /([1-9])/g;

  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(regex) - b.match(regex);
    })
    .join(" ");
}

a = "is2 Thi1s T4est 3a"; //  -->  "Thi1s is2 3a T4est"
b = "4of Fo1r pe6ople g3ood th5e the2"; // -->  "Fo1r the2 g3ood 4of th5e pe6ople"
c = ""; // -->  ""

console.log(order(a));
