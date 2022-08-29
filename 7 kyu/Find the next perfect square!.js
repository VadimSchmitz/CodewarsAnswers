//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 == 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

a = 121; //--> 144
b = 625; //--> 676
c = 114; //--> -1 since 114 is not a perfect square

console.log(findNextSquare(a));
