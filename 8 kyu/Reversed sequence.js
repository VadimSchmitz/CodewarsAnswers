//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

const reverseSeq = (n) => [...Array(n)].map((_, i) => n - i);

n = 5; // --> [5,4,3,2,1]

console.log(reverseSeq(n));
