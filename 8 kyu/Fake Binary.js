//https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

function fakeBin(x) {
  return [...x].map((item) => (item >= 5 ? 1 : 0)).join("");
}

fakeBin("45385593107843568"); //'01011110001100111'
