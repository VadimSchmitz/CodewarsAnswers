//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n) {
  count = 0;
  for (i = n; 0 < i; i--) {
    if (n % i == 0) count++;
  }
  return count;
}

console.log(getDivisorsCnt(12));
